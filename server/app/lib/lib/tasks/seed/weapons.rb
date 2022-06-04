module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Weapons

        # @return [void]
        def self.seed()
          Weapon.where(is_shield: false).each(&:destroy)
          type_ids = {}
          skill_ids = {}
          WeaponType.all.each { |wt| type_ids[wt.name] = wt.id }
          WeaponSkill.all.each { |ws| skill_ids[ws.name] = ws.id }
          invalid = Lib::Tasks::Seed.from_tsv("weapons.tsv", Weapon) do |fx|
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

      end
    end
  end
end
