module Lib
  # Code for filling up our database.
  module Seed

    # @return [Pathname]
    def self.seeds_folder()
      return Rails.root.join("db", "seed_data")
    end

    # @return [Pathname]
    def self.fixtures_folder()
      return Rails.root.join("test", "fixtures")
    end

    # @return [Hash]
    def self.all()
      invalid = {}
      invalid["armor_types"]                   = Lib::Seed::ArmorTypes.seed()
      invalid["weapon_types"]                  = Lib::Seed::WeaponTypes.seed()
      invalid["weapon_affinities"]             = Lib::Seed::WeaponAffinities.seed()
      invalid["weapon_skills"]                 = Lib::Seed::WeaponSkills.new().seed()
      invalid["talismans"]                     = Lib::Seed::Talismans.new().seed()
      invalid["armor"]                         = Lib::Seed::Armors.new().seed()
      invalid["weapons"]                       = Lib::Seed::Weapons.new().seed()
      invalid["shields"]                       = Lib::Seed::Shields.new().seed()
      invalid["spells"]                        = Lib::Seed::Spells.seed()
      invalid["attack_element_correct_params"] = Lib::Seed::AttackElementCorrectParams.seed()
      invalid["weapon_stats"]                  = Lib::Seed::WeaponStats.new().seed()
      invalid["starting_classes"]              = Lib::Seed::StartingClasses.new().seed()
      error_file = Lib::Util.save_to_file(invalid, "seed-errors.json", add_timestamp: true)
      puts("#{invalid.values.flatten.length} errors; see file '#{error_file}'")
      return invalid
    # rescue SignalException, SystemExit, Interrupt
    #   error_file = Lib::Util.save_to_file(invalid, "seed-errors.json", add_timestamp: true)
    #   puts("#{invalid.values.flatten.length} errors; see file '#{error_file}'")
    end

    # @param model_class [Class] ActiveRecord model to create.
    # @param rows [Array]
    # @param index [Boolean]
    #
    # @yieldparam [Hash] one record from the file
    # @yieldreturn [Hash] arguments for creating the model instance
    #
    # @return [Array<Hash>]
    def self.from_rows(model_class, rows, &block)
      pb = Lib::ProgressBar.new(rows.length, title: "seeding #{model_class.name} data")
      invalid = []
      rows.each do |row|
        data = row
        data = row[1] if row.is_a?(Array)
        args = block.call(data)
        if args.blank?()
          pb.increment()
          next
        end
        args.compact!()
        model = model_class.new(args)
        model.save!()
        # TODO: implement updates instead of just creates
        if false
          model = model_class.find_by(name: args[:name])
          model.update!(args)
        end
        pb.increment()
      rescue StandardError => e
        invalid << {
          args:  args,
          error: e.message,
        }
        pb.increment()
        # pb.newline()
        # pp(args)
        # puts(e)
        # pb.newline()
      end
      return invalid
    end

    # @param file_name [String] Name of the JSON file with data to import.
    # @param model_class [Class] ActiveRecord model to create.
    #
    # @yieldparam [Hash] one fixture from the file
    # @yieldreturn [Hash] arguments for creating the model instance from the fixture
    #
    # @return [Array<Hash>]
    def self.from_json(file_name, model_class, &block)
      path = self.seeds_folder.join(file_name)
      data = Lib::FlatFile::Json.from_file(path)
      invalid = from_rows(model_class, data) { |x| block.call(x) }
      return invalid
    end

    # @param file_name [String] Name of the TSV file with data to import.
    # @param model_class [Class] ActiveRecord model to create.
    #
    # @yieldparam [Hash] one fixture from the file
    # @yieldreturn [Hash] arguments for creating the model instance from the fixture
    #
    # @return [Array<Hash>]
    def self.from_fixture(file_name, model_class, &block)
      path = self.fixtures_folder.join(file_name)
      yaml_data = ERB.new(path.read).result
      fixture_data = YAML.load(yaml_data)
      invalid = from_rows(model_class, fixture_data) { |x| block.call(x) }
      return invalid
    end

    # @param file_name [String] Name of the TSV file with data to import.
    # @param model_class [Class] ActiveRecord model to create.
    #
    # @yieldparam [Hash] cells from one row of the file
    # @yieldreturn [Hash] arguments for creating the model instance from the row
    #
    # @return [Array<Hash>]
    def self.from_tsv(file_name, model_class, &block)
      path = self.seeds_folder.join(file_name)
      rows = Lib::FlatFile::Tsv.from_file(path)
      invalid = from_rows(model_class, rows) { |x| block.call(x) }
      return invalid
    end

  end
end
