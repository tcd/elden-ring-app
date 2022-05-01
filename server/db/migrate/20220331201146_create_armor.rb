class CreateArmor < ActiveRecord::Migration[7.0]
  def change
    create_table(:armor) do |t|

      t.string(:name, null: false, index: { unique: true })
      t.integer(:armor_type_id, null: false, index: true)
      t.decimal(:weight, null: false)
      t.boolean(:is_altered)

      t.decimal(:physical, null: false)
      t.decimal(:vs_strike, null: false)
      t.decimal(:vs_slash, null: false)
      t.decimal(:vs_pierce, null: false)
      t.decimal(:magic, null: false)
      t.decimal(:fire, null: false)
      t.decimal(:lightning, null: false)
      t.decimal(:holy, null: false)

      t.integer(:immunity, null: false)
      t.integer(:robustness, null: false)
      t.integer(:focus, null: false)
      t.integer(:vitality, null: false)
      t.integer(:poise, null: false)

      t.jsonb(:effects, null: false, default: [])
      t.jsonb(:metadata, default: {})
      t.timestamps()

    end
    add_foreign_key(:armor, :armor_types, on_delete: :restrict)
  end
end
