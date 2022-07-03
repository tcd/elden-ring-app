module Lib
  module Seed
    # Code for filling up our database.
    class SpellGroups

      # @return [void]
      def self.seed()
        # SpellGroup.destroy_all()
        invalid = Lib::Seed.from_fixture("spell_groups.yml", SpellGroup) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          # id:          input["id"],
          name:        input["name"],
          alt_name:    input["alt_name"],
          spell_group: input["spell_group"],
        }
        return output
      end

    end
  end
end
