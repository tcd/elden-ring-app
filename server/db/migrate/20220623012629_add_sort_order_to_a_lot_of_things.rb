class AddSortOrderToALotOfThings < ActiveRecord::Migration[7.0]
  def change()
    # add_column(:spell_groups,  :sort_order, :integer, null: false, default: 9999)
    # add_column(:spells,        :sort_order, :integer, null: false, default: 9999)
    # add_column(:weapon_skills, :sort_order, :integer, null: false, default: 9999)

    add_column(:weapons, :sort_order, :integer, null: false, default: 9999)

    add_column(:armor, :sort_order, :integer, null: false, default: 9999)
    add_column(:armor, :sort_group, :integer, null: false, default: 99)

    add_column(:talismans, :sort_order, :integer, null: false, default: 9999)
    add_column(:talismans, :sort_group, :integer, null: false, default: 99)
  end
end
