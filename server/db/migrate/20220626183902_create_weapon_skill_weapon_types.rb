class CreateWeaponSkillWeaponTypes < ActiveRecord::Migration[7.0]
  def change()
    create_table(:weapon_skill_weapon_types) do |t|
      t.integer(:weapon_skill_id, null: false, index: true)
      t.integer(:weapon_type_id,  null: false, index: true)
      t.timestamps()
    end
    add_foreign_key(:weapon_skill_weapon_types, :weapon_skills, on_delete: :cascade)
    add_foreign_key(:weapon_skill_weapon_types, :weapon_types,  on_delete: :cascade)
    add_index(
      :weapon_skill_weapon_types,
      [:weapon_skill_id, :weapon_type_id],
      name: :compound_index_weapon_skill_weapon_types,
      unique: true,
    )
  end
end
