class CreateWeaponAttackStats < ActiveRecord::Migration[7.0]
  def change()
    create_table(:weapon_attack_stats) do |t|

      t.string(:name, null: false, index: { unique: true })
      t.integer(:weapon_id, null: false, index: true)
      t.integer(:weapon_affinity_id, null: false, index: true)

      # t.jsonb(:metadata, default: {})

      t.decimal(:physical__00,        null: false, default: 0)
      t.decimal(:physical__01,        null: false, default: 0)
      t.decimal(:physical__02,        null: false, default: 0)
      t.decimal(:physical__03,        null: false, default: 0)
      t.decimal(:physical__04,        null: false, default: 0)
      t.decimal(:physical__05,        null: false, default: 0)
      t.decimal(:physical__06,        null: false, default: 0)
      t.decimal(:physical__07,        null: false, default: 0)
      t.decimal(:physical__08,        null: false, default: 0)
      t.decimal(:physical__09,        null: false, default: 0)
      t.decimal(:physical__10,        null: false, default: 0)
      t.decimal(:physical__11,        null: false, default: 0)
      t.decimal(:physical__12,        null: false, default: 0)
      t.decimal(:physical__13,        null: false, default: 0)
      t.decimal(:physical__14,        null: false, default: 0)
      t.decimal(:physical__15,        null: false, default: 0)
      t.decimal(:physical__16,        null: false, default: 0)
      t.decimal(:physical__17,        null: false, default: 0)
      t.decimal(:physical__18,        null: false, default: 0)
      t.decimal(:physical__19,        null: false, default: 0)
      t.decimal(:physical__20,        null: false, default: 0)
      t.decimal(:physical__21,        null: false, default: 0)
      t.decimal(:physical__22,        null: false, default: 0)
      t.decimal(:physical__23,        null: false, default: 0)
      t.decimal(:physical__24,        null: false, default: 0)
      t.decimal(:physical__25,        null: false, default: 0)
      t.decimal(:magic__00,           null: false, default: 0)
      t.decimal(:magic__01,           null: false, default: 0)
      t.decimal(:magic__02,           null: false, default: 0)
      t.decimal(:magic__03,           null: false, default: 0)
      t.decimal(:magic__04,           null: false, default: 0)
      t.decimal(:magic__05,           null: false, default: 0)
      t.decimal(:magic__06,           null: false, default: 0)
      t.decimal(:magic__07,           null: false, default: 0)
      t.decimal(:magic__08,           null: false, default: 0)
      t.decimal(:magic__09,           null: false, default: 0)
      t.decimal(:magic__10,           null: false, default: 0)
      t.decimal(:magic__11,           null: false, default: 0)
      t.decimal(:magic__12,           null: false, default: 0)
      t.decimal(:magic__13,           null: false, default: 0)
      t.decimal(:magic__14,           null: false, default: 0)
      t.decimal(:magic__15,           null: false, default: 0)
      t.decimal(:magic__16,           null: false, default: 0)
      t.decimal(:magic__17,           null: false, default: 0)
      t.decimal(:magic__18,           null: false, default: 0)
      t.decimal(:magic__19,           null: false, default: 0)
      t.decimal(:magic__20,           null: false, default: 0)
      t.decimal(:magic__21,           null: false, default: 0)
      t.decimal(:magic__22,           null: false, default: 0)
      t.decimal(:magic__23,           null: false, default: 0)
      t.decimal(:magic__24,           null: false, default: 0)
      t.decimal(:magic__25,           null: false, default: 0)
      t.decimal(:fire__00,            null: false, default: 0)
      t.decimal(:fire__01,            null: false, default: 0)
      t.decimal(:fire__02,            null: false, default: 0)
      t.decimal(:fire__03,            null: false, default: 0)
      t.decimal(:fire__04,            null: false, default: 0)
      t.decimal(:fire__05,            null: false, default: 0)
      t.decimal(:fire__06,            null: false, default: 0)
      t.decimal(:fire__07,            null: false, default: 0)
      t.decimal(:fire__08,            null: false, default: 0)
      t.decimal(:fire__09,            null: false, default: 0)
      t.decimal(:fire__10,            null: false, default: 0)
      t.decimal(:fire__11,            null: false, default: 0)
      t.decimal(:fire__12,            null: false, default: 0)
      t.decimal(:fire__13,            null: false, default: 0)
      t.decimal(:fire__14,            null: false, default: 0)
      t.decimal(:fire__15,            null: false, default: 0)
      t.decimal(:fire__16,            null: false, default: 0)
      t.decimal(:fire__17,            null: false, default: 0)
      t.decimal(:fire__18,            null: false, default: 0)
      t.decimal(:fire__19,            null: false, default: 0)
      t.decimal(:fire__20,            null: false, default: 0)
      t.decimal(:fire__21,            null: false, default: 0)
      t.decimal(:fire__22,            null: false, default: 0)
      t.decimal(:fire__23,            null: false, default: 0)
      t.decimal(:fire__24,            null: false, default: 0)
      t.decimal(:fire__25,            null: false, default: 0)
      t.decimal(:lightning__00,       null: false, default: 0)
      t.decimal(:lightning__01,       null: false, default: 0)
      t.decimal(:lightning__02,       null: false, default: 0)
      t.decimal(:lightning__03,       null: false, default: 0)
      t.decimal(:lightning__04,       null: false, default: 0)
      t.decimal(:lightning__05,       null: false, default: 0)
      t.decimal(:lightning__06,       null: false, default: 0)
      t.decimal(:lightning__07,       null: false, default: 0)
      t.decimal(:lightning__08,       null: false, default: 0)
      t.decimal(:lightning__09,       null: false, default: 0)
      t.decimal(:lightning__10,       null: false, default: 0)
      t.decimal(:lightning__11,       null: false, default: 0)
      t.decimal(:lightning__12,       null: false, default: 0)
      t.decimal(:lightning__13,       null: false, default: 0)
      t.decimal(:lightning__14,       null: false, default: 0)
      t.decimal(:lightning__15,       null: false, default: 0)
      t.decimal(:lightning__16,       null: false, default: 0)
      t.decimal(:lightning__17,       null: false, default: 0)
      t.decimal(:lightning__18,       null: false, default: 0)
      t.decimal(:lightning__19,       null: false, default: 0)
      t.decimal(:lightning__20,       null: false, default: 0)
      t.decimal(:lightning__21,       null: false, default: 0)
      t.decimal(:lightning__22,       null: false, default: 0)
      t.decimal(:lightning__23,       null: false, default: 0)
      t.decimal(:lightning__24,       null: false, default: 0)
      t.decimal(:lightning__25,       null: false, default: 0)
      t.decimal(:holy__00,            null: false, default: 0)
      t.decimal(:holy__01,            null: false, default: 0)
      t.decimal(:holy__02,            null: false, default: 0)
      t.decimal(:holy__03,            null: false, default: 0)
      t.decimal(:holy__04,            null: false, default: 0)
      t.decimal(:holy__05,            null: false, default: 0)
      t.decimal(:holy__06,            null: false, default: 0)
      t.decimal(:holy__07,            null: false, default: 0)
      t.decimal(:holy__08,            null: false, default: 0)
      t.decimal(:holy__09,            null: false, default: 0)
      t.decimal(:holy__10,            null: false, default: 0)
      t.decimal(:holy__11,            null: false, default: 0)
      t.decimal(:holy__12,            null: false, default: 0)
      t.decimal(:holy__13,            null: false, default: 0)
      t.decimal(:holy__14,            null: false, default: 0)
      t.decimal(:holy__15,            null: false, default: 0)
      t.decimal(:holy__16,            null: false, default: 0)
      t.decimal(:holy__17,            null: false, default: 0)
      t.decimal(:holy__18,            null: false, default: 0)
      t.decimal(:holy__19,            null: false, default: 0)
      t.decimal(:holy__20,            null: false, default: 0)
      t.decimal(:holy__21,            null: false, default: 0)
      t.decimal(:holy__22,            null: false, default: 0)
      t.decimal(:holy__23,            null: false, default: 0)
      t.decimal(:holy__24,            null: false, default: 0)
      t.decimal(:holy__25,            null: false, default: 0)
      t.decimal(:stamina__00,         null: false, default: 0)
      t.decimal(:stamina__01,         null: false, default: 0)
      t.decimal(:stamina__02,         null: false, default: 0)
      t.decimal(:stamina__03,         null: false, default: 0)
      t.decimal(:stamina__04,         null: false, default: 0)
      t.decimal(:stamina__05,         null: false, default: 0)
      t.decimal(:stamina__06,         null: false, default: 0)
      t.decimal(:stamina__07,         null: false, default: 0)
      t.decimal(:stamina__08,         null: false, default: 0)
      t.decimal(:stamina__09,         null: false, default: 0)
      t.decimal(:stamina__10,         null: false, default: 0)
      t.decimal(:stamina__11,         null: false, default: 0)
      t.decimal(:stamina__12,         null: false, default: 0)
      t.decimal(:stamina__13,         null: false, default: 0)
      t.decimal(:stamina__14,         null: false, default: 0)
      t.decimal(:stamina__15,         null: false, default: 0)
      t.decimal(:stamina__16,         null: false, default: 0)
      t.decimal(:stamina__17,         null: false, default: 0)
      t.decimal(:stamina__18,         null: false, default: 0)
      t.decimal(:stamina__19,         null: false, default: 0)
      t.decimal(:stamina__20,         null: false, default: 0)
      t.decimal(:stamina__21,         null: false, default: 0)
      t.decimal(:stamina__22,         null: false, default: 0)
      t.decimal(:stamina__23,         null: false, default: 0)
      t.decimal(:stamina__24,         null: false, default: 0)
      t.decimal(:stamina__25,         null: false, default: 0)

      t.timestamps()
    end

    add_foreign_key(
      :weapon_attack_stats,
      :weapons,
      on_delete: :cascade
    )
    add_foreign_key(
      :weapon_attack_stats,
      :weapon_affinities,
      on_delete: :cascade
    )

    # add_index(
    #   :weapon_attack_stats,
    #   [:weapon_id],
    #   name: "index_weapon_attacks_without_affinity",
    #   unique: true,
    #   where: "(weapon_affinity_id IS NULL)"
    # )
    # add_index(
    #   :weapon_attack_stats,
    #   [:weapon_id, :weapon_affinity_id],
    #   name: "index_weapon_attacks_with_affinity",
    #   unique: true,
    #   where: "(weapon_affinity_id IS NOT NULL)"
    # )
    add_index(
      :weapon_attack_stats,
      [:weapon_id, :weapon_affinity_id],
      name: "index_weapon_attack_stats_on_weapon_and_affinity",
      unique: true,
    )

  end
end
