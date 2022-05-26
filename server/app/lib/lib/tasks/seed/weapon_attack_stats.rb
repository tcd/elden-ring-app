module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponAttackStats

        # @return [void]
        def self.seed()
          WeaponAttackStat.destroy_all()

          weapon_affinity_ids = {}
          WeaponAffinity.all.each { |x| weapon_affinity_ids[x.name] = x.id }

          weapon_ids = {}
          Weapon.all.each { |x| weapon_ids[x.name] = x.id }

          invalid = Lib::Tasks::Seed.from_tsv("calculation/Attack.tsv", WeaponAttackStat) do |fx|
            name = fx["Name"]
            weapon_name, affinity_name = Lib::WeaponNameProcessing.process_name(name)

            _args = {
              name: name,

              weapon_id:          weapon_ids[weapon_name],
              weapon_affinity_id: weapon_affinity_ids[affinity_name],

              physical__00:  fx["Phys +0"],
              magic__00:     fx["Mag +0"],
              fire__00:      fx["Fire +0"],
              lightning__00: fx["Ligh +0"],
              holy__00:      fx["Holy +0"],
              stamina__00:   fx["Stam +0"],
              physical__01:  fx["Phys +1"],
              magic__01:     fx["Mag +1"],
              fire__01:      fx["Fire +1"],
              lightning__01: fx["Ligh +1"],
              holy__01:      fx["Holy +1"],
              stamina__01:   fx["Stam +1"],
              physical__02:  fx["Phys +2"],
              magic__02:     fx["Mag +2"],
              fire__02:      fx["Fire +2"],
              lightning__02: fx["Ligh +2"],
              holy__02:      fx["Holy +2"],
              stamina__02:   fx["Stam +2"],
              physical__03:  fx["Phys +3"],
              magic__03:     fx["Mag +3"],
              fire__03:      fx["Fire +3"],
              lightning__03: fx["Ligh +3"],
              holy__03:      fx["Holy +3"],
              stamina__03:   fx["Stam +3"],
              physical__04:  fx["Phys +4"],
              magic__04:     fx["Mag +4"],
              fire__04:      fx["Fire +4"],
              lightning__04: fx["Ligh +4"],
              holy__04:      fx["Holy +4"],
              stamina__04:   fx["Stam +4"],
              physical__05:  fx["Phys +5"],
              magic__05:     fx["Mag +5"],
              fire__05:      fx["Fire +5"],
              lightning__05: fx["Ligh +5"],
              holy__05:      fx["Holy +5"],
              stamina__05:   fx["Stam +5"],
              physical__06:  fx["Phys +6"],
              magic__06:     fx["Mag +6"],
              fire__06:      fx["Fire +6"],
              lightning__06: fx["Ligh +6"],
              holy__06:      fx["Holy +6"],
              stamina__06:   fx["Stam +6"],
              physical__07:  fx["Phys +7"],
              magic__07:     fx["Mag +7"],
              fire__07:      fx["Fire +7"],
              lightning__07: fx["Ligh +7"],
              holy__07:      fx["Holy +7"],
              stamina__07:   fx["Stam +7"],
              physical__08:  fx["Phys +8"],
              magic__08:     fx["Mag +8"],
              fire__08:      fx["Fire +8"],
              lightning__08: fx["Ligh +8"],
              holy__08:      fx["Holy +8"],
              stamina__08:   fx["Stam +8"],
              physical__09:  fx["Phys +9"],
              magic__09:     fx["Mag +9"],
              fire__09:      fx["Fire +9"],
              lightning__09: fx["Ligh +9"],
              holy__09:      fx["Holy +9"],
              stamina__09:   fx["Stam +9"],
              physical__10:  fx["Phys +10"],
              magic__10:     fx["Mag +10"],
              fire__10:      fx["Fire +10"],
              lightning__10: fx["Ligh +10"],
              holy__10:      fx["Holy +10"],
              stamina__10:   fx["Stam +10"],
              physical__11:  fx["Phys +11"],
              magic__11:     fx["Mag +11"],
              fire__11:      fx["Fire +11"],
              lightning__11: fx["Ligh +11"],
              holy__11:      fx["Holy +11"],
              stamina__11:   fx["Stam +11"],
              physical__12:  fx["Phys +12"],
              magic__12:     fx["Mag +12"],
              fire__12:      fx["Fire +12"],
              lightning__12: fx["Ligh +12"],
              holy__12:      fx["Holy +12"],
              stamina__12:   fx["Stam +12"],
              physical__13:  fx["Phys +13"],
              magic__13:     fx["Mag +13"],
              fire__13:      fx["Fire +13"],
              lightning__13: fx["Ligh +13"],
              holy__13:      fx["Holy +13"],
              stamina__13:   fx["Stam +13"],
              physical__14:  fx["Phys +14"],
              magic__14:     fx["Mag +14"],
              fire__14:      fx["Fire +14"],
              lightning__14: fx["Ligh +14"],
              holy__14:      fx["Holy +14"],
              stamina__14:   fx["Stam +14"],
              physical__15:  fx["Phys +15"],
              magic__15:     fx["Mag +15"],
              fire__15:      fx["Fire +15"],
              lightning__15: fx["Ligh +15"],
              holy__15:      fx["Holy +15"],
              stamina__15:   fx["Stam +15"],
              physical__16:  fx["Phys +16"],
              magic__16:     fx["Mag +16"],
              fire__16:      fx["Fire +16"],
              lightning__16: fx["Ligh +16"],
              holy__16:      fx["Holy +16"],
              stamina__16:   fx["Stam +16"],
              physical__17:  fx["Phys +17"],
              magic__17:     fx["Mag +17"],
              fire__17:      fx["Fire +17"],
              lightning__17: fx["Ligh +17"],
              holy__17:      fx["Holy +17"],
              stamina__17:   fx["Stam +17"],
              physical__18:  fx["Phys +18"],
              magic__18:     fx["Mag +18"],
              fire__18:      fx["Fire +18"],
              lightning__18: fx["Ligh +18"],
              holy__18:      fx["Holy +18"],
              stamina__18:   fx["Stam +18"],
              physical__19:  fx["Phys +19"],
              magic__19:     fx["Mag +19"],
              fire__19:      fx["Fire +19"],
              lightning__19: fx["Ligh +19"],
              holy__19:      fx["Holy +19"],
              stamina__19:   fx["Stam +19"],
              physical__20:  fx["Phys +20"],
              magic__20:     fx["Mag +20"],
              fire__20:      fx["Fire +20"],
              lightning__20: fx["Ligh +20"],
              holy__20:      fx["Holy +20"],
              stamina__20:   fx["Stam +20"],
              physical__21:  fx["Phys +21"],
              magic__21:     fx["Mag +21"],
              fire__21:      fx["Fire +21"],
              lightning__21: fx["Ligh +21"],
              holy__21:      fx["Holy +21"],
              stamina__21:   fx["Stam +21"],
              physical__22:  fx["Phys +22"],
              magic__22:     fx["Mag +22"],
              fire__22:      fx["Fire +22"],
              lightning__22: fx["Ligh +22"],
              holy__22:      fx["Holy +22"],
              stamina__22:   fx["Stam +22"],
              physical__23:  fx["Phys +23"],
              magic__23:     fx["Mag +23"],
              fire__23:      fx["Fire +23"],
              lightning__23: fx["Ligh +23"],
              holy__23:      fx["Holy +23"],
              stamina__23:   fx["Stam +23"],
              physical__24:  fx["Phys +24"],
              magic__24:     fx["Mag +24"],
              fire__24:      fx["Fire +24"],
              lightning__24: fx["Ligh +24"],
              holy__24:      fx["Holy +24"],
              stamina__24:   fx["Stam +24"],
              physical__25:  fx["Phys +25"],
              magic__25:     fx["Mag +25"],
              fire__25:      fx["Fire +25"],
              lightning__25: fx["Ligh +25"],
              holy__25:      fx["Holy +25"],
              stamina__25:   fx["Stam +25"],
            }
          end
          return invalid
        end

      end
    end
  end
end