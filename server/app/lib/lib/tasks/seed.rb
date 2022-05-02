module Lib
  module Tasks
    class Seed

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
        # invalid["armor_types"] = self.armor_types()
        # invalid["weapon_types"] = self.weapon_types()
        # invalid["weapon_skills"] = self.weapon_skills()
        # invalid["talismans"] = self.talismans()
        # invalid["armor"] = self.armor()
        invalid["weapons"] = self.weapons()
        invalid["shields"] = self.shields()
        # invalid["spells"] = self.spells()
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

      # @return [void]
      def self.weapon_types()
        # WeaponType.destroy_all()
        invalid = self.from_fixture("weapon_types.yml", WeaponType) do |fx|
          _args = {
            id:            fx["id"],
            name:          fx["name"],
            singular_name: fx["singular_name"],
            plural_name:   fx["plural_name"],
            is_shield:     (fx["is_shield"] == true),
          }
        end
        return invalid
      end

      # @return [void]
      def self.armor_types()
        # ArmorType.destroy_all()
        invalid = self.from_fixture("armor_types.yml", ArmorType) do |fx|
          _args = {
            id:   fx["id"],
            name: fx["name"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.weapon_skills()
        # Weapon.destroy_all()
        # WeaponSkill.destroy_all()
        invalid = self.from_tsv("weapon-skills.tsv", WeaponSkill) do |fx|
          _args = {
            name:              fx["name"],
            description:       fx["Effect"],
            is_chargeable:     fx["is_chargeable"],
            ash_of_war:        (fx["ash_of_war"] == true || fx["ash_of_war"] == "TRUE" || fx["ash_of_war"] == "true"),
            can_be_applied_to: (fx["can_be_applied_to"] || "").split(/,\s*/),
          }
        end
        return invalid
      end

      # @return [void]
      def self.armor()
        Armor.destroy_all()
        armor_types = {
          "Head"  => 1,
          "Chest" => 2,
          "Arms"  => 3,
          "Legs"  => 4,
        }
        invalid = self.from_json("armor.json", Armor) do |fx|
          _args = {
            name:          fx["name"],
            armor_type_id: armor_types[fx["type"]],
            weight:        fx["weight"],
            physical:      fx["physical"],
            vs_strike:     fx["strike"],
            vs_slash:      fx["slash"],
            vs_pierce:     fx["pierce"],
            magic:         fx["magic"],
            fire:          fx["fire"],
            lightning:     fx["lightning"],
            holy:          fx["holy"],
            immunity:      fx["immunity"],
            robustness:    fx["robustness"],
            focus:         fx["focus"],
            vitality:      fx["vitality"],
            poise:         fx["poise"],
            metadata: {
              effects: (fx["effects"] || []),
              **(fx["metadata"] || {}),
            },
          }
        end
        return invalid
      end

      # @return [void]
      def self.talismans()
        Talisman.destroy_all()
        invalid = self.from_json("talismans.json", Talisman) do |fx|
          _args = {

            name:             fx["name"],
            weight:           fx["weight"],
            description:      fx["description"],
            long_description: fx["longDdescription"],
            restricts:        fx["restricts"],
            effects:          fx["effects"],

            equipment_effects_attributes: fx["effects"],

            metadata: {
              location: fx["location"],
              **(fx["metadata"] || {}),
            },

          }
        end
        return invalid
      end

      # @return [void]
      def self.shields()
        Weapon.where(is_shield: true).each(&:destroy)
        type_ids = {
          "Small Shields"  => 41,
          "Medium Shields" => 42,
          "Greatshields"   => 43,
        }
        skill_ids = {}
        WeaponSkill.all.each { |ws| skill_ids[ws.name] = ws.id }
        invalid = self.from_json("shields.json", Weapon) do |fx|
          _args = {
            equipment_effects_attributes: (fx["effects"] || []),

            is_shield:             true,
            is_special:            (fx["is_special"] == true || fx["is_special"] == "TRUE" || fx["is_special"] == "true"),
            name:                  fx["name"],
            weight:                fx["weight"],
            weapon_type_id:        type_ids[fx["weapon_type"]],
            weapon_skill_id:       skill_ids[fx["skill"]],
            physical_damage_types: [ "Strike" ],
            metadata:              { skill: fx["skill"] },

            required_strength:     fx["required_strength"],
            required_dexterity:    fx["required_dexterity"],
            required_intelligence: fx["required_intelligence"],
            required_faith:        fx["required_faith"],
            required_arcane:       fx["required_arcane"],

            attack_physical:       fx["attack_physical"],
            attack_magic:          fx["attack_magic"],
            attack_fire:           fx["attack_fire"],
            attack_lightning:      fx["attack_lightning"],
            attack_holy:           fx["attack_holy"],
            attack_critical:       fx["attack_critical"],

            defense_physical:      fx["defense_physical"],
            defense_magic:         fx["defense_magic"],
            defense_fire:          fx["defense_fire"],
            defense_lightning:     fx["defense_lightning"],
            defense_holy:          fx["defense_holy"],
            defense_guard_boost:   fx["defense_guard_boost"],

            scaling_strength:      fx["scaling_strength"],
            scaling_intelligence:  fx["scaling_intelligence"],
            scaling_dexterity:     fx["scaling_dexterity"],
            scaling_faith:         fx["scaling_faith"],
            scaling_arcane:        fx["scaling_arcane"],

            damage_blood_loss:   fx["damage_blood_loss"],
            damage_frost:        fx["damage_frost"],
            damage_madness:      fx["damage_madness"],
            damage_poison:       fx["damage_poison"],
            damage_sleep:        fx["damage_sleep"],
            damage_death_blight: fx["damage_death_blight"],
            damage_scarlet_rot:  fx["damage_scarlet_rot"],
          }
        end
        return invalid
      end

      # @return [void]
      def self.weapons()
        Weapon.where(is_shield: false).each(&:destroy)
        type_ids = {}
        skill_ids = {}
        WeaponType.all.each { |wt| type_ids[wt.singular_name] = wt.id }
        WeaponSkill.all.each { |ws| skill_ids[ws.name] = ws.id }
        invalid = self.from_tsv("weapons.tsv", Weapon) do |fx|
          _args = {
            # equipment_effects_attributes: (fx["effects"] || []),

            is_shield:             false,
            is_special:            (fx["special"] == true || fx["special"] == "TRUE" || fx["special"] == "true"),
            name:                  fx["name"],
            weight:                fx["weight"],
            weapon_type_id:        type_ids[fx["weapon_type"]],
            weapon_skill_id:       skill_ids[fx["skill_name"]],
            physical_damage_types: fx["physical_damage_types"].split(/,\s*/),
            metadata: {
              effects:                fx["effects"],
              notes:                  fx["notes"],
              spell_boost_group:      fx["spell_boost_group"],
              spell_boost_percentage: fx["spell_boost_percentage"],
            },
            # FIXME: seeding weapons, defense_guard_boost
            defense_guard_boost:    fx["defense_guard_boost"] || -1,
            attack_critical:        fx["attack_critical"],
            attack_stamina_damage:  fx["attack_stamina_damage"],
            range:                  fx["range"],
            incantation_scaling:    fx["incantation_scaling"],
            sorcery_scaling:        fx["sorcery_scaling"],
            spell_boost_groups:     fx["spell_boost_groups"] || [],
            spell_boost_percentage: fx["spell_boost_percentage"],

            attack_physical:       fx["attack_physical"],
            attack_magic:          fx["attack_magic"],
            attack_fire:           fx["attack_fire"],
            attack_lightning:      fx["attack_lightning"],
            attack_holy:           fx["attack_holy"],

            defense_physical:      fx["defense_physical"],
            defense_magic:         fx["defense_magic"],
            defense_fire:          fx["defense_fire"],
            defense_lightning:     fx["defense_lightning"],
            defense_holy:          fx["defense_holy"],

            scaling_strength:      fx["scaling_strength"],
            scaling_intelligence:  fx["scaling_intelligence"],
            scaling_dexterity:     fx["scaling_dexterity"],
            scaling_faith:         fx["scaling_faith"],
            scaling_arcane:        fx["scaling_arcane"],

            required_strength:     fx["required_strength"],
            required_dexterity:    fx["required_dexterity"],
            required_intelligence: fx["required_intelligence"],
            required_faith:        fx["required_faith"],
            required_arcane:       fx["required_arcane"],

            damage_blood_loss:   fx["damage_blood_loss"],
            damage_frost:        fx["damage_frost"],
            damage_madness:      fx["damage_madness"],
            damage_poison:       fx["damage_poison"],
            damage_sleep:        fx["damage_sleep"],
            damage_death_blight: fx["damage_death_blight"],
            damage_scarlet_rot:  fx["damage_scarlet_rot"],
          }
          if ["Bows", "Light Bows", "Greatbows", "Crossbows", "Ballistae"].include?(fx["weapon_type"])
            _args[:defense_physical]    = 0
            _args[:defense_magic]       = 0
            _args[:defense_fire]        = 0
            _args[:defense_lightning]   = 0
            _args[:defense_holy]        = 0
            _args[:defense_guard_boost] = 0
          end
          _args
        end
        return invalid
      end

      # @return [void]
      def self.spells()
        Spell.destroy_all()
        invalid = self.from_tsv("spells.tsv", Spell) do |fx|
          _args = {
              metadata: {
                fp:             fx["FP"],
                bonus_category: fx["bonus_category"],
              },
              name:                    fx["name"],
              spell_type:              fx["spell_type"],
              description:             fx["description"],
              slots_required:          fx["slots_required"],
              stamina_cost:            fx["stamina_cost"],
              fp_cost:                 fx["fp_cost"],
              fp_cost_alt:             fx["fp_cost_alt"],
              # fp_cost_alt_description: fx["fp_cost_alt_description"],
              bonus_category:          fx["category"],

              required_intelligence:   fx["int"],
              required_faith:          fx["fai"],
              required_arcane:         fx["arc"],

              is_chargeable:           fx["chargeable"],
              is_usable_while_jumping: fx["jumping"],
              is_usable_on_horse:      fx["horse"],

              # damage_blood_loss:   fx["damage_blood_loss"],
              # damage_frost:        fx["damage_frost"],
              # damage_madness:      fx["damage_madness"],
              # damage_poison:       fx["damage_poison"],
              # damage_sleep:        fx["damage_sleep"],
              # damage_death_blight: fx["damage_death_blight"],
              # damage_scarlet_rot:  fx["damage_scarlet_rot"],
              inflicts_physical:     fx["physical"],
              inflicts_magic:        fx["magic"],
              inflicts_fire:         fx["fire"],
              inflicts_lightning:    fx["lightning"],
              inflicts_holy:         fx["holy"],
              inflicts_blood_loss:   fx["bleed"],
              inflicts_frost:        fx["frost"],
              inflicts_madness:      fx["madness"],
              inflicts_poison:       fx["poison"],
              inflicts_sleep:        fx["sleep"],
              inflicts_death_blight: fx["death"],
              inflicts_scarlet_rot:  fx["rot"],
          }
        end
        return invalid
      end

    end
  end
end
