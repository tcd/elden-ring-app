module Lib
  module Tasks
    ##
    #
    # ## See:
    #
    # - [Rails rake tasks for dump & restore of PostgreSQL databases](https://gist.github.com/hopsoft/56ba6f55fe48ad7f8b90)
    #   - [fork by @kofronpi](https://gist.github.com/kofronpi/37130f5ed670465b1fe2d170f754f8c6)
    #   - [fork by @joelvh](https://gist.github.com/joelvh/f50b8462611573cf9015e17d491a8a92)
    # - [`pg_dump` docs](https://www.postgresql.org/docs/11/app-pgdump.html)
    # - [`pg_restore` docs](https://www.postgresql.org/docs/11/app-pgrestore.html)
    # - [dumptruck](https://rubygems.org/gems/dumptruck)
    # - [String#shellescape](https://apidock.com/ruby/v2_6_3/String/shellescape)
    # - [How To Use Arguments In a Rake Task (with ZSH)](https://thoughtbot.com/blog/how-to-use-arguments-in-a-rake-task)
    #
    # ## Input/Output Formats
    #
    # - `p` (plain)
    #     - Output a plain-text SQL script file (the default).
    # - `c` (custom)
    #     - Output a custom-format archive suitable for input into pg_restore.
    #     - Together with the directory output format, this is the most flexible output format in that it allows manual selection and reordering of archived items during restore.
    #     - This format is also compressed by default.
    # - `d` (directory)
    #     - Output a directory-format archive suitable for input into pg_restore.
    #     - This will create a directory with one file for each table and blob being dumped, plus a so-called Table of Contents file describing the dumped objects in a machine-readable format that pg_restore can read.
    #     - A directory format archive can be manipulated with standard Unix tools; for example, files in an uncompressed archive can be compressed with the gzip tool.
    #     - This format is compressed by default and also supports parallel dumps.
    # `t` (tar)
    #     - Output a tar-format archive suitable for input into pg_restore.
    #     - The tar format is compatible with the directory format: extracting a tar-format archive produces a valid directory-format archive.
    #     - However, the tar format does not support compression.
    #     - Also, when using tar format the relative order of table data items cannot be changed during restore.
    module Dump

      # ==========================================================================
      # Tasks
      # ==========================================================================

      # @param log_output [Boolean] (true)
      # @return [Array<String>]
      def self.list_dumps(log_output: true)
        dir   = self.backup_directory()
        path  = File.join(dir, "**", "*")
        paths = Dir.glob(path, File::FNM_DOTMATCH)
        files = paths.select { |e| File.file?(e) }
        files.sort!().reverse!()
        if log_output
          puts("backup_directory: #{dir}")
          puts()
          puts(files)
        end
        return files
      end

      # @return [Hash{String => String}]
      def self.list_dumps_as_hash(fmt: "c")
        dir   = self.backup_directory()
        path  = File.join(dir, "**", "*")
        paths = Dir.glob(path, File::FNM_DOTMATCH)
        files = paths.select { |e| File.file?(e) }
        files.sort!().reverse!()
        extension = suffix_for_format(fmt)
        options = {}
        files.map { |f| options[self.pretty_timestamp(File.basename(f, extension))] = f }
        return options
      end

      # See:
      #
      # - [`pg_dump` docs](https://www.postgresql.org/docs/11/app-pgdump.html)
      #
      # @param fmt [String] ("c")
      # @param verbose [Boolean] (true)
      #   This will cause pg_dump to:
      #     - output detailed object comments and start/stop times to the dump file
      #     - output progress messages to `stderr`
      # @return [String]
      def self.dump_cmd(fmt: "c", verbose: true)
        host = ActiveRecord::Base.connection_config[:host]
        db   = ActiveRecord::Base.connection_config[:database]
        # user = ActiveRecord::Base.connection_config[:username]
        # pass = ActiveRecord::Base.connection_config[:password]
        user = (ActiveRecord::Base.connection_config[:username] || "postgres")
        pass = (ActiveRecord::Base.connection_config[:password] || "postgres")
        dump_file = self.file_name(db: db, fmt: fmt)
        return [
          "PGPASSWORD='#{pass}'",
          # https://www.postgresql.org/docs/11/app-pgdump.html
          "pg_dump",
          # Host name of the machine on which the DB server is running
          "--host=#{host}",
          # User name to connect as
          (user.blank? ? nil : "--username"),
          (user.blank? ? nil : user),
          # Specifies verbose mode.
          (verbose ? "--verbose" : nil),
          # Output commands to clean (drop) database objects prior to outputting the commands for creating them
          # "--clean",
          # Don't set ownership of objects to match the original database
          # (So that can use the output with `pg_restore`)
          "--no-owner",
          # Prevent dumping of access privileges (grant/revoke commands)
          # (same as `--no-privileges`)
          "--no-acl",
          # Dump object identifiers (OIDs) as part of the data for every table
          # Use this option if your application references the OID columns in some way (e.g., in a foreign key constraint)
          # "-o",
          # Output a custom-format archive suitable for input into pg_restore
          "--format=#{fmt}",
          db,
          ">",
          dump_file,
        ].compact.join(" ")
      end

      # FIXME: write method(s) restore_from_dump & restore_from_sql
      # See:
      #
      # - [`pg_restore` docs](https://www.postgresql.org/docs/11/app-pgrestore.html)
      #
      # @param dump_file [String]
      # @param verbose [Boolean] (true)
      # @return [String]
      def self.restore_cmd(dump_file: nil, verbose: true)
        host = ActiveRecord::Base.connection_config[:host]
        db   = ActiveRecord::Base.connection_config[:database]
        # user = ActiveRecord::Base.connection_config[:username]
        # pass = ActiveRecord::Base.connection_config[:password]
        user = (ActiveRecord::Base.connection_config[:username] || "postgres")
        pass = (ActiveRecord::Base.connection_config[:password] || "postgres")
        dump_file ||= self.file_name(db: db)
        return [
          "PGPASSWORD='#{pass}'",
          # https://www.postgresql.org/docs/11/app-pgrestore.html
          "pg_restore",
          # "--disable-triggers",
          # Specifies verbose mode.
          (verbose ? "--verbose" : nil),
          # Host name of the machine on which the DB server is running.
          "--host=#{host}",
          # User name to connect as.
          (user.blank? ? nil : "--username=#{user}"),
          # Clean (drop) database objects before recreating them.
          # "--clean",
          # Do not set ownership of objects to match the original database.
          "--no-owner",
          # Prevent restoration of access privileges (grant/revoke commands).
          "--no-acl",
          # Connect to database `dbname` and restore directly into the database.
          "--dbname=#{db}",
          dump_file,
        ].compact.join(" ")
      end

      # ==========================================================================
      # Helpers
      # ==========================================================================

      # @param create [Boolean] (true)
      # @return [Pathname]
      def self.backup_directory(create = true)
        dir = Rails.root.join("db", "dumps")
        if create && !Dir.exist?(dir)
          puts("Creating #{dir}")
          FileUtils.mkdir_p(dir)
        end
        return dir
      end

      # @yieldparam app [String]
      # @yieldparam host [String]
      # @yieldparam db [String]
      # @yieldparam user [String]
      # @yieldparam password [String]
      # @return [void]
      def self.with_config()
        yield Rails.application.class.module_parent_name.underscore,
              ActiveRecord::Base.connection_config[:host],
              ActiveRecord::Base.connection_config[:database],
              ActiveRecord::Base.connection_config[:username],
              ActiveRecord::Base.connection_config[:password]
              # (ActiveRecord::Base.connection_config[:username] || "postgres"),
              # (ActiveRecord::Base.connection_config[:password] || "postgres")
      end

      # @param suffix [String]
      # @return [String]
      def self.suffix_for_format(suffix)
        return case suffix
               when "c" then "dump"
               when "p" then "sql"
               when "t" then "tar"
               when "d" then "dir"
               end
      end

      # @param file [String,Pathname]
      # @return [String]
      def self.format_for_file(file)
        file = file.to_s() if file.is_a?(Pathname)
        return case file
               when /\.dump$/ then "c"
               when /\.sql$/  then "p"
               when /\.dir$/  then "d"
               when /\.tar$/  then "t"
               end
      end

      # @return [String]
      def self.timestamp()
        # 2020-07-27-13_17_35
        # return Time.zone.now.strftime("%Y%m%d%H%M%S")
        return Time.zone.now.strftime("%Y-%m-%d-%H_%M_%S")
      end

      # See:
      #
      # - [`Time#strftime`](https://ruby-doc.org/core-2.6.5/Time.html#method-i-strftime)
      # - [`Integer#ordinalize`](https://api.rubyonrails.org/v5.1/classes/Integer.html#method-i-ordinalize)
      #
      # @param timestamp [String]
      # @return [Time]
      def self.pretty_timestamp(timestamp)
        time = Time.zone.strptime(timestamp, "%Y-%m-%d-%H_%M_%S")
        return time.strftime("%A, %B #{time.day.ordinalize} %Y %r - #{timestamp[20..-1]}")
      end

      # @param backup_dir [Pathname]
      # @param db [String]
      # @return [String]
      def self.file_name(
        backup_dir: self.backup_directory(),
        fmt: "c",
        db:
      )
        extension = suffix_for_format(fmt)
        file_name = "#{self.timestamp()}.#{db}.#{extension}"
        return backup_dir.join(file_name)
      end

    end
  end
end
