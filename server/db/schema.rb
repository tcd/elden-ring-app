# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_03_163823) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armor", force: :cascade do |t|
    t.string "name", null: false
    t.integer "armor_type_id", null: false
    t.decimal "weight", null: false
    t.boolean "is_altered"
    t.decimal "physical", null: false
    t.decimal "vs_strike", null: false
    t.decimal "vs_slash", null: false
    t.decimal "vs_pierce", null: false
    t.decimal "magic", null: false
    t.decimal "fire", null: false
    t.decimal "lightning", null: false
    t.decimal "holy", null: false
    t.integer "immunity", null: false
    t.integer "robustness", null: false
    t.integer "focus", null: false
    t.integer "vitality", null: false
    t.integer "poise", null: false
    t.jsonb "effects", default: [], null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sort_order", default: 9999, null: false
    t.integer "sort_group", default: 99, null: false
    t.index ["armor_type_id"], name: "index_armor_on_armor_type_id"
    t.index ["name"], name: "index_armor_on_name", unique: true
  end

  create_table "armor_types", force: :cascade do |t|
    t.string "name", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_armor_types_on_name", unique: true
  end

  create_table "attack_element_correct_params", id: :serial, force: :cascade do |t|
    t.boolean "isStrengthCorrect_byPhysics", null: false
    t.boolean "isDexterityCorrect_byPhysics", null: false
    t.boolean "isMagicCorrect_byPhysics", null: false
    t.boolean "isFaithCorrect_byPhysics", null: false
    t.boolean "isLuckCorrect_byPhysics", null: false
    t.boolean "isStrengthCorrect_byMagic", null: false
    t.boolean "isDexterityCorrect_byMagic", null: false
    t.boolean "isMagicCorrect_byMagic", null: false
    t.boolean "isFaithCorrect_byMagic", null: false
    t.boolean "isLuckCorrect_byMagic", null: false
    t.boolean "isStrengthCorrect_byFire", null: false
    t.boolean "isDexterityCorrect_byFire", null: false
    t.boolean "isMagicCorrect_byFire", null: false
    t.boolean "isFaithCorrect_byFire", null: false
    t.boolean "isLuckCorrect_byFire", null: false
    t.boolean "isStrengthCorrect_byThunder", null: false
    t.boolean "isDexterityCorrect_byThunder", null: false
    t.boolean "isMagicCorrect_byThunder", null: false
    t.boolean "isFaithCorrect_byThunder", null: false
    t.boolean "isLuckCorrect_byThunder", null: false
    t.boolean "isStrengthCorrect_byDark", null: false
    t.boolean "isDexterityCorrect_byDark", null: false
    t.boolean "isMagicCorrect_byDark", null: false
    t.boolean "isFaithCorrect_byDark", null: false
    t.boolean "isLuckCorrect_byDark", null: false
    t.integer "overwriteStrengthCorrectRate_byPhysics", null: false
    t.integer "overwriteDexterityCorrectRate_byPhysics", null: false
    t.integer "overwriteMagicCorrectRate_byPhysics", null: false
    t.integer "overwriteFaithCorrectRate_byPhysics", null: false
    t.integer "overwriteLuckCorrectRate_byPhysics", null: false
    t.integer "overwriteStrengthCorrectRate_byMagic", null: false
    t.integer "overwriteDexterityCorrectRate_byMagic", null: false
    t.integer "overwriteMagicCorrectRate_byMagic", null: false
    t.integer "overwriteFaithCorrectRate_byMagic", null: false
    t.integer "overwriteLuckCorrectRate_byMagic", null: false
    t.integer "overwriteStrengthCorrectRate_byFire", null: false
    t.integer "overwriteDexterityCorrectRate_byFire", null: false
    t.integer "overwriteMagicCorrectRate_byFire", null: false
    t.integer "overwriteFaithCorrectRate_byFire", null: false
    t.integer "overwriteLuckCorrectRate_byFire", null: false
    t.integer "overwriteStrengthCorrectRate_byThunder", null: false
    t.integer "overwriteDexterityCorrectRate_byThunder", null: false
    t.integer "overwriteMagicCorrectRate_byThunder", null: false
    t.integer "overwriteFaithCorrectRate_byThunder", null: false
    t.integer "overwriteLuckCorrectRate_byThunder", null: false
    t.integer "overwriteStrengthCorrectRate_byDark", null: false
    t.integer "overwriteDexterityCorrectRate_byDark", null: false
    t.integer "overwriteMagicCorrectRate_byDark", null: false
    t.integer "overwriteFaithCorrectRate_byDark", null: false
    t.integer "overwriteLuckCorrectRate_byDark", null: false
    t.integer "InfluenceStrengthCorrectRate_byPhysics", null: false
    t.integer "InfluenceDexterityCorrectRate_byPhysics", null: false
    t.integer "InfluenceMagicCorrectRate_byPhysics", null: false
    t.integer "InfluenceFaithCorrectRate_byPhysics", null: false
    t.integer "InfluenceLuckCorrectRate_byPhysics", null: false
    t.integer "InfluenceStrengthCorrectRate_byMagic", null: false
    t.integer "InfluenceDexterityCorrectRate_byMagic", null: false
    t.integer "InfluenceMagicCorrectRate_byMagic", null: false
    t.integer "InfluenceFaithCorrectRate_byMagic", null: false
    t.integer "InfluenceLuckCorrectRate_byMagic", null: false
    t.integer "InfluenceStrengthCorrectRate_byFire", null: false
    t.integer "InfluenceDexterityCorrectRate_byFire", null: false
    t.integer "InfluenceMagicCorrectRate_byFire", null: false
    t.integer "InfluenceFaithCorrectRate_byFire", null: false
    t.integer "InfluenceLuckCorrectRate_byFire", null: false
    t.integer "InfluenceStrengthCorrectRate_byThunder", null: false
    t.integer "InfluenceDexterityCorrectRate_byThunder", null: false
    t.integer "InfluenceMagicCorrectRate_byThunder", null: false
    t.integer "InfluenceFaithCorrectRate_byThunder", null: false
    t.integer "InfluenceLuckCorrectRate_byThunder", null: false
    t.integer "InfluenceStrengthCorrectRate_byDark", null: false
    t.integer "InfluenceDexterityCorrectRate_byDark", null: false
    t.integer "InfluenceMagicCorrectRate_byDark", null: false
    t.integer "InfluenceFaithCorrectRate_byDark", null: false
    t.integer "InfluenceLuckCorrectRate_byDark", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id"], name: "index_attack_element_correct_params_on_id", unique: true
  end

  create_table "equipment_effects", force: :cascade do |t|
    t.string "equipment_type", null: false
    t.bigint "equipment_id", null: false
    t.string "effect_method", null: false
    t.string "effect_type", null: false
    t.string "affected_stat", null: false
    t.decimal "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "metadata", default: {}
    t.index ["equipment_type", "equipment_id"], name: "index_equipment_effects_on_equipment"
  end

  create_table "spell_groups", force: :cascade do |t|
    t.string "name", null: false
    t.string "alt_name"
    t.string "spell_type", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["alt_name"], name: "index_spell_groups_on_alt_name", unique: true, where: "(alt_name IS NOT NULL)"
    t.index ["name"], name: "index_spell_groups_on_name", unique: true
  end

  create_table "spells", force: :cascade do |t|
    t.string "name", null: false
    t.string "spell_type", null: false
    t.string "description", null: false
    t.integer "slots_required", null: false
    t.integer "stamina_cost", null: false
    t.integer "fp_cost", null: false
    t.integer "fp_cost_alt"
    t.string "fp_cost_alt_description"
    t.integer "required_intelligence", null: false
    t.integer "required_faith", null: false
    t.integer "required_arcane", null: false
    t.boolean "is_chargeable"
    t.boolean "is_usable_on_horse"
    t.string "bonus_category"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "damage_blood_loss", default: 0
    t.integer "damage_frost", default: 0
    t.integer "damage_madness", default: 0
    t.integer "damage_poison", default: 0
    t.integer "damage_sleep", default: 0
    t.integer "damage_death_blight", default: 0
    t.integer "damage_scarlet_rot", default: 0
    t.boolean "is_usable_while_jumping"
    t.boolean "inflicts_physical"
    t.boolean "inflicts_magic"
    t.boolean "inflicts_fire"
    t.boolean "inflicts_lightning"
    t.boolean "inflicts_holy"
    t.boolean "inflicts_blood_loss"
    t.boolean "inflicts_frost"
    t.boolean "inflicts_madness"
    t.boolean "inflicts_poison"
    t.boolean "inflicts_sleep"
    t.boolean "inflicts_death_blight"
    t.boolean "inflicts_scarlet_rot"
    t.index ["name"], name: "index_spells_on_name", unique: true
  end

  create_table "starting_classes", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "sort_order", null: false
    t.integer "level", null: false
    t.integer "vigor", null: false
    t.integer "mind", null: false
    t.integer "endurance", null: false
    t.integer "strength", null: false
    t.integer "dexterity", null: false
    t.integer "intelligence", null: false
    t.integer "faith", null: false
    t.integer "arcane", null: false
    t.integer "r1_id"
    t.integer "r2_id"
    t.integer "r3_id"
    t.integer "l1_id"
    t.integer "l2_id"
    t.integer "l3_id"
    t.integer "head_id"
    t.integer "chest_id"
    t.integer "arms_id"
    t.integer "legs_id"
    t.integer "spell_1_id"
    t.integer "spell_2_id"
    t.integer "spell_3_id"
    t.integer "spell_4_id"
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_starting_classes_on_name", unique: true
    t.index ["sort_order"], name: "index_starting_classes_on_sort_order", unique: true
  end

  create_table "talismans", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "long_description"
    t.decimal "weight", null: false
    t.string "restricts", default: [], null: false, array: true
    t.jsonb "effects", default: [], null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sort_order", default: 9999, null: false
    t.integer "sort_group", default: 99, null: false
    t.index ["name"], name: "index_talismans_on_name", unique: true
  end

  create_table "weapon_affinities", force: :cascade do |t|
    t.string "name", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sort_order", null: false
    t.index ["name"], name: "index_weapon_affinities_on_name", unique: true
  end

  create_table "weapon_skill_weapon_affinities", force: :cascade do |t|
    t.integer "weapon_skill_id", null: false
    t.integer "weapon_affinity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["weapon_affinity_id"], name: "index_weapon_skill_weapon_affinities_on_weapon_affinity_id"
    t.index ["weapon_skill_id", "weapon_affinity_id"], name: "compound_index_weapon_skill_weapon_affinities", unique: true
    t.index ["weapon_skill_id"], name: "index_weapon_skill_weapon_affinities_on_weapon_skill_id"
  end

  create_table "weapon_skill_weapon_types", force: :cascade do |t|
    t.integer "weapon_skill_id", null: false
    t.integer "weapon_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["weapon_skill_id", "weapon_type_id"], name: "compound_index_weapon_skill_weapon_types", unique: true
    t.index ["weapon_skill_id"], name: "index_weapon_skill_weapon_types_on_weapon_skill_id"
    t.index ["weapon_type_id"], name: "index_weapon_skill_weapon_types_on_weapon_type_id"
  end

  create_table "weapon_skills", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.boolean "ash_of_war"
    t.boolean "is_chargeable"
    t.string "can_be_applied_to", default: [], null: false, array: true
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sort_group", default: 99, null: false
    t.integer "sort_order", default: 9999, null: false
    t.integer "default_affinity_id"
    t.index ["name"], name: "index_weapon_skills_on_name", unique: true
  end

  create_table "weapon_stats", force: :cascade do |t|
    t.string "name", null: false
    t.integer "attack_element_correct_param_id", null: false
    t.integer "weapon_id", null: false
    t.integer "weapon_affinity_id", null: false
    t.decimal "attack_physical_0", null: false
    t.decimal "attack_physical_1", null: false
    t.decimal "attack_physical_2", null: false
    t.decimal "attack_physical_3", null: false
    t.decimal "attack_physical_4", null: false
    t.decimal "attack_physical_5", null: false
    t.decimal "attack_physical_6", null: false
    t.decimal "attack_physical_7", null: false
    t.decimal "attack_physical_8", null: false
    t.decimal "attack_physical_9", null: false
    t.decimal "attack_physical_10", null: false
    t.decimal "attack_physical_11", null: false
    t.decimal "attack_physical_12", null: false
    t.decimal "attack_physical_13", null: false
    t.decimal "attack_physical_14", null: false
    t.decimal "attack_physical_15", null: false
    t.decimal "attack_physical_16", null: false
    t.decimal "attack_physical_17", null: false
    t.decimal "attack_physical_18", null: false
    t.decimal "attack_physical_19", null: false
    t.decimal "attack_physical_20", null: false
    t.decimal "attack_physical_21", null: false
    t.decimal "attack_physical_22", null: false
    t.decimal "attack_physical_23", null: false
    t.decimal "attack_physical_24", null: false
    t.decimal "attack_physical_25", null: false
    t.decimal "attack_magic_0", null: false
    t.decimal "attack_magic_1", null: false
    t.decimal "attack_magic_2", null: false
    t.decimal "attack_magic_3", null: false
    t.decimal "attack_magic_4", null: false
    t.decimal "attack_magic_5", null: false
    t.decimal "attack_magic_6", null: false
    t.decimal "attack_magic_7", null: false
    t.decimal "attack_magic_8", null: false
    t.decimal "attack_magic_9", null: false
    t.decimal "attack_magic_10", null: false
    t.decimal "attack_magic_11", null: false
    t.decimal "attack_magic_12", null: false
    t.decimal "attack_magic_13", null: false
    t.decimal "attack_magic_14", null: false
    t.decimal "attack_magic_15", null: false
    t.decimal "attack_magic_16", null: false
    t.decimal "attack_magic_17", null: false
    t.decimal "attack_magic_18", null: false
    t.decimal "attack_magic_19", null: false
    t.decimal "attack_magic_20", null: false
    t.decimal "attack_magic_21", null: false
    t.decimal "attack_magic_22", null: false
    t.decimal "attack_magic_23", null: false
    t.decimal "attack_magic_24", null: false
    t.decimal "attack_magic_25", null: false
    t.decimal "attack_fire_0", null: false
    t.decimal "attack_fire_1", null: false
    t.decimal "attack_fire_2", null: false
    t.decimal "attack_fire_3", null: false
    t.decimal "attack_fire_4", null: false
    t.decimal "attack_fire_5", null: false
    t.decimal "attack_fire_6", null: false
    t.decimal "attack_fire_7", null: false
    t.decimal "attack_fire_8", null: false
    t.decimal "attack_fire_9", null: false
    t.decimal "attack_fire_10", null: false
    t.decimal "attack_fire_11", null: false
    t.decimal "attack_fire_12", null: false
    t.decimal "attack_fire_13", null: false
    t.decimal "attack_fire_14", null: false
    t.decimal "attack_fire_15", null: false
    t.decimal "attack_fire_16", null: false
    t.decimal "attack_fire_17", null: false
    t.decimal "attack_fire_18", null: false
    t.decimal "attack_fire_19", null: false
    t.decimal "attack_fire_20", null: false
    t.decimal "attack_fire_21", null: false
    t.decimal "attack_fire_22", null: false
    t.decimal "attack_fire_23", null: false
    t.decimal "attack_fire_24", null: false
    t.decimal "attack_fire_25", null: false
    t.decimal "attack_lightning_0", null: false
    t.decimal "attack_lightning_1", null: false
    t.decimal "attack_lightning_2", null: false
    t.decimal "attack_lightning_3", null: false
    t.decimal "attack_lightning_4", null: false
    t.decimal "attack_lightning_5", null: false
    t.decimal "attack_lightning_6", null: false
    t.decimal "attack_lightning_7", null: false
    t.decimal "attack_lightning_8", null: false
    t.decimal "attack_lightning_9", null: false
    t.decimal "attack_lightning_10", null: false
    t.decimal "attack_lightning_11", null: false
    t.decimal "attack_lightning_12", null: false
    t.decimal "attack_lightning_13", null: false
    t.decimal "attack_lightning_14", null: false
    t.decimal "attack_lightning_15", null: false
    t.decimal "attack_lightning_16", null: false
    t.decimal "attack_lightning_17", null: false
    t.decimal "attack_lightning_18", null: false
    t.decimal "attack_lightning_19", null: false
    t.decimal "attack_lightning_20", null: false
    t.decimal "attack_lightning_21", null: false
    t.decimal "attack_lightning_22", null: false
    t.decimal "attack_lightning_23", null: false
    t.decimal "attack_lightning_24", null: false
    t.decimal "attack_lightning_25", null: false
    t.decimal "attack_holy_0", null: false
    t.decimal "attack_holy_1", null: false
    t.decimal "attack_holy_2", null: false
    t.decimal "attack_holy_3", null: false
    t.decimal "attack_holy_4", null: false
    t.decimal "attack_holy_5", null: false
    t.decimal "attack_holy_6", null: false
    t.decimal "attack_holy_7", null: false
    t.decimal "attack_holy_8", null: false
    t.decimal "attack_holy_9", null: false
    t.decimal "attack_holy_10", null: false
    t.decimal "attack_holy_11", null: false
    t.decimal "attack_holy_12", null: false
    t.decimal "attack_holy_13", null: false
    t.decimal "attack_holy_14", null: false
    t.decimal "attack_holy_15", null: false
    t.decimal "attack_holy_16", null: false
    t.decimal "attack_holy_17", null: false
    t.decimal "attack_holy_18", null: false
    t.decimal "attack_holy_19", null: false
    t.decimal "attack_holy_20", null: false
    t.decimal "attack_holy_21", null: false
    t.decimal "attack_holy_22", null: false
    t.decimal "attack_holy_23", null: false
    t.decimal "attack_holy_24", null: false
    t.decimal "attack_holy_25", null: false
    t.decimal "attack_stamina_0", null: false
    t.decimal "attack_stamina_1", null: false
    t.decimal "attack_stamina_2", null: false
    t.decimal "attack_stamina_3", null: false
    t.decimal "attack_stamina_4", null: false
    t.decimal "attack_stamina_5", null: false
    t.decimal "attack_stamina_6", null: false
    t.decimal "attack_stamina_7", null: false
    t.decimal "attack_stamina_8", null: false
    t.decimal "attack_stamina_9", null: false
    t.decimal "attack_stamina_10", null: false
    t.decimal "attack_stamina_11", null: false
    t.decimal "attack_stamina_12", null: false
    t.decimal "attack_stamina_13", null: false
    t.decimal "attack_stamina_14", null: false
    t.decimal "attack_stamina_15", null: false
    t.decimal "attack_stamina_16", null: false
    t.decimal "attack_stamina_17", null: false
    t.decimal "attack_stamina_18", null: false
    t.decimal "attack_stamina_19", null: false
    t.decimal "attack_stamina_20", null: false
    t.decimal "attack_stamina_21", null: false
    t.decimal "attack_stamina_22", null: false
    t.decimal "attack_stamina_23", null: false
    t.decimal "attack_stamina_24", null: false
    t.decimal "attack_stamina_25", null: false
    t.decimal "scaling_strength_0", null: false
    t.decimal "scaling_strength_1", null: false
    t.decimal "scaling_strength_2", null: false
    t.decimal "scaling_strength_3", null: false
    t.decimal "scaling_strength_4", null: false
    t.decimal "scaling_strength_5", null: false
    t.decimal "scaling_strength_6", null: false
    t.decimal "scaling_strength_7", null: false
    t.decimal "scaling_strength_8", null: false
    t.decimal "scaling_strength_9", null: false
    t.decimal "scaling_strength_10", null: false
    t.decimal "scaling_strength_11", null: false
    t.decimal "scaling_strength_12", null: false
    t.decimal "scaling_strength_13", null: false
    t.decimal "scaling_strength_14", null: false
    t.decimal "scaling_strength_15", null: false
    t.decimal "scaling_strength_16", null: false
    t.decimal "scaling_strength_17", null: false
    t.decimal "scaling_strength_18", null: false
    t.decimal "scaling_strength_19", null: false
    t.decimal "scaling_strength_20", null: false
    t.decimal "scaling_strength_21", null: false
    t.decimal "scaling_strength_22", null: false
    t.decimal "scaling_strength_23", null: false
    t.decimal "scaling_strength_24", null: false
    t.decimal "scaling_strength_25", null: false
    t.decimal "scaling_dexterity_0", null: false
    t.decimal "scaling_dexterity_1", null: false
    t.decimal "scaling_dexterity_2", null: false
    t.decimal "scaling_dexterity_3", null: false
    t.decimal "scaling_dexterity_4", null: false
    t.decimal "scaling_dexterity_5", null: false
    t.decimal "scaling_dexterity_6", null: false
    t.decimal "scaling_dexterity_7", null: false
    t.decimal "scaling_dexterity_8", null: false
    t.decimal "scaling_dexterity_9", null: false
    t.decimal "scaling_dexterity_10", null: false
    t.decimal "scaling_dexterity_11", null: false
    t.decimal "scaling_dexterity_12", null: false
    t.decimal "scaling_dexterity_13", null: false
    t.decimal "scaling_dexterity_14", null: false
    t.decimal "scaling_dexterity_15", null: false
    t.decimal "scaling_dexterity_16", null: false
    t.decimal "scaling_dexterity_17", null: false
    t.decimal "scaling_dexterity_18", null: false
    t.decimal "scaling_dexterity_19", null: false
    t.decimal "scaling_dexterity_20", null: false
    t.decimal "scaling_dexterity_21", null: false
    t.decimal "scaling_dexterity_22", null: false
    t.decimal "scaling_dexterity_23", null: false
    t.decimal "scaling_dexterity_24", null: false
    t.decimal "scaling_dexterity_25", null: false
    t.decimal "scaling_intelligence_0", null: false
    t.decimal "scaling_intelligence_1", null: false
    t.decimal "scaling_intelligence_2", null: false
    t.decimal "scaling_intelligence_3", null: false
    t.decimal "scaling_intelligence_4", null: false
    t.decimal "scaling_intelligence_5", null: false
    t.decimal "scaling_intelligence_6", null: false
    t.decimal "scaling_intelligence_7", null: false
    t.decimal "scaling_intelligence_8", null: false
    t.decimal "scaling_intelligence_9", null: false
    t.decimal "scaling_intelligence_10", null: false
    t.decimal "scaling_intelligence_11", null: false
    t.decimal "scaling_intelligence_12", null: false
    t.decimal "scaling_intelligence_13", null: false
    t.decimal "scaling_intelligence_14", null: false
    t.decimal "scaling_intelligence_15", null: false
    t.decimal "scaling_intelligence_16", null: false
    t.decimal "scaling_intelligence_17", null: false
    t.decimal "scaling_intelligence_18", null: false
    t.decimal "scaling_intelligence_19", null: false
    t.decimal "scaling_intelligence_20", null: false
    t.decimal "scaling_intelligence_21", null: false
    t.decimal "scaling_intelligence_22", null: false
    t.decimal "scaling_intelligence_23", null: false
    t.decimal "scaling_intelligence_24", null: false
    t.decimal "scaling_intelligence_25", null: false
    t.decimal "scaling_faith_0", null: false
    t.decimal "scaling_faith_1", null: false
    t.decimal "scaling_faith_2", null: false
    t.decimal "scaling_faith_3", null: false
    t.decimal "scaling_faith_4", null: false
    t.decimal "scaling_faith_5", null: false
    t.decimal "scaling_faith_6", null: false
    t.decimal "scaling_faith_7", null: false
    t.decimal "scaling_faith_8", null: false
    t.decimal "scaling_faith_9", null: false
    t.decimal "scaling_faith_10", null: false
    t.decimal "scaling_faith_11", null: false
    t.decimal "scaling_faith_12", null: false
    t.decimal "scaling_faith_13", null: false
    t.decimal "scaling_faith_14", null: false
    t.decimal "scaling_faith_15", null: false
    t.decimal "scaling_faith_16", null: false
    t.decimal "scaling_faith_17", null: false
    t.decimal "scaling_faith_18", null: false
    t.decimal "scaling_faith_19", null: false
    t.decimal "scaling_faith_20", null: false
    t.decimal "scaling_faith_21", null: false
    t.decimal "scaling_faith_22", null: false
    t.decimal "scaling_faith_23", null: false
    t.decimal "scaling_faith_24", null: false
    t.decimal "scaling_faith_25", null: false
    t.decimal "scaling_arcane_0", null: false
    t.decimal "scaling_arcane_1", null: false
    t.decimal "scaling_arcane_2", null: false
    t.decimal "scaling_arcane_3", null: false
    t.decimal "scaling_arcane_4", null: false
    t.decimal "scaling_arcane_5", null: false
    t.decimal "scaling_arcane_6", null: false
    t.decimal "scaling_arcane_7", null: false
    t.decimal "scaling_arcane_8", null: false
    t.decimal "scaling_arcane_9", null: false
    t.decimal "scaling_arcane_10", null: false
    t.decimal "scaling_arcane_11", null: false
    t.decimal "scaling_arcane_12", null: false
    t.decimal "scaling_arcane_13", null: false
    t.decimal "scaling_arcane_14", null: false
    t.decimal "scaling_arcane_15", null: false
    t.decimal "scaling_arcane_16", null: false
    t.decimal "scaling_arcane_17", null: false
    t.decimal "scaling_arcane_18", null: false
    t.decimal "scaling_arcane_19", null: false
    t.decimal "scaling_arcane_20", null: false
    t.decimal "scaling_arcane_21", null: false
    t.decimal "scaling_arcane_22", null: false
    t.decimal "scaling_arcane_23", null: false
    t.decimal "scaling_arcane_24", null: false
    t.decimal "scaling_arcane_25", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "calc_correct_physical", null: false
    t.integer "calc_correct_magic", null: false
    t.integer "calc_correct_fire", null: false
    t.integer "calc_correct_lightning", null: false
    t.integer "calc_correct_holy", null: false
    t.string "passive_type_1"
    t.string "passive_type_2"
    t.integer "passive_scarlet_rot_0", default: 0, null: false
    t.integer "passive_madness_0", default: 0, null: false
    t.integer "passive_sleep_0", default: 0, null: false
    t.integer "passive_frost_0", default: 0, null: false
    t.integer "passive_poison_0", default: 0, null: false
    t.integer "passive_blood_loss_0", default: 0, null: false
    t.integer "passive_frost_1", default: 0, null: false
    t.integer "passive_poison_1", default: 0, null: false
    t.integer "passive_blood_loss_1", default: 0, null: false
    t.integer "passive_frost_2", default: 0, null: false
    t.integer "passive_poison_2", default: 0, null: false
    t.integer "passive_blood_loss_2", default: 0, null: false
    t.integer "passive_frost_3", default: 0, null: false
    t.integer "passive_poison_3", default: 0, null: false
    t.integer "passive_blood_loss_3", default: 0, null: false
    t.integer "passive_frost_4", default: 0, null: false
    t.integer "passive_poison_4", default: 0, null: false
    t.integer "passive_blood_loss_4", default: 0, null: false
    t.integer "passive_frost_5", default: 0, null: false
    t.integer "passive_poison_5", default: 0, null: false
    t.integer "passive_blood_loss_5", default: 0, null: false
    t.integer "passive_frost_6", default: 0, null: false
    t.integer "passive_poison_6", default: 0, null: false
    t.integer "passive_blood_loss_6", default: 0, null: false
    t.integer "passive_frost_7", default: 0, null: false
    t.integer "passive_poison_7", default: 0, null: false
    t.integer "passive_blood_loss_7", default: 0, null: false
    t.integer "passive_frost_8", default: 0, null: false
    t.integer "passive_poison_8", default: 0, null: false
    t.integer "passive_blood_loss_8", default: 0, null: false
    t.integer "passive_frost_9", default: 0, null: false
    t.integer "passive_poison_9", default: 0, null: false
    t.integer "passive_blood_loss_9", default: 0, null: false
    t.integer "passive_frost_10", default: 0, null: false
    t.integer "passive_poison_10", default: 0, null: false
    t.integer "passive_blood_loss_10", default: 0, null: false
    t.integer "passive_frost_11", default: 0, null: false
    t.integer "passive_poison_11", default: 0, null: false
    t.integer "passive_blood_loss_11", default: 0, null: false
    t.integer "passive_frost_12", default: 0, null: false
    t.integer "passive_poison_12", default: 0, null: false
    t.integer "passive_blood_loss_12", default: 0, null: false
    t.integer "passive_frost_13", default: 0, null: false
    t.integer "passive_poison_13", default: 0, null: false
    t.integer "passive_blood_loss_13", default: 0, null: false
    t.integer "passive_frost_14", default: 0, null: false
    t.integer "passive_poison_14", default: 0, null: false
    t.integer "passive_blood_loss_14", default: 0, null: false
    t.integer "passive_frost_15", default: 0, null: false
    t.integer "passive_poison_15", default: 0, null: false
    t.integer "passive_blood_loss_15", default: 0, null: false
    t.integer "passive_frost_16", default: 0, null: false
    t.integer "passive_poison_16", default: 0, null: false
    t.integer "passive_blood_loss_16", default: 0, null: false
    t.integer "passive_frost_17", default: 0, null: false
    t.integer "passive_poison_17", default: 0, null: false
    t.integer "passive_blood_loss_17", default: 0, null: false
    t.integer "passive_frost_18", default: 0, null: false
    t.integer "passive_poison_18", default: 0, null: false
    t.integer "passive_blood_loss_18", default: 0, null: false
    t.integer "passive_frost_19", default: 0, null: false
    t.integer "passive_poison_19", default: 0, null: false
    t.integer "passive_blood_loss_19", default: 0, null: false
    t.integer "passive_frost_20", default: 0, null: false
    t.integer "passive_poison_20", default: 0, null: false
    t.integer "passive_blood_loss_20", default: 0, null: false
    t.integer "passive_frost_21", default: 0, null: false
    t.integer "passive_poison_21", default: 0, null: false
    t.integer "passive_blood_loss_21", default: 0, null: false
    t.integer "passive_frost_22", default: 0, null: false
    t.integer "passive_poison_22", default: 0, null: false
    t.integer "passive_blood_loss_22", default: 0, null: false
    t.integer "passive_frost_23", default: 0, null: false
    t.integer "passive_poison_23", default: 0, null: false
    t.integer "passive_blood_loss_23", default: 0, null: false
    t.integer "passive_frost_24", default: 0, null: false
    t.integer "passive_poison_24", default: 0, null: false
    t.integer "passive_blood_loss_24", default: 0, null: false
    t.integer "passive_frost_25", default: 0, null: false
    t.integer "passive_poison_25", default: 0, null: false
    t.integer "passive_blood_loss_25", default: 0, null: false
    t.index ["attack_element_correct_param_id"], name: "index_weapon_stats_on_attack_element_correct_param_id"
    t.index ["name"], name: "index_weapon_stats_on_name", unique: true
    t.index ["weapon_affinity_id"], name: "index_weapon_stats_on_weapon_affinity_id"
    t.index ["weapon_id", "weapon_affinity_id"], name: "index_weapon_stats_on_weapon_and_affinity", unique: true
    t.index ["weapon_id"], name: "index_weapon_stats_on_weapon_id"
  end

  create_table "weapon_types", force: :cascade do |t|
    t.string "name", null: false
    t.string "plural_name", null: false
    t.boolean "is_shield", default: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sort_order", null: false
    t.index ["name"], name: "index_weapon_types_on_name", unique: true
    t.index ["plural_name"], name: "index_weapon_types_on_plural_name", unique: true
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name", null: false
    t.integer "weapon_type_id", null: false
    t.decimal "weight", null: false
    t.string "physical_damage_types", default: [], null: false, array: true
    t.boolean "is_shield", default: false
    t.integer "required_strength"
    t.integer "required_dexterity"
    t.integer "required_intelligence"
    t.integer "required_faith"
    t.integer "required_arcane"
    t.decimal "defense_physical", null: false
    t.decimal "defense_magic", null: false
    t.decimal "defense_fire", null: false
    t.decimal "defense_lightning", null: false
    t.decimal "defense_holy", null: false
    t.decimal "defense_guard_boost", null: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_special"
    t.integer "range"
    t.string "spell_boost_groups", default: [], array: true
    t.decimal "spell_boost_percentage"
    t.integer "weapon_skill_id", null: false
    t.integer "sort_order", default: 9999, null: false
    t.index ["name"], name: "index_weapons_on_name", unique: true
    t.index ["weapon_type_id"], name: "index_weapons_on_weapon_type_id"
  end

  add_foreign_key "armor", "armor_types", on_delete: :restrict
  add_foreign_key "starting_classes", "armor", column: "arms_id", on_delete: :cascade
  add_foreign_key "starting_classes", "armor", column: "chest_id", on_delete: :cascade
  add_foreign_key "starting_classes", "armor", column: "head_id", on_delete: :cascade
  add_foreign_key "starting_classes", "armor", column: "legs_id", on_delete: :cascade
  add_foreign_key "starting_classes", "spells", column: "spell_1_id", on_delete: :cascade
  add_foreign_key "starting_classes", "spells", column: "spell_2_id", on_delete: :cascade
  add_foreign_key "starting_classes", "spells", column: "spell_3_id", on_delete: :cascade
  add_foreign_key "starting_classes", "spells", column: "spell_4_id", on_delete: :cascade
  add_foreign_key "starting_classes", "weapons", column: "l1_id", on_delete: :cascade
  add_foreign_key "starting_classes", "weapons", column: "l2_id", on_delete: :cascade
  add_foreign_key "starting_classes", "weapons", column: "l3_id", on_delete: :cascade
  add_foreign_key "starting_classes", "weapons", column: "r1_id", on_delete: :cascade
  add_foreign_key "starting_classes", "weapons", column: "r2_id", on_delete: :cascade
  add_foreign_key "starting_classes", "weapons", column: "r3_id", on_delete: :cascade
  add_foreign_key "weapon_skill_weapon_affinities", "weapon_affinities", on_delete: :cascade
  add_foreign_key "weapon_skill_weapon_affinities", "weapon_skills", on_delete: :cascade
  add_foreign_key "weapon_skill_weapon_types", "weapon_skills", on_delete: :cascade
  add_foreign_key "weapon_skill_weapon_types", "weapon_types", on_delete: :cascade
  add_foreign_key "weapon_skills", "weapon_affinities", column: "default_affinity_id", on_delete: :cascade
  add_foreign_key "weapon_stats", "attack_element_correct_params", on_delete: :cascade
  add_foreign_key "weapon_stats", "weapon_affinities", on_delete: :cascade
  add_foreign_key "weapon_stats", "weapons", on_delete: :cascade
  add_foreign_key "weapons", "weapon_skills", on_delete: :restrict
  add_foreign_key "weapons", "weapon_types", on_delete: :restrict
end
