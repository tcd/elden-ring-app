class AddDefaultAffinityToWeaponSkills < ActiveRecord::Migration[7.0]
  def change()
    add_column(:weapon_skills, :default_affinity_id, :integer, index: true)
    # add_column(:weapon_skills, :default_affinity_id, :integer, null: false, default: 1, index: true)
    add_foreign_key(:weapon_skills, :weapon_affinities, column: :default_affinity_id, on_delete: :cascade)
  end
end
