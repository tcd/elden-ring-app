module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class WeaponStats

        # @!attribute weapon_affinity_ids
        #   @return [Hash{String => Integer}]
        attr_accessor :weapon_affinity_ids

        # @!attribute weapon_ids
        #   @return [Hash{String => Integer}]
        attr_accessor :weapon_ids

        # @!attribute attack_data
        #   @return [Array<Hash>]
        attr_accessor :attack_data

        # @!attribute scaling_data
        #   @return [Array<Hash>]
        attr_accessor :scaling_data

        # @!attribute calc_correct_data
        #   @return [Array<Hash>]
        attr_accessor :calc_correct_data

        # @return [void]
        def initialize()
          self.weapon_affinity_ids = {}
          WeaponAffinity.all.each { |x| weapon_affinity_ids[x.name] = x.id }

          self.weapon_ids = {}
          Weapon.all.each { |x| weapon_ids[x.name] = x.id }

          self.attack_data       = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "calculation", "Attack.tsv"))
          self.scaling_data      = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "calculation", "Scaling.tsv"))
          self.calc_correct_data = Lib::FlatFile::Tsv.from_file(Rails.root.join("db", "seed_data", "calculation", "CalcCorrectGraph_ID.tsv"))
        end

        # @return [void]
        def seed()
          WeaponStat.destroy_all()
          invalid = Lib::Tasks::Seed.from_json("weapon-with-affinity.json", WeaponStat) { |x| process(x) }
          return invalid
        end

        # @param input [Hash]
        # @return [Hash]
        def process(input)
          name          = input["name_with_affinity"]
          weapon_name   = input["weapon"]
          affinity_name = input["affinity"]

          attack_data_input  = self.attack_data.find  { |x| x["Name"] == name }
          scaling_data_input = self.scaling_data.find { |x| x["Name"] == name }

          attack_data_output  = self.process_attack(attack_data_input)
          scaling_data_output = self.process_scaling(scaling_data_input)

          calc_correct_data_input = self.calc_correct_data.find { |x| x["weapon_attack_stat_name"] == name }
          calc_correct_data_output = self.process_calc_correct(calc_correct_data_input)

          output = {
            name: name,

            weapon_id:          self.weapon_ids[weapon_name],
            weapon_affinity_id: self.weapon_affinity_ids[affinity_name],

            **attack_data_output,
            **scaling_data_output,
            **calc_correct_data_output,
          }

          return output
        end

        # @param input [Hash]
        # @return [Hash]
        def process_calc_correct(input)
          return {
            attack_element_correct_param_id: input["attack_element_correct_id"],
            calc_correct_physical:           input["physical"],
            calc_correct_magic:              input["magic"],
            calc_correct_fire:               input["fire"],
            calc_correct_lightning:          input["lightning"],
            calc_correct_holy:               input["holy"],
          }
        end

        # @param input [Hash]
        # @return [Hash]
        def process_attack(input)
          return {
            attack_physical_0:   input["Phys +0"],
            attack_magic_0:      input["Mag +0"],
            attack_fire_0:       input["Fire +0"],
            attack_lightning_0:  input["Ligh +0"],
            attack_holy_0:       input["Holy +0"],
            attack_stamina_0:    input["Stam +0"],
            attack_physical_1:   input["Phys +1"],
            attack_magic_1:      input["Mag +1"],
            attack_fire_1:       input["Fire +1"],
            attack_lightning_1:  input["Ligh +1"],
            attack_holy_1:       input["Holy +1"],
            attack_stamina_1:    input["Stam +1"],
            attack_physical_2:   input["Phys +2"],
            attack_magic_2:      input["Mag +2"],
            attack_fire_2:       input["Fire +2"],
            attack_lightning_2:  input["Ligh +2"],
            attack_holy_2:       input["Holy +2"],
            attack_stamina_2:    input["Stam +2"],
            attack_physical_3:   input["Phys +3"],
            attack_magic_3:      input["Mag +3"],
            attack_fire_3:       input["Fire +3"],
            attack_lightning_3:  input["Ligh +3"],
            attack_holy_3:       input["Holy +3"],
            attack_stamina_3:    input["Stam +3"],
            attack_physical_4:   input["Phys +4"],
            attack_magic_4:      input["Mag +4"],
            attack_fire_4:       input["Fire +4"],
            attack_lightning_4:  input["Ligh +4"],
            attack_holy_4:       input["Holy +4"],
            attack_stamina_4:    input["Stam +4"],
            attack_physical_5:   input["Phys +5"],
            attack_magic_5:      input["Mag +5"],
            attack_fire_5:       input["Fire +5"],
            attack_lightning_5:  input["Ligh +5"],
            attack_holy_5:       input["Holy +5"],
            attack_stamina_5:    input["Stam +5"],
            attack_physical_6:   input["Phys +6"],
            attack_magic_6:      input["Mag +6"],
            attack_fire_6:       input["Fire +6"],
            attack_lightning_6:  input["Ligh +6"],
            attack_holy_6:       input["Holy +6"],
            attack_stamina_6:    input["Stam +6"],
            attack_physical_7:   input["Phys +7"],
            attack_magic_7:      input["Mag +7"],
            attack_fire_7:       input["Fire +7"],
            attack_lightning_7:  input["Ligh +7"],
            attack_holy_7:       input["Holy +7"],
            attack_stamina_7:    input["Stam +7"],
            attack_physical_8:   input["Phys +8"],
            attack_magic_8:      input["Mag +8"],
            attack_fire_8:       input["Fire +8"],
            attack_lightning_8:  input["Ligh +8"],
            attack_holy_8:       input["Holy +8"],
            attack_stamina_8:    input["Stam +8"],
            attack_physical_9:   input["Phys +9"],
            attack_magic_9:      input["Mag +9"],
            attack_fire_9:       input["Fire +9"],
            attack_lightning_9:  input["Ligh +9"],
            attack_holy_9:       input["Holy +9"],
            attack_stamina_9:    input["Stam +9"],
            attack_physical_10:  input["Phys +10"],
            attack_magic_10:     input["Mag +10"],
            attack_fire_10:      input["Fire +10"],
            attack_lightning_10: input["Ligh +10"],
            attack_holy_10:      input["Holy +10"],
            attack_stamina_10:   input["Stam +10"],
            attack_physical_11:  input["Phys +11"],
            attack_magic_11:     input["Mag +11"],
            attack_fire_11:      input["Fire +11"],
            attack_lightning_11: input["Ligh +11"],
            attack_holy_11:      input["Holy +11"],
            attack_stamina_11:   input["Stam +11"],
            attack_physical_12:  input["Phys +12"],
            attack_magic_12:     input["Mag +12"],
            attack_fire_12:      input["Fire +12"],
            attack_lightning_12: input["Ligh +12"],
            attack_holy_12:      input["Holy +12"],
            attack_stamina_12:   input["Stam +12"],
            attack_physical_13:  input["Phys +13"],
            attack_magic_13:     input["Mag +13"],
            attack_fire_13:      input["Fire +13"],
            attack_lightning_13: input["Ligh +13"],
            attack_holy_13:      input["Holy +13"],
            attack_stamina_13:   input["Stam +13"],
            attack_physical_14:  input["Phys +14"],
            attack_magic_14:     input["Mag +14"],
            attack_fire_14:      input["Fire +14"],
            attack_lightning_14: input["Ligh +14"],
            attack_holy_14:      input["Holy +14"],
            attack_stamina_14:   input["Stam +14"],
            attack_physical_15:  input["Phys +15"],
            attack_magic_15:     input["Mag +15"],
            attack_fire_15:      input["Fire +15"],
            attack_lightning_15: input["Ligh +15"],
            attack_holy_15:      input["Holy +15"],
            attack_stamina_15:   input["Stam +15"],
            attack_physical_16:  input["Phys +16"],
            attack_magic_16:     input["Mag +16"],
            attack_fire_16:      input["Fire +16"],
            attack_lightning_16: input["Ligh +16"],
            attack_holy_16:      input["Holy +16"],
            attack_stamina_16:   input["Stam +16"],
            attack_physical_17:  input["Phys +17"],
            attack_magic_17:     input["Mag +17"],
            attack_fire_17:      input["Fire +17"],
            attack_lightning_17: input["Ligh +17"],
            attack_holy_17:      input["Holy +17"],
            attack_stamina_17:   input["Stam +17"],
            attack_physical_18:  input["Phys +18"],
            attack_magic_18:     input["Mag +18"],
            attack_fire_18:      input["Fire +18"],
            attack_lightning_18: input["Ligh +18"],
            attack_holy_18:      input["Holy +18"],
            attack_stamina_18:   input["Stam +18"],
            attack_physical_19:  input["Phys +19"],
            attack_magic_19:     input["Mag +19"],
            attack_fire_19:      input["Fire +19"],
            attack_lightning_19: input["Ligh +19"],
            attack_holy_19:      input["Holy +19"],
            attack_stamina_19:   input["Stam +19"],
            attack_physical_20:  input["Phys +20"],
            attack_magic_20:     input["Mag +20"],
            attack_fire_20:      input["Fire +20"],
            attack_lightning_20: input["Ligh +20"],
            attack_holy_20:      input["Holy +20"],
            attack_stamina_20:   input["Stam +20"],
            attack_physical_21:  input["Phys +21"],
            attack_magic_21:     input["Mag +21"],
            attack_fire_21:      input["Fire +21"],
            attack_lightning_21: input["Ligh +21"],
            attack_holy_21:      input["Holy +21"],
            attack_stamina_21:   input["Stam +21"],
            attack_physical_22:  input["Phys +22"],
            attack_magic_22:     input["Mag +22"],
            attack_fire_22:      input["Fire +22"],
            attack_lightning_22: input["Ligh +22"],
            attack_holy_22:      input["Holy +22"],
            attack_stamina_22:   input["Stam +22"],
            attack_physical_23:  input["Phys +23"],
            attack_magic_23:     input["Mag +23"],
            attack_fire_23:      input["Fire +23"],
            attack_lightning_23: input["Ligh +23"],
            attack_holy_23:      input["Holy +23"],
            attack_stamina_23:   input["Stam +23"],
            attack_physical_24:  input["Phys +24"],
            attack_magic_24:     input["Mag +24"],
            attack_fire_24:      input["Fire +24"],
            attack_lightning_24: input["Ligh +24"],
            attack_holy_24:      input["Holy +24"],
            attack_stamina_24:   input["Stam +24"],
            attack_physical_25:  input["Phys +25"],
            attack_magic_25:     input["Mag +25"],
            attack_fire_25:      input["Fire +25"],
            attack_lightning_25: input["Ligh +25"],
            attack_holy_25:      input["Holy +25"],
            attack_stamina_25:   input["Stam +25"],
          }
        end

        # @param input [Hash]
        # @return [Hash]
        def process_scaling(input)
          return {
            scaling_strength_0:      input["Str +0"],
            scaling_dexterity_0:     input["Dex +0"],
            scaling_intelligence_0:  input["Int +0"],
            scaling_faith_0:         input["Fai +0"],
            scaling_arcane_0:        input["Arc +0"],
            scaling_strength_1:      input["Str +1"],
            scaling_dexterity_1:     input["Dex +1"],
            scaling_intelligence_1:  input["Int +1"],
            scaling_faith_1:         input["Fai +1"],
            scaling_arcane_1:        input["Arc +1"],
            scaling_strength_2:      input["Str +2"],
            scaling_dexterity_2:     input["Dex +2"],
            scaling_intelligence_2:  input["Int +2"],
            scaling_faith_2:         input["Fai +2"],
            scaling_arcane_2:        input["Arc +2"],
            scaling_strength_3:      input["Str +3"],
            scaling_dexterity_3:     input["Dex +3"],
            scaling_intelligence_3:  input["Int +3"],
            scaling_faith_3:         input["Fai +3"],
            scaling_arcane_3:        input["Arc +3"],
            scaling_strength_4:      input["Str +4"],
            scaling_dexterity_4:     input["Dex +4"],
            scaling_intelligence_4:  input["Int +4"],
            scaling_faith_4:         input["Fai +4"],
            scaling_arcane_4:        input["Arc +4"],
            scaling_strength_5:      input["Str +5"],
            scaling_dexterity_5:     input["Dex +5"],
            scaling_intelligence_5:  input["Int +5"],
            scaling_faith_5:         input["Fai +5"],
            scaling_arcane_5:        input["Arc +5"],
            scaling_strength_6:      input["Str +6"],
            scaling_dexterity_6:     input["Dex +6"],
            scaling_intelligence_6:  input["Int +6"],
            scaling_faith_6:         input["Fai +6"],
            scaling_arcane_6:        input["Arc +6"],
            scaling_strength_7:      input["Str +7"],
            scaling_dexterity_7:     input["Dex +7"],
            scaling_intelligence_7:  input["Int +7"],
            scaling_faith_7:         input["Fai +7"],
            scaling_arcane_7:        input["Arc +7"],
            scaling_strength_8:      input["Str +8"],
            scaling_dexterity_8:     input["Dex +8"],
            scaling_intelligence_8:  input["Int +8"],
            scaling_faith_8:         input["Fai +8"],
            scaling_arcane_8:        input["Arc +8"],
            scaling_strength_9:      input["Str +9"],
            scaling_dexterity_9:     input["Dex +9"],
            scaling_intelligence_9:  input["Int +9"],
            scaling_faith_9:         input["Fai +9"],
            scaling_arcane_9:        input["Arc +9"],
            scaling_strength_10:     input["Str +10"],
            scaling_dexterity_10:    input["Dex +10"],
            scaling_intelligence_10: input["Int +10"],
            scaling_faith_10:        input["Fai +10"],
            scaling_arcane_10:       input["Arc +10"],
            scaling_strength_11:     input["Str +11"],
            scaling_dexterity_11:    input["Dex +11"],
            scaling_intelligence_11: input["Int +11"],
            scaling_faith_11:        input["Fai +11"],
            scaling_arcane_11:       input["Arc +11"],
            scaling_strength_12:     input["Str +12"],
            scaling_dexterity_12:    input["Dex +12"],
            scaling_intelligence_12: input["Int +12"],
            scaling_faith_12:        input["Fai +12"],
            scaling_arcane_12:       input["Arc +12"],
            scaling_strength_13:     input["Str +13"],
            scaling_dexterity_13:    input["Dex +13"],
            scaling_intelligence_13: input["Int +13"],
            scaling_faith_13:        input["Fai +13"],
            scaling_arcane_13:       input["Arc +13"],
            scaling_strength_14:     input["Str +14"],
            scaling_dexterity_14:    input["Dex +14"],
            scaling_intelligence_14: input["Int +14"],
            scaling_faith_14:        input["Fai +14"],
            scaling_arcane_14:       input["Arc +14"],
            scaling_strength_15:     input["Str +15"],
            scaling_dexterity_15:    input["Dex +15"],
            scaling_intelligence_15: input["Int +15"],
            scaling_faith_15:        input["Fai +15"],
            scaling_arcane_15:       input["Arc +15"],
            scaling_strength_16:     input["Str +16"],
            scaling_dexterity_16:    input["Dex +16"],
            scaling_intelligence_16: input["Int +16"],
            scaling_faith_16:        input["Fai +16"],
            scaling_arcane_16:       input["Arc +16"],
            scaling_strength_17:     input["Str +17"],
            scaling_dexterity_17:    input["Dex +17"],
            scaling_intelligence_17: input["Int +17"],
            scaling_faith_17:        input["Fai +17"],
            scaling_arcane_17:       input["Arc +17"],
            scaling_strength_18:     input["Str +18"],
            scaling_dexterity_18:    input["Dex +18"],
            scaling_intelligence_18: input["Int +18"],
            scaling_faith_18:        input["Fai +18"],
            scaling_arcane_18:       input["Arc +18"],
            scaling_strength_19:     input["Str +19"],
            scaling_dexterity_19:    input["Dex +19"],
            scaling_intelligence_19: input["Int +19"],
            scaling_faith_19:        input["Fai +19"],
            scaling_arcane_19:       input["Arc +19"],
            scaling_strength_20:     input["Str +20"],
            scaling_dexterity_20:    input["Dex +20"],
            scaling_intelligence_20: input["Int +20"],
            scaling_faith_20:        input["Fai +20"],
            scaling_arcane_20:       input["Arc +20"],
            scaling_strength_21:     input["Str +21"],
            scaling_dexterity_21:    input["Dex +21"],
            scaling_intelligence_21: input["Int +21"],
            scaling_faith_21:        input["Fai +21"],
            scaling_arcane_21:       input["Arc +21"],
            scaling_strength_22:     input["Str +22"],
            scaling_dexterity_22:    input["Dex +22"],
            scaling_intelligence_22: input["Int +22"],
            scaling_faith_22:        input["Fai +22"],
            scaling_arcane_22:       input["Arc +22"],
            scaling_strength_23:     input["Str +23"],
            scaling_dexterity_23:    input["Dex +23"],
            scaling_intelligence_23: input["Int +23"],
            scaling_faith_23:        input["Fai +23"],
            scaling_arcane_23:       input["Arc +23"],
            scaling_strength_24:     input["Str +24"],
            scaling_dexterity_24:    input["Dex +24"],
            scaling_intelligence_24: input["Int +24"],
            scaling_faith_24:        input["Fai +24"],
            scaling_arcane_24:       input["Arc +24"],
            scaling_strength_25:     input["Str +25"],
            scaling_dexterity_25:    input["Dex +25"],
            scaling_intelligence_25: input["Int +25"],
            scaling_faith_25:        input["Fai +25"],
            scaling_arcane_25:       input["Arc +25"],
          }
        end

      end
    end
  end
end
