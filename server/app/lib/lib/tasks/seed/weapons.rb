module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Weapons

        # @!attribute weapon_type_ids
        #   @return [Hash{String => Integer}]
        attr_accessor :weapon_type_ids

        # @!attribute weapon_skill_ids
        #   @return [Hash{String => Integer}]
        attr_accessor :weapon_skill_ids

        # @return [void]
        def initialize()
          self.weapon_type_ids = {}
          self.weapon_skill_ids = {}

          WeaponType.all.each  { |wt| self.weapon_type_ids[wt.name]  = wt.id }
          WeaponSkill.all.each { |ws| self.weapon_skill_ids[ws.name] = ws.id }
        end

        # @return [void]
        def seed()
          # Weapon.where(is_shield: false).each(&:destroy)
          invalid = Lib::Tasks::Seed.from_tsv("weapons.tsv", Weapon) { |x| self.process(x) }
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
            attack_critical:        input["attack_critical"],
            attack_stamina_damage:  input["attack_stamina_damage"],
            range:                  input["range"],
            incantation_scaling:    input["incantation_scaling"],
            sorcery_scaling:        input["sorcery_scaling"],
            spell_boost_groups:     input["spell_boost_groups"] || [],
            spell_boost_percentage: input["spell_boost_percentage"],

            attack_physical:       input["attack_physical"],
            attack_magic:          input["attack_magic"],
            attack_fire:           input["attack_fire"],
            attack_lightning:      input["attack_lightning"],
            attack_holy:           input["attack_holy"],

            defense_physical:      input["defense_physical"],
            defense_magic:         input["defense_magic"],
            defense_fire:          input["defense_fire"],
            defense_lightning:     input["defense_lightning"],
            defense_holy:          input["defense_holy"],

            scaling_strength:      input["scaling_strength"],
            scaling_intelligence:  input["scaling_intelligence"],
            scaling_dexterity:     input["scaling_dexterity"],
            scaling_faith:         input["scaling_faith"],
            scaling_arcane:        input["scaling_arcane"],

            required_strength:     input["required_strength"],
            required_dexterity:    input["required_dexterity"],
            required_intelligence: input["required_intelligence"],
            required_faith:        input["required_faith"],
            required_arcane:       input["required_arcane"],

            damage_blood_loss:   input["damage_blood_loss"],
            damage_frost:        input["damage_frost"],
            damage_madness:      input["damage_madness"],
            damage_poison:       input["damage_poison"],
            damage_sleep:        input["damage_sleep"],
            damage_death_blight: input["damage_death_blight"],
            damage_scarlet_rot:  input["damage_scarlet_rot"],
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
end
