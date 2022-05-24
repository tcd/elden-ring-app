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

ActiveRecord::Schema[7.0].define(version: 2022_05_24_184239) do
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

  create_table "weapon_attack_stats", force: :cascade do |t|
    t.string "name", null: false
    t.integer "weapon_id", null: false
    t.integer "weapon_affinity_id", null: false
    t.decimal "physical__00", default: "0.0", null: false
    t.decimal "physical__01", default: "0.0", null: false
    t.decimal "physical__02", default: "0.0", null: false
    t.decimal "physical__03", default: "0.0", null: false
    t.decimal "physical__04", default: "0.0", null: false
    t.decimal "physical__05", default: "0.0", null: false
    t.decimal "physical__06", default: "0.0", null: false
    t.decimal "physical__07", default: "0.0", null: false
    t.decimal "physical__08", default: "0.0", null: false
    t.decimal "physical__09", default: "0.0", null: false
    t.decimal "physical__10", default: "0.0", null: false
    t.decimal "physical__11", default: "0.0", null: false
    t.decimal "physical__12", default: "0.0", null: false
    t.decimal "physical__13", default: "0.0", null: false
    t.decimal "physical__14", default: "0.0", null: false
    t.decimal "physical__15", default: "0.0", null: false
    t.decimal "physical__16", default: "0.0", null: false
    t.decimal "physical__17", default: "0.0", null: false
    t.decimal "physical__18", default: "0.0", null: false
    t.decimal "physical__19", default: "0.0", null: false
    t.decimal "physical__20", default: "0.0", null: false
    t.decimal "physical__21", default: "0.0", null: false
    t.decimal "physical__22", default: "0.0", null: false
    t.decimal "physical__23", default: "0.0", null: false
    t.decimal "physical__24", default: "0.0", null: false
    t.decimal "physical__25", default: "0.0", null: false
    t.decimal "magic__00", default: "0.0", null: false
    t.decimal "magic__01", default: "0.0", null: false
    t.decimal "magic__02", default: "0.0", null: false
    t.decimal "magic__03", default: "0.0", null: false
    t.decimal "magic__04", default: "0.0", null: false
    t.decimal "magic__05", default: "0.0", null: false
    t.decimal "magic__06", default: "0.0", null: false
    t.decimal "magic__07", default: "0.0", null: false
    t.decimal "magic__08", default: "0.0", null: false
    t.decimal "magic__09", default: "0.0", null: false
    t.decimal "magic__10", default: "0.0", null: false
    t.decimal "magic__11", default: "0.0", null: false
    t.decimal "magic__12", default: "0.0", null: false
    t.decimal "magic__13", default: "0.0", null: false
    t.decimal "magic__14", default: "0.0", null: false
    t.decimal "magic__15", default: "0.0", null: false
    t.decimal "magic__16", default: "0.0", null: false
    t.decimal "magic__17", default: "0.0", null: false
    t.decimal "magic__18", default: "0.0", null: false
    t.decimal "magic__19", default: "0.0", null: false
    t.decimal "magic__20", default: "0.0", null: false
    t.decimal "magic__21", default: "0.0", null: false
    t.decimal "magic__22", default: "0.0", null: false
    t.decimal "magic__23", default: "0.0", null: false
    t.decimal "magic__24", default: "0.0", null: false
    t.decimal "magic__25", default: "0.0", null: false
    t.decimal "fire__00", default: "0.0", null: false
    t.decimal "fire__01", default: "0.0", null: false
    t.decimal "fire__02", default: "0.0", null: false
    t.decimal "fire__03", default: "0.0", null: false
    t.decimal "fire__04", default: "0.0", null: false
    t.decimal "fire__05", default: "0.0", null: false
    t.decimal "fire__06", default: "0.0", null: false
    t.decimal "fire__07", default: "0.0", null: false
    t.decimal "fire__08", default: "0.0", null: false
    t.decimal "fire__09", default: "0.0", null: false
    t.decimal "fire__10", default: "0.0", null: false
    t.decimal "fire__11", default: "0.0", null: false
    t.decimal "fire__12", default: "0.0", null: false
    t.decimal "fire__13", default: "0.0", null: false
    t.decimal "fire__14", default: "0.0", null: false
    t.decimal "fire__15", default: "0.0", null: false
    t.decimal "fire__16", default: "0.0", null: false
    t.decimal "fire__17", default: "0.0", null: false
    t.decimal "fire__18", default: "0.0", null: false
    t.decimal "fire__19", default: "0.0", null: false
    t.decimal "fire__20", default: "0.0", null: false
    t.decimal "fire__21", default: "0.0", null: false
    t.decimal "fire__22", default: "0.0", null: false
    t.decimal "fire__23", default: "0.0", null: false
    t.decimal "fire__24", default: "0.0", null: false
    t.decimal "fire__25", default: "0.0", null: false
    t.decimal "lightning__00", default: "0.0", null: false
    t.decimal "lightning__01", default: "0.0", null: false
    t.decimal "lightning__02", default: "0.0", null: false
    t.decimal "lightning__03", default: "0.0", null: false
    t.decimal "lightning__04", default: "0.0", null: false
    t.decimal "lightning__05", default: "0.0", null: false
    t.decimal "lightning__06", default: "0.0", null: false
    t.decimal "lightning__07", default: "0.0", null: false
    t.decimal "lightning__08", default: "0.0", null: false
    t.decimal "lightning__09", default: "0.0", null: false
    t.decimal "lightning__10", default: "0.0", null: false
    t.decimal "lightning__11", default: "0.0", null: false
    t.decimal "lightning__12", default: "0.0", null: false
    t.decimal "lightning__13", default: "0.0", null: false
    t.decimal "lightning__14", default: "0.0", null: false
    t.decimal "lightning__15", default: "0.0", null: false
    t.decimal "lightning__16", default: "0.0", null: false
    t.decimal "lightning__17", default: "0.0", null: false
    t.decimal "lightning__18", default: "0.0", null: false
    t.decimal "lightning__19", default: "0.0", null: false
    t.decimal "lightning__20", default: "0.0", null: false
    t.decimal "lightning__21", default: "0.0", null: false
    t.decimal "lightning__22", default: "0.0", null: false
    t.decimal "lightning__23", default: "0.0", null: false
    t.decimal "lightning__24", default: "0.0", null: false
    t.decimal "lightning__25", default: "0.0", null: false
    t.decimal "holy__00", default: "0.0", null: false
    t.decimal "holy__01", default: "0.0", null: false
    t.decimal "holy__02", default: "0.0", null: false
    t.decimal "holy__03", default: "0.0", null: false
    t.decimal "holy__04", default: "0.0", null: false
    t.decimal "holy__05", default: "0.0", null: false
    t.decimal "holy__06", default: "0.0", null: false
    t.decimal "holy__07", default: "0.0", null: false
    t.decimal "holy__08", default: "0.0", null: false
    t.decimal "holy__09", default: "0.0", null: false
    t.decimal "holy__10", default: "0.0", null: false
    t.decimal "holy__11", default: "0.0", null: false
    t.decimal "holy__12", default: "0.0", null: false
    t.decimal "holy__13", default: "0.0", null: false
    t.decimal "holy__14", default: "0.0", null: false
    t.decimal "holy__15", default: "0.0", null: false
    t.decimal "holy__16", default: "0.0", null: false
    t.decimal "holy__17", default: "0.0", null: false
    t.decimal "holy__18", default: "0.0", null: false
    t.decimal "holy__19", default: "0.0", null: false
    t.decimal "holy__20", default: "0.0", null: false
    t.decimal "holy__21", default: "0.0", null: false
    t.decimal "holy__22", default: "0.0", null: false
    t.decimal "holy__23", default: "0.0", null: false
    t.decimal "holy__24", default: "0.0", null: false
    t.decimal "holy__25", default: "0.0", null: false
    t.decimal "stamina__00", default: "0.0", null: false
    t.decimal "stamina__01", default: "0.0", null: false
    t.decimal "stamina__02", default: "0.0", null: false
    t.decimal "stamina__03", default: "0.0", null: false
    t.decimal "stamina__04", default: "0.0", null: false
    t.decimal "stamina__05", default: "0.0", null: false
    t.decimal "stamina__06", default: "0.0", null: false
    t.decimal "stamina__07", default: "0.0", null: false
    t.decimal "stamina__08", default: "0.0", null: false
    t.decimal "stamina__09", default: "0.0", null: false
    t.decimal "stamina__10", default: "0.0", null: false
    t.decimal "stamina__11", default: "0.0", null: false
    t.decimal "stamina__12", default: "0.0", null: false
    t.decimal "stamina__13", default: "0.0", null: false
    t.decimal "stamina__14", default: "0.0", null: false
    t.decimal "stamina__15", default: "0.0", null: false
    t.decimal "stamina__16", default: "0.0", null: false
    t.decimal "stamina__17", default: "0.0", null: false
    t.decimal "stamina__18", default: "0.0", null: false
    t.decimal "stamina__19", default: "0.0", null: false
    t.decimal "stamina__20", default: "0.0", null: false
    t.decimal "stamina__21", default: "0.0", null: false
    t.decimal "stamina__22", default: "0.0", null: false
    t.decimal "stamina__23", default: "0.0", null: false
    t.decimal "stamina__24", default: "0.0", null: false
    t.decimal "stamina__25", default: "0.0", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_weapon_attack_stats_on_name", unique: true
    t.index ["weapon_affinity_id"], name: "index_weapon_attack_stats_on_weapon_affinity_id"
    t.index ["weapon_id", "weapon_affinity_id"], name: "index_weapon_attack_stats_on_weapon_and_affinity", unique: true
    t.index ["weapon_id"], name: "index_weapon_attack_stats_on_weapon_id"
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
    t.index ["name"], name: "index_weapon_skills_on_name", unique: true
  end

  create_table "weapon_types", force: :cascade do |t|
    t.string "name", null: false
    t.string "plural_name", null: false
    t.boolean "is_shield", default: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.string "scaling_strength"
    t.string "scaling_dexterity"
    t.string "scaling_intelligence"
    t.string "scaling_faith"
    t.string "scaling_arcane"
    t.integer "attack_physical"
    t.integer "attack_magic"
    t.integer "attack_fire"
    t.integer "attack_lightning"
    t.integer "attack_holy"
    t.integer "attack_critical"
    t.integer "sorcery_scaling"
    t.integer "incantation_scaling"
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
    t.integer "attack_stamina_damage"
    t.string "spell_boost_groups", default: [], array: true
    t.decimal "spell_boost_percentage"
    t.integer "damage_blood_loss", default: 0
    t.integer "damage_frost", default: 0
    t.integer "damage_madness", default: 0
    t.integer "damage_poison", default: 0
    t.integer "damage_sleep", default: 0
    t.integer "damage_death_blight", default: 0
    t.integer "damage_scarlet_rot", default: 0
    t.integer "weapon_skill_id", null: false
    t.index ["name"], name: "index_weapons_on_name", unique: true
    t.index ["weapon_type_id"], name: "index_weapons_on_weapon_type_id"
  end

  add_foreign_key "armor", "armor_types", on_delete: :restrict
  add_foreign_key "weapon_attack_stats", "weapon_affinities", on_delete: :cascade
  add_foreign_key "weapon_attack_stats", "weapons", on_delete: :cascade
  add_foreign_key "weapons", "weapon_skills", on_delete: :restrict
  add_foreign_key "weapons", "weapon_types", on_delete: :restrict
end
