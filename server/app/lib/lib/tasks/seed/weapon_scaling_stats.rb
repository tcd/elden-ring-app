module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponScalingStats

        # @return [void]
        def self.seed()
          WeaponScalingStat.destroy_all()

          weapon_affinity_ids = {}
          WeaponAffinity.all.each { |x| weapon_affinity_ids[x.name] = x.id }

          weapon_ids = {}
          Weapon.all.each { |x| weapon_ids[x.name] = x.id }

          invalid = Lib::Tasks::Seed.from_tsv("calculation/Scaling.tsv", WeaponScalingStat) do |fx|
            name = fx["Name"]
            weapon_name, affinity_name = Lib::WeaponNameProcessing.process_name(name)

            _args = {
              name: name,

              weapon_id:          weapon_ids[weapon_name],
              weapon_affinity_id: weapon_affinity_ids[affinity_name],

              strength__00:     fx["Str +0"],
              dexterity__00:    fx["Dex +0"],
              intelligence__00: fx["Int +0"],
              faith__00:        fx["Fai +0"],
              arcane__00:       fx["Arc +0"],
              strength__01:     fx["Str +1"],
              dexterity__01:    fx["Dex +1"],
              intelligence__01: fx["Int +1"],
              faith__01:        fx["Fai +1"],
              arcane__01:       fx["Arc +1"],
              strength__02:     fx["Str +2"],
              dexterity__02:    fx["Dex +2"],
              intelligence__02: fx["Int +2"],
              faith__02:        fx["Fai +2"],
              arcane__02:       fx["Arc +2"],
              strength__03:     fx["Str +3"],
              dexterity__03:    fx["Dex +3"],
              intelligence__03: fx["Int +3"],
              faith__03:        fx["Fai +3"],
              arcane__03:       fx["Arc +3"],
              strength__04:     fx["Str +4"],
              dexterity__04:    fx["Dex +4"],
              intelligence__04: fx["Int +4"],
              faith__04:        fx["Fai +4"],
              arcane__04:       fx["Arc +4"],
              strength__05:     fx["Str +5"],
              dexterity__05:    fx["Dex +5"],
              intelligence__05: fx["Int +5"],
              faith__05:        fx["Fai +5"],
              arcane__05:       fx["Arc +5"],
              strength__06:     fx["Str +6"],
              dexterity__06:    fx["Dex +6"],
              intelligence__06: fx["Int +6"],
              faith__06:        fx["Fai +6"],
              arcane__06:       fx["Arc +6"],
              strength__07:     fx["Str +7"],
              dexterity__07:    fx["Dex +7"],
              intelligence__07: fx["Int +7"],
              faith__07:        fx["Fai +7"],
              arcane__07:       fx["Arc +7"],
              strength__08:     fx["Str +8"],
              dexterity__08:    fx["Dex +8"],
              intelligence__08: fx["Int +8"],
              faith__08:        fx["Fai +8"],
              arcane__08:       fx["Arc +8"],
              strength__09:     fx["Str +9"],
              dexterity__09:    fx["Dex +9"],
              intelligence__09: fx["Int +9"],
              faith__09:        fx["Fai +9"],
              arcane__09:       fx["Arc +9"],
              strength__10:     fx["Str +10"],
              dexterity__10:    fx["Dex +10"],
              intelligence__10: fx["Int +10"],
              faith__10:        fx["Fai +10"],
              arcane__10:       fx["Arc +10"],
              strength__11:     fx["Str +11"],
              dexterity__11:    fx["Dex +11"],
              intelligence__11: fx["Int +11"],
              faith__11:        fx["Fai +11"],
              arcane__11:       fx["Arc +11"],
              strength__12:     fx["Str +12"],
              dexterity__12:    fx["Dex +12"],
              intelligence__12: fx["Int +12"],
              faith__12:        fx["Fai +12"],
              arcane__12:       fx["Arc +12"],
              strength__13:     fx["Str +13"],
              dexterity__13:    fx["Dex +13"],
              intelligence__13: fx["Int +13"],
              faith__13:        fx["Fai +13"],
              arcane__13:       fx["Arc +13"],
              strength__14:     fx["Str +14"],
              dexterity__14:    fx["Dex +14"],
              intelligence__14: fx["Int +14"],
              faith__14:        fx["Fai +14"],
              arcane__14:       fx["Arc +14"],
              strength__15:     fx["Str +15"],
              dexterity__15:    fx["Dex +15"],
              intelligence__15: fx["Int +15"],
              faith__15:        fx["Fai +15"],
              arcane__15:       fx["Arc +15"],
              strength__16:     fx["Str +16"],
              dexterity__16:    fx["Dex +16"],
              intelligence__16: fx["Int +16"],
              faith__16:        fx["Fai +16"],
              arcane__16:       fx["Arc +16"],
              strength__17:     fx["Str +17"],
              dexterity__17:    fx["Dex +17"],
              intelligence__17: fx["Int +17"],
              faith__17:        fx["Fai +17"],
              arcane__17:       fx["Arc +17"],
              strength__18:     fx["Str +18"],
              dexterity__18:    fx["Dex +18"],
              intelligence__18: fx["Int +18"],
              faith__18:        fx["Fai +18"],
              arcane__18:       fx["Arc +18"],
              strength__19:     fx["Str +19"],
              dexterity__19:    fx["Dex +19"],
              intelligence__19: fx["Int +19"],
              faith__19:        fx["Fai +19"],
              arcane__19:       fx["Arc +19"],
              strength__20:     fx["Str +20"],
              dexterity__20:    fx["Dex +20"],
              intelligence__20: fx["Int +20"],
              faith__20:        fx["Fai +20"],
              arcane__20:       fx["Arc +20"],
              strength__21:     fx["Str +21"],
              dexterity__21:    fx["Dex +21"],
              intelligence__21: fx["Int +21"],
              faith__21:        fx["Fai +21"],
              arcane__21:       fx["Arc +21"],
              strength__22:     fx["Str +22"],
              dexterity__22:    fx["Dex +22"],
              intelligence__22: fx["Int +22"],
              faith__22:        fx["Fai +22"],
              arcane__22:       fx["Arc +22"],
              strength__23:     fx["Str +23"],
              dexterity__23:    fx["Dex +23"],
              intelligence__23: fx["Int +23"],
              faith__23:        fx["Fai +23"],
              arcane__23:       fx["Arc +23"],
              strength__24:     fx["Str +24"],
              dexterity__24:    fx["Dex +24"],
              intelligence__24: fx["Int +24"],
              faith__24:        fx["Fai +24"],
              arcane__24:       fx["Arc +24"],
              strength__25:     fx["Str +25"],
              dexterity__25:    fx["Dex +25"],
              intelligence__25: fx["Int +25"],
              faith__25:        fx["Fai +25"],
              arcane__25:       fx["Arc +25"],

            }
          end
          return invalid
        end

      end
    end
  end
end
