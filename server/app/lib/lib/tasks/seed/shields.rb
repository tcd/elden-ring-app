module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Shields

        # @return [void]
        def self.seed()
          Weapon.where(is_shield: true).each(&:destroy)
          type_ids = {
            "Small Shields"  => 41,
            "Medium Shields" => 42,
            "Greatshields"   => 43,
          }
          skill_ids = {}
          WeaponSkill.all.each { |ws| skill_ids[ws.name] = ws.id }
          invalid = Lib::Tasks::Seed.from_json("shields.json", Weapon) do |fx|
            _args = {
              equipment_effects_attributes: (fx["effects"] || []),

              is_shield:             true,
              is_special:            (fx["is_special"] == true || fx["is_special"] == "TRUE" || fx["is_special"] == "true"),
              name:                  fx["name"],
              weight:                fx["weight"],
              weapon_type_id:        type_ids[fx["weapon_type"]],
              weapon_skill_id:       skill_ids[fx["skill"]],
              physical_damage_types: ["Strike"],
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

      end
    end
  end
end
