module Lib
  module Seed
    # Code for filling up our database.
    class ArmorTypes

      # @return [void]
      def self.seed()
        # ArmorType.destroy_all()
        invalid = Lib::Seed.from_fixture("armor_types.yml", ArmorType) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          id:   input["id"],
          name: input["name"],
        }
        return output
      end

    end
  end
end
