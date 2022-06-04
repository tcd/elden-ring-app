module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Armors

        #  @return [void]
        def self.seed()
          Armor.destroy_all()
          armor_types = {
            "Head"  => 1,
            "Chest" => 2,
            "Arms"  => 3,
            "Legs"  => 4,
          }
          invalid = Lib::Tasks::Seed.from_json("armor.json", Armor) do |fx|
            _args = {
              name:          fx["name"],
              armor_type_id: armor_types[fx["type"]],
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

      end
    end
  end
end
