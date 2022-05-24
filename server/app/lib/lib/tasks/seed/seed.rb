module Lib
  module Tasks
    module Seed
      # Code for filling up our database.
      class Seeding

        # @return [Hash]
        def self.all()
          invalid = {}
          # invalid["armor_types"] = self.armor_types()
          # invalid["weapon_types"] = self.weapon_types()
          # invalid["weapon_affinities"] = self.weapon_affinities()
          # invalid["weapon_skills"] = self.weapon_skills()
          # invalid["talismans"] = self.talismans()
          # invalid["armor"] = self.armor()
          # invalid["weapons"] = self.weapons()
          # invalid["shields"] = self.shields()
          # invalid["spells"] = self.spells()
          # invalid["attack_element_correct_params"] = self.attack_element_correct_params()
          invalid["weapon_attack_stats"] = self.weapon_attack_stats()
          error_file = Lib::Util.save_to_file(invalid, "seed-errors.json", add_timestamp: true)
          puts("#{invalid.values.flatten.length} errors; see file '#{error_file}'")
          return invalid
        end

        # @return [void]
        def self.weapon_types()
          # WeaponType.destroy_all()
          invalid = self.from_fixture("weapon_types.yml", WeaponType) do |fx|
            _args = {
              id:            fx["id"],
              name:          fx["name"],
              plural_name:   fx["plural_name"],
              is_shield:     (fx["is_shield"] == true),
            }
          end
          return invalid
        end

        # @return [void]
        def self.armor_types()
          # ArmorType.destroy_all()
          invalid = self.from_fixture("armor_types.yml", ArmorType) do |fx|
            _args = {
              id:   fx["id"],
              name: fx["name"],
            }
          end
          return invalid
        end

        # @return [void]
        def self.weapon_affinities()
          # WeaponAffinity.destroy_all()
          invalid = self.from_fixture("weapon_affinities.yml", WeaponAffinity) do |fx|
            _args = {
              id:         fx["sort_order"],
              name:       fx["name"],
              sort_order: fx["sort_order"],
            }
          end
          return invalid
        end

        # @return [void]
        def self.weapon_skills()
          # Weapon.destroy_all()
          # WeaponSkill.destroy_all()
          invalid = self.from_tsv("weapon-skills.tsv", WeaponSkill) do |fx|
            _args = {
              name:              fx["name"],
              description:       fx["Effect"],
              is_chargeable:     fx["is_chargeable"],
              ash_of_war:        (fx["ash_of_war"] == true || fx["ash_of_war"] == "TRUE" || fx["ash_of_war"] == "true"),
              can_be_applied_to: (fx["can_be_applied_to"] || "").split(/,\s*/),
            }
          end
          return invalid
        end

        # @return [void]
        def self.armor()
          Armor.destroy_all()
          armor_types = {
            "Head"  => 1,
            "Chest" => 2,
            "Arms"  => 3,
            "Legs"  => 4,
          }
          invalid = self.from_json("armor.json", Armor) do |fx|
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

        # @return [void]
        def self.talismans()
          Talisman.destroy_all()
          invalid = self.from_json("talismans.json", Talisman) do |fx|
            _args = {

              name:             fx["name"],
              weight:           fx["weight"],
              description:      fx["description"],
              long_description: fx["longDdescription"],
              restricts:        fx["restricts"],
              effects:          fx["effects"],

              equipment_effects_attributes: fx["effects"],

              metadata: {
                location: fx["location"],
                **(fx["metadata"] || {}),
              },

            }
          end
          return invalid
        end

        # @return [void]
        def self.shields()
          Weapon.where(is_shield: true).each(&:destroy)
          type_ids = {
            "Small Shields"  => 41,
            "Medium Shields" => 42,
            "Greatshields"   => 43,
          }
          skill_ids = {}
          WeaponSkill.all.each { |ws| skill_ids[ws.name] = ws.id }
          invalid = self.from_json("shields.json", Weapon) do |fx|
            _args = {
              equipment_effects_attributes: (fx["effects"] || []),

              is_shield:             true,
              is_special:            (fx["is_special"] == true || fx["is_special"] == "TRUE" || fx["is_special"] == "true"),
              name:                  fx["name"],
              weight:                fx["weight"],
              weapon_type_id:        type_ids[fx["weapon_type"]],
              weapon_skill_id:       skill_ids[fx["skill"]],
              physical_damage_types: [ "Strike" ],
              metadata:              { skill: fx["skill"] },

              required_strength:     fx["required_strength"],
              required_dexterity:    fx["required_dexterity"],
              required_intelligence: fx["required_intelligence"],
              required_faith:        fx["required_faith"],
              required_arcane:       fx["required_arcane"],

              attack_physical:       fx["attack_physical"],
              attack_magic:          fx["attack_magic"],
              attack_fire:           fx["attack_fire"],
              attack_lightning:      fx["attack_lightning"],
              attack_holy:           fx["attack_holy"],
              attack_critical:       fx["attack_critical"],

              defense_physical:      fx["defense_physical"],
              defense_magic:         fx["defense_magic"],
              defense_fire:          fx["defense_fire"],
              defense_lightning:     fx["defense_lightning"],
              defense_holy:          fx["defense_holy"],
              defense_guard_boost:   fx["defense_guard_boost"],

              scaling_strength:      fx["scaling_strength"],
              scaling_intelligence:  fx["scaling_intelligence"],
              scaling_dexterity:     fx["scaling_dexterity"],
              scaling_faith:         fx["scaling_faith"],
              scaling_arcane:        fx["scaling_arcane"],

              damage_blood_loss:   fx["damage_blood_loss"],
              damage_frost:        fx["damage_frost"],
              damage_madness:      fx["damage_madness"],
              damage_poison:       fx["damage_poison"],
              damage_sleep:        fx["damage_sleep"],
              damage_death_blight: fx["damage_death_blight"],
              damage_scarlet_rot:  fx["damage_scarlet_rot"],
            }
          end
          return invalid
        end

        # @return [void]
        def self.weapons()
          Weapon.where(is_shield: false).each(&:destroy)
          type_ids = {}
          skill_ids = {}
          WeaponType.all.each { |wt| type_ids[wt.name] = wt.id }
          WeaponSkill.all.each { |ws| skill_ids[ws.name] = ws.id }
          invalid = self.from_tsv("weapons.tsv", Weapon) do |fx|
            _args = {
              # equipment_effects_attributes: (fx["effects"] || []),

              is_shield:             false,
              is_special:            (fx["special"] == true || fx["special"] == "TRUE" || fx["special"] == "true"),
              name:                  fx["name"],
              weight:                fx["weight"],
              weapon_type_id:        type_ids[fx["weapon_type"]],
              weapon_skill_id:       skill_ids[fx["skill_name"]],
              physical_damage_types: fx["physical_damage_types"].split(/,\s*/),
              metadata: {
                effects:                fx["effects"],
                notes:                  fx["notes"],
                spell_boost_group:      fx["spell_boost_group"],
                spell_boost_percentage: fx["spell_boost_percentage"],
              },
              # FIXME: seeding weapons, defense_guard_boost
              defense_guard_boost:    fx["defense_guard_boost"] || -1,
              attack_critical:        fx["attack_critical"],
              attack_stamina_damage:  fx["attack_stamina_damage"],
              range:                  fx["range"],
              incantation_scaling:    fx["incantation_scaling"],
              sorcery_scaling:        fx["sorcery_scaling"],
              spell_boost_groups:     fx["spell_boost_groups"] || [],
              spell_boost_percentage: fx["spell_boost_percentage"],

              attack_physical:       fx["attack_physical"],
              attack_magic:          fx["attack_magic"],
              attack_fire:           fx["attack_fire"],
              attack_lightning:      fx["attack_lightning"],
              attack_holy:           fx["attack_holy"],

              defense_physical:      fx["defense_physical"],
              defense_magic:         fx["defense_magic"],
              defense_fire:          fx["defense_fire"],
              defense_lightning:     fx["defense_lightning"],
              defense_holy:          fx["defense_holy"],

              scaling_strength:      fx["scaling_strength"],
              scaling_intelligence:  fx["scaling_intelligence"],
              scaling_dexterity:     fx["scaling_dexterity"],
              scaling_faith:         fx["scaling_faith"],
              scaling_arcane:        fx["scaling_arcane"],

              required_strength:     fx["required_strength"],
              required_dexterity:    fx["required_dexterity"],
              required_intelligence: fx["required_intelligence"],
              required_faith:        fx["required_faith"],
              required_arcane:       fx["required_arcane"],

              damage_blood_loss:   fx["damage_blood_loss"],
              damage_frost:        fx["damage_frost"],
              damage_madness:      fx["damage_madness"],
              damage_poison:       fx["damage_poison"],
              damage_sleep:        fx["damage_sleep"],
              damage_death_blight: fx["damage_death_blight"],
              damage_scarlet_rot:  fx["damage_scarlet_rot"],
            }
            if ["Bows", "Light Bows", "Greatbows", "Crossbows", "Ballistae"].include?(fx["weapon_type"])
              _args[:defense_physical]    = 0
              _args[:defense_magic]       = 0
              _args[:defense_fire]        = 0
              _args[:defense_lightning]   = 0
              _args[:defense_holy]        = 0
              _args[:defense_guard_boost] = 0
            end
            _args
          end
          return invalid
        end

        # @return [void]
        def self.spells()
          Spell.destroy_all()
          invalid = self.from_tsv("spells.tsv", Spell) do |fx|
            _args = {
                metadata: {
                  fp:             fx["FP"],
                  bonus_category: fx["bonus_category"],
                },
                name:                    fx["name"],
                spell_type:              fx["spell_type"],
                description:             fx["description"],
                slots_required:          fx["slots_required"],
                stamina_cost:            fx["stamina_cost"],
                fp_cost:                 fx["fp_cost"],
                fp_cost_alt:             fx["fp_cost_alt"],
                # fp_cost_alt_description: fx["fp_cost_alt_description"],
                bonus_category:          fx["category"],

                required_intelligence:   fx["int"],
                required_faith:          fx["fai"],
                required_arcane:         fx["arc"],

                is_chargeable:           fx["chargeable"],
                is_usable_while_jumping: fx["jumping"],
                is_usable_on_horse:      fx["horse"],

                # damage_blood_loss:   fx["damage_blood_loss"],
                # damage_frost:        fx["damage_frost"],
                # damage_madness:      fx["damage_madness"],
                # damage_poison:       fx["damage_poison"],
                # damage_sleep:        fx["damage_sleep"],
                # damage_death_blight: fx["damage_death_blight"],
                # damage_scarlet_rot:  fx["damage_scarlet_rot"],
                inflicts_physical:     fx["physical"],
                inflicts_magic:        fx["magic"],
                inflicts_fire:         fx["fire"],
                inflicts_lightning:    fx["lightning"],
                inflicts_holy:         fx["holy"],
                inflicts_blood_loss:   fx["bleed"],
                inflicts_frost:        fx["frost"],
                inflicts_madness:      fx["madness"],
                inflicts_poison:       fx["poison"],
                inflicts_sleep:        fx["sleep"],
                inflicts_death_blight: fx["death"],
                inflicts_scarlet_rot:  fx["rot"],
            }
          end
          return invalid
        end

        # @return [void]
        def self.attack_element_correct_params()
          # AttackElementCorrectParam.destroy_all()
          invalid = self.from_tsv("calculation/AttackElementCorrectParam.tsv", AttackElementCorrectParam) do |fx|
            _args = {
              id: fx["ID"],

              isStrengthCorrect_byPhysics:  (fx["isStrengthCorrect_byPhysics"].to_s == "1"),
              isDexterityCorrect_byPhysics: (fx["isDexterityCorrect_byPhysics"].to_s == "1"),
              isMagicCorrect_byPhysics:     (fx["isMagicCorrect_byPhysics"].to_s == "1"),
              isFaithCorrect_byPhysics:     (fx["isFaithCorrect_byPhysics"].to_s == "1"),
              isLuckCorrect_byPhysics:      (fx["isLuckCorrect_byPhysics"].to_s == "1"),
              isStrengthCorrect_byMagic:    (fx["isStrengthCorrect_byMagic"].to_s == "1"),
              isDexterityCorrect_byMagic:   (fx["isDexterityCorrect_byMagic"].to_s == "1"),
              isMagicCorrect_byMagic:       (fx["isMagicCorrect_byMagic"].to_s == "1"),
              isFaithCorrect_byMagic:       (fx["isFaithCorrect_byMagic"].to_s == "1"),
              isLuckCorrect_byMagic:        (fx["isLuckCorrect_byMagic"].to_s == "1"),
              isStrengthCorrect_byFire:     (fx["isStrengthCorrect_byFire"].to_s == "1"),
              isDexterityCorrect_byFire:    (fx["isDexterityCorrect_byFire"].to_s == "1"),
              isMagicCorrect_byFire:        (fx["isMagicCorrect_byFire"].to_s == "1"),
              isFaithCorrect_byFire:        (fx["isFaithCorrect_byFire"].to_s == "1"),
              isLuckCorrect_byFire:         (fx["isLuckCorrect_byFire"].to_s == "1"),
              isStrengthCorrect_byThunder:  (fx["isStrengthCorrect_byThunder"].to_s == "1"),
              isDexterityCorrect_byThunder: (fx["isDexterityCorrect_byThunder"].to_s == "1"),
              isMagicCorrect_byThunder:     (fx["isMagicCorrect_byThunder"].to_s == "1"),
              isFaithCorrect_byThunder:     (fx["isFaithCorrect_byThunder"].to_s == "1"),
              isLuckCorrect_byThunder:      (fx["isLuckCorrect_byThunder"].to_s == "1"),
              isStrengthCorrect_byDark:     (fx["isStrengthCorrect_byDark"].to_s == "1"),
              isDexterityCorrect_byDark:    (fx["isDexterityCorrect_byDark"].to_s == "1"),
              isMagicCorrect_byDark:        (fx["isMagicCorrect_byDark"].to_s == "1"),
              isFaithCorrect_byDark:        (fx["isFaithCorrect_byDark"].to_s == "1"),
              isLuckCorrect_byDark:         (fx["isLuckCorrect_byDark"].to_s == "1"),

              overwriteStrengthCorrectRate_byPhysics:  fx["overwriteStrengthCorrectRate_byPhysics"],
              overwriteDexterityCorrectRate_byPhysics: fx["overwriteDexterityCorrectRate_byPhysics"],
              overwriteMagicCorrectRate_byPhysics:     fx["overwriteMagicCorrectRate_byPhysics"],
              overwriteFaithCorrectRate_byPhysics:     fx["overwriteFaithCorrectRate_byPhysics"],
              overwriteLuckCorrectRate_byPhysics:      fx["overwriteLuckCorrectRate_byPhysics"],
              overwriteStrengthCorrectRate_byMagic:    fx["overwriteStrengthCorrectRate_byMagic"],
              overwriteDexterityCorrectRate_byMagic:   fx["overwriteDexterityCorrectRate_byMagic"],
              overwriteMagicCorrectRate_byMagic:       fx["overwriteMagicCorrectRate_byMagic"],
              overwriteFaithCorrectRate_byMagic:       fx["overwriteFaithCorrectRate_byMagic"],
              overwriteLuckCorrectRate_byMagic:        fx["overwriteLuckCorrectRate_byMagic"],
              overwriteStrengthCorrectRate_byFire:     fx["overwriteStrengthCorrectRate_byFire"],
              overwriteDexterityCorrectRate_byFire:    fx["overwriteDexterityCorrectRate_byFire"],
              overwriteMagicCorrectRate_byFire:        fx["overwriteMagicCorrectRate_byFire"],
              overwriteFaithCorrectRate_byFire:        fx["overwriteFaithCorrectRate_byFire"],
              overwriteLuckCorrectRate_byFire:         fx["overwriteLuckCorrectRate_byFire"],
              overwriteStrengthCorrectRate_byThunder:  fx["overwriteStrengthCorrectRate_byThunder"],
              overwriteDexterityCorrectRate_byThunder: fx["overwriteDexterityCorrectRate_byThunder"],
              overwriteMagicCorrectRate_byThunder:     fx["overwriteMagicCorrectRate_byThunder"],
              overwriteFaithCorrectRate_byThunder:     fx["overwriteFaithCorrectRate_byThunder"],
              overwriteLuckCorrectRate_byThunder:      fx["overwriteLuckCorrectRate_byThunder"],
              overwriteStrengthCorrectRate_byDark:     fx["overwriteStrengthCorrectRate_byDark"],
              overwriteDexterityCorrectRate_byDark:    fx["overwriteDexterityCorrectRate_byDark"],
              overwriteMagicCorrectRate_byDark:        fx["overwriteMagicCorrectRate_byDark"],
              overwriteFaithCorrectRate_byDark:        fx["overwriteFaithCorrectRate_byDark"],
              overwriteLuckCorrectRate_byDark:         fx["overwriteLuckCorrectRate_byDark"],

              InfluenceStrengthCorrectRate_byPhysics:  fx["InfluenceStrengthCorrectRate_byPhysics"],
              InfluenceDexterityCorrectRate_byPhysics: fx["InfluenceDexterityCorrectRate_byPhysics"],
              InfluenceMagicCorrectRate_byPhysics:     fx["InfluenceMagicCorrectRate_byPhysics"],
              InfluenceFaithCorrectRate_byPhysics:     fx["InfluenceFaithCorrectRate_byPhysics"],
              InfluenceLuckCorrectRate_byPhysics:      fx["InfluenceLuckCorrectRate_byPhysics"],
              InfluenceStrengthCorrectRate_byMagic:    fx["InfluenceStrengthCorrectRate_byMagic"],
              InfluenceDexterityCorrectRate_byMagic:   fx["InfluenceDexterityCorrectRate_byMagic"],
              InfluenceMagicCorrectRate_byMagic:       fx["InfluenceMagicCorrectRate_byMagic"],
              InfluenceFaithCorrectRate_byMagic:       fx["InfluenceFaithCorrectRate_byMagic"],
              InfluenceLuckCorrectRate_byMagic:        fx["InfluenceLuckCorrectRate_byMagic"],
              InfluenceStrengthCorrectRate_byFire:     fx["InfluenceStrengthCorrectRate_byFire"],
              InfluenceDexterityCorrectRate_byFire:    fx["InfluenceDexterityCorrectRate_byFire"],
              InfluenceMagicCorrectRate_byFire:        fx["InfluenceMagicCorrectRate_byFire"],
              InfluenceFaithCorrectRate_byFire:        fx["InfluenceFaithCorrectRate_byFire"],
              InfluenceLuckCorrectRate_byFire:         fx["InfluenceLuckCorrectRate_byFire"],
              InfluenceStrengthCorrectRate_byThunder:  fx["InfluenceStrengthCorrectRate_byThunder"],
              InfluenceDexterityCorrectRate_byThunder: fx["InfluenceDexterityCorrectRate_byThunder"],
              InfluenceMagicCorrectRate_byThunder:     fx["InfluenceMagicCorrectRate_byThunder"],
              InfluenceFaithCorrectRate_byThunder:     fx["InfluenceFaithCorrectRate_byThunder"],
              InfluenceLuckCorrectRate_byThunder:      fx["InfluenceLuckCorrectRate_byThunder"],
              InfluenceStrengthCorrectRate_byDark:     fx["InfluenceStrengthCorrectRate_byDark"],
              InfluenceDexterityCorrectRate_byDark:    fx["InfluenceDexterityCorrectRate_byDark"],
              InfluenceMagicCorrectRate_byDark:        fx["InfluenceMagicCorrectRate_byDark"],
              InfluenceFaithCorrectRate_byDark:        fx["InfluenceFaithCorrectRate_byDark"],
              InfluenceLuckCorrectRate_byDark:         fx["InfluenceLuckCorrectRate_byDark"],
            }
          end
          return invalid
        end

        # @return [void]
        def self.weapon_attack_stats()
          # WeaponAttackStat.destroy_all()
          invalid = self.from_tsv("calculation/Attack.tsv", WeaponAttackStat) do |fx|
            name = fx["Name"]

            _args = {
              name: name,

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
