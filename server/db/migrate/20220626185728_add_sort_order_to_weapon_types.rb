class AddSortOrderToWeaponTypes < ActiveRecord::Migration[7.0]
  def change()
    add_column(:weapon_types, :sort_order, :integer, null: false)
  end
end
