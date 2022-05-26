module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Spells

        # @return [void]
        def self.seed()
          Spell.destroy_all()
          invalid = Lib::Tasks::Seed.from_tsv("spells.tsv", Spell) do |fx|
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
end
