class AddSortOrderToWeaponAffinities < ActiveRecord::Migration[7.0]
  def change()
    add_column(:weapon_affinities, :sort_order, :integer, null: false)
  end
end
