class CreateWeaponScalingStats < ActiveRecord::Migration[7.0]
  def change()
    create_table(:weapon_scaling_stats) do |t|

      t.string(:name,                null: false, index: { unique: true })
      t.integer(:weapon_id,          null: false, index: true)
      t.integer(:weapon_affinity_id, null: false, index: true)

      t.decimal(:strength__00,     null: false, default: 0.0)
      t.decimal(:strength__01,     null: false, default: 0.0)
      t.decimal(:strength__02,     null: false, default: 0.0)
      t.decimal(:strength__03,     null: false, default: 0.0)
      t.decimal(:strength__04,     null: false, default: 0.0)
      t.decimal(:strength__05,     null: false, default: 0.0)
      t.decimal(:strength__06,     null: false, default: 0.0)
      t.decimal(:strength__07,     null: false, default: 0.0)
      t.decimal(:strength__08,     null: false, default: 0.0)
      t.decimal(:strength__09,     null: false, default: 0.0)
      t.decimal(:strength__10,     null: false, default: 0.0)
      t.decimal(:strength__11,     null: false, default: 0.0)
      t.decimal(:strength__12,     null: false, default: 0.0)
      t.decimal(:strength__13,     null: false, default: 0.0)
      t.decimal(:strength__14,     null: false, default: 0.0)
      t.decimal(:strength__15,     null: false, default: 0.0)
      t.decimal(:strength__16,     null: false, default: 0.0)
      t.decimal(:strength__17,     null: false, default: 0.0)
      t.decimal(:strength__18,     null: false, default: 0.0)
      t.decimal(:strength__19,     null: false, default: 0.0)
      t.decimal(:strength__20,     null: false, default: 0.0)
      t.decimal(:strength__21,     null: false, default: 0.0)
      t.decimal(:strength__22,     null: false, default: 0.0)
      t.decimal(:strength__23,     null: false, default: 0.0)
      t.decimal(:strength__24,     null: false, default: 0.0)
      t.decimal(:strength__25,     null: false, default: 0.0)
      t.decimal(:dexterity__00,    null: false, default: 0.0)
      t.decimal(:dexterity__01,    null: false, default: 0.0)
      t.decimal(:dexterity__02,    null: false, default: 0.0)
      t.decimal(:dexterity__03,    null: false, default: 0.0)
      t.decimal(:dexterity__04,    null: false, default: 0.0)
      t.decimal(:dexterity__05,    null: false, default: 0.0)
      t.decimal(:dexterity__06,    null: false, default: 0.0)
      t.decimal(:dexterity__07,    null: false, default: 0.0)
      t.decimal(:dexterity__08,    null: false, default: 0.0)
      t.decimal(:dexterity__09,    null: false, default: 0.0)
      t.decimal(:dexterity__10,    null: false, default: 0.0)
      t.decimal(:dexterity__11,    null: false, default: 0.0)
      t.decimal(:dexterity__12,    null: false, default: 0.0)
      t.decimal(:dexterity__13,    null: false, default: 0.0)
      t.decimal(:dexterity__14,    null: false, default: 0.0)
      t.decimal(:dexterity__15,    null: false, default: 0.0)
      t.decimal(:dexterity__16,    null: false, default: 0.0)
      t.decimal(:dexterity__17,    null: false, default: 0.0)
      t.decimal(:dexterity__18,    null: false, default: 0.0)
      t.decimal(:dexterity__19,    null: false, default: 0.0)
      t.decimal(:dexterity__20,    null: false, default: 0.0)
      t.decimal(:dexterity__21,    null: false, default: 0.0)
      t.decimal(:dexterity__22,    null: false, default: 0.0)
      t.decimal(:dexterity__23,    null: false, default: 0.0)
      t.decimal(:dexterity__24,    null: false, default: 0.0)
      t.decimal(:dexterity__25,    null: false, default: 0.0)
      t.decimal(:intelligence__00, null: false, default: 0.0)
      t.decimal(:intelligence__01, null: false, default: 0.0)
      t.decimal(:intelligence__02, null: false, default: 0.0)
      t.decimal(:intelligence__03, null: false, default: 0.0)
      t.decimal(:intelligence__04, null: false, default: 0.0)
      t.decimal(:intelligence__05, null: false, default: 0.0)
      t.decimal(:intelligence__06, null: false, default: 0.0)
      t.decimal(:intelligence__07, null: false, default: 0.0)
      t.decimal(:intelligence__08, null: false, default: 0.0)
      t.decimal(:intelligence__09, null: false, default: 0.0)
      t.decimal(:intelligence__10, null: false, default: 0.0)
      t.decimal(:intelligence__11, null: false, default: 0.0)
      t.decimal(:intelligence__12, null: false, default: 0.0)
      t.decimal(:intelligence__13, null: false, default: 0.0)
      t.decimal(:intelligence__14, null: false, default: 0.0)
      t.decimal(:intelligence__15, null: false, default: 0.0)
      t.decimal(:intelligence__16, null: false, default: 0.0)
      t.decimal(:intelligence__17, null: false, default: 0.0)
      t.decimal(:intelligence__18, null: false, default: 0.0)
      t.decimal(:intelligence__19, null: false, default: 0.0)
      t.decimal(:intelligence__20, null: false, default: 0.0)
      t.decimal(:intelligence__21, null: false, default: 0.0)
      t.decimal(:intelligence__22, null: false, default: 0.0)
      t.decimal(:intelligence__23, null: false, default: 0.0)
      t.decimal(:intelligence__24, null: false, default: 0.0)
      t.decimal(:intelligence__25, null: false, default: 0.0)
      t.decimal(:faith__00,        null: false, default: 0.0)
      t.decimal(:faith__01,        null: false, default: 0.0)
      t.decimal(:faith__02,        null: false, default: 0.0)
      t.decimal(:faith__03,        null: false, default: 0.0)
      t.decimal(:faith__04,        null: false, default: 0.0)
      t.decimal(:faith__05,        null: false, default: 0.0)
      t.decimal(:faith__06,        null: false, default: 0.0)
      t.decimal(:faith__07,        null: false, default: 0.0)
      t.decimal(:faith__08,        null: false, default: 0.0)
      t.decimal(:faith__09,        null: false, default: 0.0)
      t.decimal(:faith__10,        null: false, default: 0.0)
      t.decimal(:faith__11,        null: false, default: 0.0)
      t.decimal(:faith__12,        null: false, default: 0.0)
      t.decimal(:faith__13,        null: false, default: 0.0)
      t.decimal(:faith__14,        null: false, default: 0.0)
      t.decimal(:faith__15,        null: false, default: 0.0)
      t.decimal(:faith__16,        null: false, default: 0.0)
      t.decimal(:faith__17,        null: false, default: 0.0)
      t.decimal(:faith__18,        null: false, default: 0.0)
      t.decimal(:faith__19,        null: false, default: 0.0)
      t.decimal(:faith__20,        null: false, default: 0.0)
      t.decimal(:faith__21,        null: false, default: 0.0)
      t.decimal(:faith__22,        null: false, default: 0.0)
      t.decimal(:faith__23,        null: false, default: 0.0)
      t.decimal(:faith__24,        null: false, default: 0.0)
      t.decimal(:faith__25,        null: false, default: 0.0)
      t.decimal(:arcane__00,       null: false, default: 0.0)
      t.decimal(:arcane__01,       null: false, default: 0.0)
      t.decimal(:arcane__02,       null: false, default: 0.0)
      t.decimal(:arcane__03,       null: false, default: 0.0)
      t.decimal(:arcane__04,       null: false, default: 0.0)
      t.decimal(:arcane__05,       null: false, default: 0.0)
      t.decimal(:arcane__06,       null: false, default: 0.0)
      t.decimal(:arcane__07,       null: false, default: 0.0)
      t.decimal(:arcane__08,       null: false, default: 0.0)
      t.decimal(:arcane__09,       null: false, default: 0.0)
      t.decimal(:arcane__10,       null: false, default: 0.0)
      t.decimal(:arcane__11,       null: false, default: 0.0)
      t.decimal(:arcane__12,       null: false, default: 0.0)
      t.decimal(:arcane__13,       null: false, default: 0.0)
      t.decimal(:arcane__14,       null: false, default: 0.0)
      t.decimal(:arcane__15,       null: false, default: 0.0)
      t.decimal(:arcane__16,       null: false, default: 0.0)
      t.decimal(:arcane__17,       null: false, default: 0.0)
      t.decimal(:arcane__18,       null: false, default: 0.0)
      t.decimal(:arcane__19,       null: false, default: 0.0)
      t.decimal(:arcane__20,       null: false, default: 0.0)
      t.decimal(:arcane__21,       null: false, default: 0.0)
      t.decimal(:arcane__22,       null: false, default: 0.0)
      t.decimal(:arcane__23,       null: false, default: 0.0)
      t.decimal(:arcane__24,       null: false, default: 0.0)
      t.decimal(:arcane__25,       null: false, default: 0.0)

      t.timestamps()
    end

    add_foreign_key(
      :weapon_scaling_stats,
      :weapons,
      on_delete: :cascade
    )
    add_foreign_key(
      :weapon_scaling_stats,
      :weapon_affinities,
      on_delete: :cascade
    )

    add_index(
      :weapon_scaling_stats,
      [:weapon_id, :weapon_affinity_id],
      name: "index_weapon_scaling_stats_on_weapon_and_affinity",
      unique: true,
    )

  end
end
