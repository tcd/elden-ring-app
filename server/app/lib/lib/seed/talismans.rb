module Lib
  module Seed
    # Code for filling up our database.
    class Talismans

      # @!attribute sort_order_data
      #   @return [Array<Hash>]
      attr_accessor :sort_order_data

      # @return [void]
      def initialize()
        self.sort_order_data = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "sort_order", "talismans-sort-order.tsv"))
      end

      # @return [void]
      def seed()
        Talisman.destroy_all()
        invalid = Lib::Seed.from_json("talismans.json", Talisman) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def process(input)

        output = {
          name:             input["name"],
          weight:           input["weight"],
          description:      input["description"],
          long_description: input["longDdescription"],
          restricts:        input["restricts"],
          effects:          input["effects"],

          equipment_effects_attributes: input["effects"],
        }

        sorting             = sort_order_data.find { |x| x["name"] == input["name"] }
        output[:sort_order] = sorting["sort_order"]
        output[:sort_group] = sorting["sort_group"]

        output[:metadata] = {
          location: input["location"],
          **(input["metadata"] || {}),
        }
        return output
      end

    end
  end
end
