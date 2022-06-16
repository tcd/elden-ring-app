module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Armors

        # @return [Hash{String => Integer}]
        ARMOR_TYPES = {
          "Head"  => 1,
          "Chest" => 2,
          "Arms"  => 3,
          "Legs"  => 4,
        }.freeze()

        #  @return [void]
        def self.seed()
          Armor.destroy_all()
          invalid = Lib::Tasks::Seed.from_json("armor.json", Armor) do |fx|
            name = fx["name"]
            next if Lib::Constants::CutContent::ARMOR.include?(name)
            _args = {
              name:          name,
              armor_type_id: ARMOR_TYPES[fx["type"]],
              weight:        fx["weight"],
              physical:      fx["physical"],
              vs_strike:     fx["strike"],
              vs_slash:      fx["slash"],
              vs_pierce:     fx["pierce"],
              magic:         fx["magic"],
              fire:          fx["fire"],
              lightning:     fx["lightning"],
              holy:          fx["holy"],
              immunity:      fx["immunity"],
              robustness:    fx["robustness"],
              focus:         fx["focus"],
              vitality:      fx["vitality"],
              poise:         fx["poise"],
              metadata: {
                effects: (fx["effects"] || []),
                **(fx["metadata"] || {}),
              },
            }
          end
          return invalid
        end

        # # Given input data, return args for creating a new record.
        # #
        # # @return [Hash]
        # def self.process(input)
        #   return {
        #     name:          input["name"],
        #     armor_type_id: ARMOR_TYPES[input["type"]],
        #     weight:        input["weight"],
        #     physical:      input["physical"],
        #     vs_strike:     input["strike"],
        #     vs_slash:      input["slash"],
        #     vs_pierce:     input["pierce"],
        #     magic:         input["magic"],
        #     fire:          input["fire"],
        #     lightning:     input["lightning"],
        #     holy:          input["holy"],
        #     immunity:      input["immunity"],
        #     robustness:    input["robustness"],
        #     focus:         input["focus"],
        #     vitality:      input["vitality"],
        #     poise:         input["poise"],
        #     metadata: {
        #       effects: (input["effects"] || []),
        #       **(input["metadata"] || {}),
        #     },
        #   }
        # end

      end
    end
  end
end
