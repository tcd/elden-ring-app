module Lib
  module Tasks
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
        invalid["armor_types"]                   = Lib::Tasks::Seed::ArmorTypes.seed()
        invalid["weapon_types"]                  = Lib::Tasks::Seed::WeaponTypes.seed()
        invalid["weapon_affinities"]             = Lib::Tasks::Seed::WeaponAffinities.seed()
        invalid["weapon_skills"]                 = Lib::Tasks::Seed::WeaponSkills.seed()
        invalid["talismans"]                     = Lib::Tasks::Seed::Talismans.seed()
        invalid["armor"]                         = Lib::Tasks::Seed::Armors.seed()
        invalid["weapons"]                       = Lib::Tasks::Seed::Weapons.seed()
        invalid["shields"]                       = Lib::Tasks::Seed::Shields.seed()
        invalid["spells"]                        = Lib::Tasks::Seed::Spells.seed()
        # invalid["attack_element_correct_params"] = Lib::Tasks::Seed::AttackElementCorrectParams.seed()
        # invalid["weapon_attack_stats"]           = Lib::Tasks::Seed::WeaponAttackStats.seed()
        error_file = Lib::Util.save_to_file(invalid, "seed-errors.json", add_timestamp: true)
        puts("#{invalid.values.flatten.length} errors; see file '#{error_file}'")
        return invalid
      end

      # @param file_name [String] Name of the JSON file with data to import.
      # @param model_class [Class] ActiveRecord model to create.
      #
      # @yieldparam [Hash] one fixture from the file
      # @yieldreturn [Hash] arguments for creating the model instance from the fixture
      #
      # @return [Array<Hash>]
      def self.from_json(file_name, model_class)
        invalid = []
        path = self.seeds_folder.join(file_name)
        data = Lib::FlatFile::Json.from_file(path)
        pb = Lib::ProgressBar.new(data.length, title: "seeding #{model_class.name} data")
        data.each do |x|
          args = yield(x)
          args.compact!()
          model = model_class.new(args)
          model.save!()
          pb.increment()
        rescue StandardError => e
          invalid << {
            args:  args,
            name: args&.dig(:name),
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

      # @param file_name [String] Name of the TSV file with data to import.
      # @param model_class [Class] ActiveRecord model to create.
      #
      # @yieldparam [Hash] one fixture from the file
      # @yieldreturn [Hash] arguments for creating the model instance from the fixture
      #
      # @return [Array<Hash>]
      def self.from_fixture(file_name, model_class)
        invalid = []
        path = self.fixtures_folder.join(file_name)
        yaml_data = ERB.new(path.read).result
        fixture_data = YAML.load(yaml_data)
        pb = Lib::ProgressBar.new(fixture_data.length, title: "seeding #{model_class.name} data")
        fixture_data.each do |fixture|
          fx = fixture[1]
          args = yield(fx)
          args.compact!()
          model = model_class.new(args)
          model.save!()
          pb.increment()
        rescue StandardError => e
          invalid << {
            args:  args,
            error: e,
          }
          pb.increment()
          # pb.newline()
          # pp(args)
          # puts(e)
          # pb.newline()
        end
        return invalid
      end

      # @param file_name [String] Name of the TSV file with data to import.
      # @param model_class [Class] ActiveRecord model to create.
      #
      # @yieldparam [Hash] cells from one row of the file
      # @yieldreturn [Hash] arguments for creating the model instance from the row
      #
      # @return [Array<Hash>]
      def self.from_tsv(file_name, model_class)
        invalid = []
        path = self.seeds_folder.join(file_name)
        rows = Lib::FlatFile::Tsv.from_file(path)
        pb = Lib::ProgressBar.new(rows.length, title: "seeding #{model_class.name} data")
        rows.each do |row|
          args = yield(row)
          args.compact!()
          model = model_class.new(args)
          model.save!()
          pb.increment()
        rescue StandardError => e
          invalid << {
            args:  args,
            error: e,
          }
          pb.increment()
          pb.newline()
          pp(args)
          puts(e)
          pb.newline()
        end
        return invalid
      end

    end
  end
end
