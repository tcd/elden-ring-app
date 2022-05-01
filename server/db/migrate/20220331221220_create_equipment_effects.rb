class CreateEquipmentEffects < ActiveRecord::Migration[7.0]
  def change
    create_table(:equipment_effects) do |t|
      t.references(:equipment, polymorphic: true, null: false, index: true)
      t.string(:effect_method, null: false)
      t.string(:effect_type, null: false)
      t.string(:affected_stat, null: false)
      t.decimal(:value, null: false)
      t.timestamps()
    end
  end
end
