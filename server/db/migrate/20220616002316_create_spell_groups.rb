class CreateSpellGroups < ActiveRecord::Migration[7.0]
  def change()
    create_table(:spell_groups) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:alt_name, index: { unique: true, where: "alt_name IS NOT NULL" })
      t.string(:spell_type, null: false)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
