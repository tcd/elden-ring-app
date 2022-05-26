module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class ArmorTypes

        # @return [void]
        def self.seed()
          # ArmorType.destroy_all()
          invalid = Lib::Tasks::Seed.from_fixture("armor_types.yml", ArmorType) do |fx|
            _args = {
              id:   fx["id"],
              name: fx["name"],
            }
          end
          return invalid
        end

      end
    end
  end
end
