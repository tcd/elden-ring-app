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

ActiveRecord::Schema[7.0].define(version: 2022_05_02_211144) do
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
    t.index ["name"], name: "index_weapon_affinities_on_name", unique: true
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
    t.string "singular_name", null: false
    t.string "plural_name", null: false
    t.boolean "is_shield", default: false
    t.jsonb "metadata", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_weapon_types_on_name", unique: true
    t.index ["plural_name"], name: "index_weapon_types_on_plural_name", unique: true
    t.index ["singular_name"], name: "index_weapon_types_on_singular_name", unique: true
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
  add_foreign_key "weapons", "weapon_skills", on_delete: :restrict
  add_foreign_key "weapons", "weapon_types", on_delete: :restrict
end
