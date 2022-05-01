class AddWeaponWeaponSkillRelationship < ActiveRecord::Migration[7.0]
  def change()
    add_column(:weapons, :weapon_skill_id, :integer, null: false, index: true)
    add_foreign_key(:weapons, :weapon_skills, on_delete: :restrict)
  end
end
