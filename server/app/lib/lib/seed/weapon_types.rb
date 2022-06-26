module Lib
  module Seed
    # Code for filling up our database.
    class WeaponTypes

      # @return [void]
      def self.seed()
        WeaponType.destroy_all()
        invalid = Lib::Seed.from_fixture("weapon_types.yml", WeaponType) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          id:            input["sort_order"],
          sort_order:    input["sort_order"],
          name:          input["name"],
          plural_name:   input["plural_name"],
          is_shield:     (input["is_shield"] == true),
        }
        return output
      end

    end
  end
end
