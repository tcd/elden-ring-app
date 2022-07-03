class CreateStartingClasses < ActiveRecord::Migration[7.0]
  def change()
    create_table(:starting_classes) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:description, null: false)
      t.string(:sort_order, null: false, index: { unique: true })

      t.integer(:level, null: false)
      t.integer(:vigor, null: false)
      t.integer(:mind, null: false)
      t.integer(:endurance, null: false)
      t.integer(:strength, null: false)
      t.integer(:dexterity, null: false)
      t.integer(:intelligence, null: false)
      t.integer(:faith, null: false)
      t.integer(:arcane, null: false)

      t.integer(:r1_id)
      t.integer(:r2_id)
      t.integer(:r3_id)
      t.integer(:l1_id)
      t.integer(:l2_id)
      t.integer(:l3_id)

      t.integer(:head_id)
      t.integer(:chest_id)
      t.integer(:arms_id)
      t.integer(:legs_id)

      t.integer(:spell_1_id)
      t.integer(:spell_2_id)
      t.integer(:spell_3_id)
      t.integer(:spell_4_id)

      t.jsonb(:metadata, default: {})
      t.timestamps()
    end

    add_foreign_key(:starting_classes, :weapons, column: :r1_id, on_delete: :cascade)
    add_foreign_key(:starting_classes, :weapons, column: :r2_id, on_delete: :cascade)
    add_foreign_key(:starting_classes, :weapons, column: :r3_id, on_delete: :cascade)
    add_foreign_key(:starting_classes, :weapons, column: :l1_id, on_delete: :cascade)
    add_foreign_key(:starting_classes, :weapons, column: :l2_id, on_delete: :cascade)
    add_foreign_key(:starting_classes, :weapons, column: :l3_id, on_delete: :cascade)

    add_foreign_key(:starting_classes, :armor, column: :head_id,  on_delete: :cascade)
    add_foreign_key(:starting_classes, :armor, column: :chest_id, on_delete: :cascade)
    add_foreign_key(:starting_classes, :armor, column: :arms_id,  on_delete: :cascade)
    add_foreign_key(:starting_classes, :armor, column: :legs_id,  on_delete: :cascade)

    add_foreign_key(:starting_classes, :spells, column: :spell_1_id,  on_delete: :cascade)
    add_foreign_key(:starting_classes, :spells, column: :spell_2_id,  on_delete: :cascade)
    add_foreign_key(:starting_classes, :spells, column: :spell_3_id,  on_delete: :cascade)
    add_foreign_key(:starting_classes, :spells, column: :spell_4_id,  on_delete: :cascade)

  end
end
