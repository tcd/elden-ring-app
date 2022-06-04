module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponTypes

        # @return [void]
        def self.seed()
          # WeaponType.destroy_all()
          invalid = Lib::Tasks::Seed.from_fixture("weapon_types.yml", WeaponType) do |fx|
            _args = {
              id:            fx["id"],
              name:          fx["name"],
              plural_name:   fx["plural_name"],
              is_shield:     (fx["is_shield"] == true),
            }
          end
          return invalid
        end

      end
    end
  end
end
