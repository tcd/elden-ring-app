module Lib
  module Seed
    # Code for filling up our database.
    class Spells

      # @return [void]
      def self.seed()
        Spell.destroy_all()
        invalid = Lib::Seed.from_tsv("spells.tsv", Spell) { |x| process(x) }
        return invalid
      end


      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          name:                    input["name"],
          spell_type:              input["spell_type"],
          description:             input["description"],
          slots_required:          input["slots_required"],
          stamina_cost:            input["stamina_cost"],
          fp_cost:                 input["fp_cost"],
          fp_cost_alt:             input["fp_cost_alt"],
          # fp_cost_alt_description: input["fp_cost_alt_description"],
          bonus_category:          input["category"],

          required_intelligence:   input["int"],
          required_faith:          input["fai"],
          required_arcane:         input["arc"],

          is_chargeable:           input["chargeable"],
          is_usable_while_jumping: input["jumping"],
          is_usable_on_horse:      input["horse"],

          # damage_blood_loss:   input["damage_blood_loss"],
          # damage_frost:        input["damage_frost"],
          # damage_madness:      input["damage_madness"],
          # damage_poison:       input["damage_poison"],
          # damage_sleep:        input["damage_sleep"],
          # damage_death_blight: input["damage_death_blight"],
          # damage_scarlet_rot:  input["damage_scarlet_rot"],
          inflicts_physical:     input["physical"],
          inflicts_magic:        input["magic"],
          inflicts_fire:         input["fire"],
          inflicts_lightning:    input["lightning"],
          inflicts_holy:         input["holy"],
          inflicts_blood_loss:   input["bleed"],
          inflicts_frost:        input["frost"],
          inflicts_madness:      input["madness"],
          inflicts_poison:       input["poison"],
          inflicts_sleep:        input["sleep"],
          inflicts_death_blight: input["death"],
          inflicts_scarlet_rot:  input["rot"],
        }

        output[:metadata] = {
          fp:             input["FP"],
          bonus_category: input["bonus_category"],
        }

        return output
      end

    end
  end
end
