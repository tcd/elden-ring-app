module Lib
  module Seed
    # Code for filling up our database.
    class Talismans

      # @return [void]
      def self.seed()
        Talisman.destroy_all()
        invalid = Lib::Seed.from_json("talismans.json", Talisman) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {

          name:             input["name"],
          weight:           input["weight"],
          description:      input["description"],
          long_description: input["longDdescription"],
          restricts:        input["restricts"],
          effects:          input["effects"],

          equipment_effects_attributes: input["effects"],
        }

        output[:metadata] = {
          location: input["location"],
          **(input["metadata"] || {}),
        }
        return output
      end

    end
  end
end
