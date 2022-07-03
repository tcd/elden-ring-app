module Lib
  # Utility functions for use throughout the app.
  module Util

    # @param params [Array<Symbol>]
    # @return [Object]
    def self.get_credential(*params)
      return Rails.application.credentials.dig(Rails.env.to_sym, *params)
    end

    # Write out data to a JSON file in `ActiveStorage::Blob` for the current `Rails.env`.
    # Prepends a unique timestamp to the filename.
    #
    # @param data [Object]
    # @param name [String]
    # @param add_timestamp [Boolean]
    # @param log [Boolean]
    # @return [String]
    def self.save_to_file(data, name, add_timestamp: true, log: false)
      base_name = File.basename(name)
      file_name = base_name
      if add_timestamp
        file_name = "#{Time.zone.now.to_i}.#{base_name}"
      end
      name.gsub!(base_name, file_name)
      path = Rails.root.join("storage", "saved_files", name)
      FileUtils.mkdir_p(path.parent)
      data = JSON.pretty_generate(data) unless data.is_a?(String)
      File.open(path, "a") { |f| f.write(data) }
      # File.write(path, data, mode: "a")
      puts("file written: #{path.to_s}") if log
      return path.to_s()
    end

  end
end
