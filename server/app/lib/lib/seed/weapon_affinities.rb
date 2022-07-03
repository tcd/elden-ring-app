module Lib
  module Seed
    # Code for filling up our database.
    class WeaponAffinities

      # @return [void]
      def self.seed()
        # WeaponAffinity.destroy_all()
        invalid = Lib::Seed.from_fixture("weapon_affinities.yml", WeaponAffinity) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          id:         input["sort_order"],
          name:       input["name"],
          sort_order: input["sort_order"],
        }
        return output
      end

    end
  end
end
