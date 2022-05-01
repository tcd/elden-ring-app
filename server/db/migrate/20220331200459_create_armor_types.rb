class CreateArmorTypes < ActiveRecord::Migration[7.0]
  def change()
    create_table(:armor_types) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
