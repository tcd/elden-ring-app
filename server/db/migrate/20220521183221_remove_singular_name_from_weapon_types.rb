class RemoveSingularNameFromWeaponTypes < ActiveRecord::Migration[7.0]
  def change()
    remove_column(:weapon_types, :singular_name, :string, null: false, index: { unique: true })
  end
end
