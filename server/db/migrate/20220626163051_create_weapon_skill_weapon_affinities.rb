class CreateWeaponSkillWeaponAffinities < ActiveRecord::Migration[7.0]
  def change
    create_table(:weapon_skill_weapon_affinities) do |t|
      t.integer(:weapon_skill_id,     null: false, index: true)
      t.integer(:weapon_affinity_id,  null: false, index: true)
      # t.boolean(:is_primary_affinity, null: false, index: true, default: false)
      t.timestamps()
    end
    add_foreign_key(:weapon_skill_weapon_affinities, :weapon_skills,     on_delete: :cascade)
    add_foreign_key(:weapon_skill_weapon_affinities, :weapon_affinities, on_delete: :cascade)
    add_index(
      :weapon_skill_weapon_affinities,
      [:weapon_skill_id, :weapon_affinity_id],
      name: :compound_index_weapon_skill_weapon_affinities,
      unique: true,
    )
  end
end
