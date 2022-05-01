class CreateWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table(:weapons) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.integer(:weapon_type_id, null: false, index: true)
      t.decimal(:weight, null: false)
      t.string(:physical_damage_types, array: true, null: false, default: [])
      t.boolean(:is_shield, default: false)

      t.integer(:required_strength)
      t.integer(:required_dexterity)
      t.integer(:required_intelligence)
      t.integer(:required_faith)
      t.integer(:required_arcane)

      t.string(:scaling_strength)
      t.string(:scaling_dexterity)
      t.string(:scaling_intelligence)
      t.string(:scaling_faith)
      t.string(:scaling_arcane)

      t.integer(:attack_physical)
      t.integer(:attack_magic)
      t.integer(:attack_fire)
      t.integer(:attack_lightning)
      t.integer(:attack_holy)
      t.integer(:attack_critical)

      t.integer(:sorcery_scaling)
      t.integer(:incantation_scaling)

      t.decimal(:defense_physical, null: false)
      t.decimal(:defense_magic, null: false)
      t.decimal(:defense_fire, null: false)
      t.decimal(:defense_lightning, null: false)
      t.decimal(:defense_holy, null: false)
      t.decimal(:defense_guard_boost, null: false)

      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
    add_foreign_key(:weapons, :weapon_types, on_delete: :restrict)
  end
end
