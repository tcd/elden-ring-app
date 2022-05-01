class CreateWeaponTypes < ActiveRecord::Migration[7.0]
  def change()
    create_table(:weapon_types) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:singular_name, null: false, index: { unique: true })
      t.string(:plural_name, null: false, index: { unique: true })
      t.boolean(:is_shield, default: false)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
