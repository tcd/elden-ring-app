class AddCalcCorrectColumnsToWeaponStats < ActiveRecord::Migration[7.0]
  def change()
    change_table(:weapon_stats) do |t|
      t.integer(:calc_correct_physical, null: false)
      t.integer(:calc_correct_magic, null: false)
      t.integer(:calc_correct_fire, null: false)
      t.integer(:calc_correct_lightning, null: false)
      t.integer(:calc_correct_holy, null: false)
    end
  end
end
