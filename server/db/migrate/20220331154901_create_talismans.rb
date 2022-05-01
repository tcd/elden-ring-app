class CreateTalismans < ActiveRecord::Migration[7.0]
  def change
    create_table(:talismans) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:description, null: false)
      t.string(:long_description)
      t.decimal(:weight, null: false)
      t.string(:restricts, null: false, array: true, default: [])
      t.jsonb(:effects, null: false, default: [])
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
