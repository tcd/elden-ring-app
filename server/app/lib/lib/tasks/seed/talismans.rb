module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Talismans

        # @return [void]
        def self.seed()
          Talisman.destroy_all()
          invalid = Lib::Tasks::Seed.from_json("talismans.json", Talisman) do |fx|
            _args = {

              name:             fx["name"],
              weight:           fx["weight"],
              description:      fx["description"],
              long_description: fx["longDdescription"],
              restricts:        fx["restricts"],
              effects:          fx["effects"],

              equipment_effects_attributes: fx["effects"],

              metadata: {
                location: fx["location"],
                **(fx["metadata"] || {}),
              },

            }
          end
          return invalid
        end

      end
    end
  end
end
