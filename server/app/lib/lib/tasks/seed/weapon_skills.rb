module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponSkills

        # @return [void]
        def self.seed()
          # Weapon.destroy_all()
          # WeaponSkill.destroy_all()
          invalid = Lib::Tasks::Seed.from_tsv("weapon-skills.tsv", WeaponSkill) do |fx|
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

      end
    end
  end
end
