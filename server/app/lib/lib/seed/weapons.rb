module Lib
  module Seed
    # Code for filling up our database.
    class Weapons

      # @!attribute weapon_type_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :weapon_type_ids

      # @!attribute weapon_skill_ids
      #   @return [Hash{String => Integer}]
      attr_accessor :weapon_skill_ids

      # @!attribute sort_order_data
      #   @return [Hash{String => Integer}]
      attr_accessor :sort_order_data

      # @return [void]
      def initialize()
        self.weapon_type_ids  = {}
        self.weapon_skill_ids = {}

        WeaponType.all.each  { |wt| self.weapon_type_ids[wt.name]  = wt.id }
        WeaponSkill.all.each { |ws| self.weapon_skill_ids[ws.name] = ws.id }

        self.sort_order_data = Lib::FlatFile::Json.from_file(Rails.root.join("db", "seed_data", "sort_order", "weapons-sort-order.json"))
      end

      # @return [void]
      def seed()
        Weapon.where(is_shield: false).destroy_all()
        invalid = Lib::Seed.from_tsv("weapons.tsv", Weapon) { |x| self.process(x) }
        return invalid
      end


      # @param input [Hash]
      # @return [Hash]
      def process(input)
        output = {
          # equipment_effects_attributes: (input["effects"] || []),

          is_shield:             false,
          is_special:            (input["special"] == true || input["special"] == "TRUE" || input["special"] == "true"),
          name:                  input["name"],
          weight:                input["weight"],
          sort_order:            self.sort_order_data[input["name"]],
          weapon_type_id:        self.weapon_type_ids[input["weapon_type"]],
          weapon_skill_id:       self.weapon_skill_ids[input["skill_name"]],
          physical_damage_types: input["physical_damage_types"].split(/,\s*/),
          metadata: {
            effects:                input["effects"],
            notes:                  input["notes"],
            spell_boost_group:      input["spell_boost_group"],
            spell_boost_percentage: input["spell_boost_percentage"],
          },
          # FIXME: seeding weapons, defense_guard_boost
          defense_guard_boost:    input["defense_guard_boost"] || -1,
          range:                  input["range"],
          spell_boost_groups:     input["spell_boost_groups"] || [],
          spell_boost_percentage: input["spell_boost_percentage"],

          defense_physical:      input["defense_physical"],
          defense_magic:         input["defense_magic"],
          defense_fire:          input["defense_fire"],
          defense_lightning:     input["defense_lightning"],
          defense_holy:          input["defense_holy"],

          required_strength:     input["required_strength"],
          required_dexterity:    input["required_dexterity"],
          required_intelligence: input["required_intelligence"],
          required_faith:        input["required_faith"],
          required_arcane:       input["required_arcane"],
        }

        if ["Bows", "Light Bows", "Greatbows", "Crossbows", "Ballistae"].include?(input["weapon_type"])
          output[:defense_physical]    = 0
          output[:defense_magic]       = 0
          output[:defense_fire]        = 0
          output[:defense_lightning]   = 0
          output[:defense_holy]        = 0
          output[:defense_guard_boost] = 0
        end

        return output
      end

    end
  end
end
