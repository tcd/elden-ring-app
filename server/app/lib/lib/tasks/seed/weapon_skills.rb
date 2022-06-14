module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponSkills

        # @return [void]
        def self.seed()
          # Weapon.destroy_all()
          # WeaponSkill.destroy_all()
          invalid = Lib::Tasks::Seed.from_tsv("weapon-skills.tsv", WeaponSkill) { |x| process(x) }
          return invalid
        end

        # @param input [Hash]
        # @return [Hash]
        def self.process(input)
          output = {
            name:              input["name"],
            description:       input["Effect"],
            is_chargeable:     input["is_chargeable"],
          }

          output[:ash_of_war] = (input["ash_of_war"] == true || input["ash_of_war"] == "TRUE" || input["ash_of_war"] == "true")

          output[:can_be_applied_to] = (input["can_be_applied_to"] || "").split(/,\s*/)

          output[:metadata] = {
            basic_fp_cost: input["basic_fp_cost"].to_i(),
            complex_fp_cost: input["FP"],
          }

          return output
        end

      end
    end
  end
end
