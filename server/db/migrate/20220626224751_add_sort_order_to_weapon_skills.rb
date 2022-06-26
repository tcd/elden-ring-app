class AddSortOrderToWeaponSkills < ActiveRecord::Migration[7.0]
  def change()
    add_column(:weapon_skills, :sort_group, :integer, null: false, default: 99)
    add_column(:weapon_skills, :sort_order, :integer, null: false, default: 9999)
  end
end
