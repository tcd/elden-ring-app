class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table(:spells) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:spell_type, null: false)
      t.string(:description, null: false)
      t.integer(:slots_required, null: false)
      t.integer(:stamina_cost, null: false)
      t.integer(:fp_cost, null: false)
      t.integer(:fp_cost_alt)
      t.string(:fp_cost_alt_description)
      t.integer(:required_intelligence, null: false)
      t.integer(:required_faith, null: false)
      t.integer(:required_arcane, null: false)
      t.boolean(:is_chargeable)
      t.boolean(:is_usable_on_horse)
      t.string(:bonus_category)
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
