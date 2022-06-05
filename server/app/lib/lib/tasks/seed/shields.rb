module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Shields

        # @return [Hash{String => Integer}]
        WEAPON_TYPE_IDS = {
          "Small Shields"  => 41,
          "Medium Shields" => 42,
          "Greatshields"   => 43,
        }.freeze()

        # @!attribute weapon_type_ids
        #   @return [Hash{String => Integer}]
        attr_accessor :weapon_type_ids

        # @!attribute weapon_skill_ids
        #   @return [Hash{String => Integer}]
        attr_accessor :weapon_skill_ids

        # @return [void]
        def initialize()
          self.weapon_type_ids = WEAPON_TYPE_IDS
          self.weapon_skill_ids = {}

          WeaponSkill.all.each { |ws| self.weapon_skill_ids[ws.name] = ws.id }
        end

        # @return [void]
        def seed()
          # Weapon.where(is_shield: true).each(&:destroy)
          invalid = Lib::Tasks::Seed.from_json("shields.json", Weapon) { |x| process(x) }
          return invalid
        end

        # @param input [Hash]
        # @return [Hash]
        def process(input)
          output = {
            equipment_effects_attributes: (input["effects"] || []),

            is_shield:             true,
            name:                  input["name"],
            weight:                input["weight"],
            weapon_type_id:        self.weapon_type_ids[input["weapon_type"]],
            weapon_skill_id:       self.weapon_skill_ids[input["skill"]],
            physical_damage_types: ["Strike"],
            metadata:              { skill: input["skill"] },

            required_strength:     input["required_strength"],
            required_dexterity:    input["required_dexterity"],
            required_intelligence: input["required_intelligence"],
            required_faith:        input["required_faith"],
            required_arcane:       input["required_arcane"],

            attack_physical:       input["attack_physical"],
            attack_magic:          input["attack_magic"],
            attack_fire:           input["attack_fire"],
            attack_lightning:      input["attack_lightning"],
            attack_holy:           input["attack_holy"],
            attack_critical:       input["attack_critical"],

            defense_physical:      input["defense_physical"],
            defense_magic:         input["defense_magic"],
            defense_fire:          input["defense_fire"],
            defense_lightning:     input["defense_lightning"],
            defense_holy:          input["defense_holy"],
            defense_guard_boost:   input["defense_guard_boost"],

            scaling_strength:      input["scaling_strength"],
            scaling_intelligence:  input["scaling_intelligence"],
            scaling_dexterity:     input["scaling_dexterity"],
            scaling_faith:         input["scaling_faith"],
            scaling_arcane:        input["scaling_arcane"],

            damage_blood_loss:   input["damage_blood_loss"],
            damage_frost:        input["damage_frost"],
            damage_madness:      input["damage_madness"],
            damage_poison:       input["damage_poison"],
            damage_sleep:        input["damage_sleep"],
            damage_death_blight: input["damage_death_blight"],
            damage_scarlet_rot:  input["damage_scarlet_rot"],
          }

          output[:is_special] = (input["is_special"] == true || input["is_special"] == "TRUE" || input["is_special"] == "true")

          return output
        end

      end
    end
  end
end
