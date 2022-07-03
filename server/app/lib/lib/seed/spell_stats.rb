module Lib
  module Seed
    # Code for filling up our database.
    class SpellStats

      # @return [void]
      def self.seed()
        # SpellStat.destroy_all()
        invalid = Lib::Seed.from_tsv("calculation/Spell_Data.tsv", SpellStat) { |x| process(x) }
        return invalid
      end

      # @param input [Hash]
      # @return [Hash]
      def self.process(input)
        output = {
          type:                    input["Type"],
          name:                    input["Name"],
          attack_id:               input["AtkID"],
          physical_mv:             input["Physical MV"],
          magic_mv:                input["Magic MV"],
          fire_mv:                 input["Fire MV"],
          lightning_mv:            input["Lightning MV"],
          holy_mv:                 input["Holy MV"],
          stamina_damage:          input["Stamina Damage"],
          poise_damage_pve:        input["Poise Damage PvE"],
          poise_damage_pvp:        input["Poise Damage PvP"],
          physical_damage_type:    input["PhysAtkAttribute"],
          chield_chip:             input["Shield Chip"],
          damage_level:            input["Damage Level"],
          notes:                   input["Other"],
          pvp_alter:               input["PvP Alter"],
          duration:                input["Duration"],
          status_type:             input["Status"],
          status_buildup:          input["Buildup"],
          heal_multiplier:         input["Heal Multiplier"],
          damage_boosted_by_1:     input["Damage Boosted By 1"],
          damage_boosted_by_2:     input["Damage Boosted By 2"],
          damage_boost_miltiplier: input["Damage Boost Multiplier"],
          status_effect:           input["Status Effect"],
        }
        return output
      end

    end
  end
end
