module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponAffinities

        # @return [void]
        def self.seed()
          # WeaponAffinity.destroy_all()
          invalid = Lib::Tasks::Seed.from_fixture("weapon_affinities.yml", WeaponAffinity) do |fx|
            _args = {
              id:         fx["sort_order"],
              name:       fx["name"],
              sort_order: fx["sort_order"],
            }
          end
          return invalid
        end

      end
    end
  end
end
