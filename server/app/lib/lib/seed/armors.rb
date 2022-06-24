module Lib
  module Seed
    # Code for filling up our database.
    class Armors

      # @!attribute sort_order_data
      #   @return [Array<Hash>]
      attr_accessor :sort_order_data

      # @return [Hash{String => Integer}]
      ARMOR_TYPES = {
        "Head"  => 1,
        "Chest" => 2,
        "Arms"  => 3,
        "Legs"  => 4,
      }.freeze()

      # @return [void]
      def initialize()
        self.sort_order_data = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "sort_order", "armor-sort-order.tsv"))
      end

      #  @return [void]
      def seed()
        Armor.destroy_all()
        invalid = Lib::Seed.from_json("armor.json", Armor) do |fx|
          name = fx["name"]
          if Lib::Constants::CutContent::ARMOR.include?(name)
            nil
          end
          _args = process(fx)
        rescue StandardError => ex
          binding.pry
        end
        return invalid
      end

      # Given input data, return args for creating a new record.
      #
      # @return [Hash]
      def process(input)
        output = {
          name:          input["name"],
          armor_type_id: ARMOR_TYPES[input["type"]],
          weight:        input["weight"],
          physical:      input["physical"],
          vs_strike:     input["strike"],
          vs_slash:      input["slash"],
          vs_pierce:     input["pierce"],
          magic:         input["magic"],
          fire:          input["fire"],
          lightning:     input["lightning"],
          holy:          input["holy"],
          immunity:      input["immunity"],
          robustness:    input["robustness"],
          focus:         input["focus"],
          vitality:      input["vitality"],
          poise:         input["poise"],
          metadata: {
            effects: (input["effects"] || []),
            **(input["metadata"] || {}),
          },
        }

        sorting             = sort_order_data.find { |x| x["name"] == input["name"] }
        output[:sort_order] = sorting["sort_order"]
        output[:sort_group] = sorting["sort_group"]

        return output
      end

    end
  end
end
