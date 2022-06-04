class CreateWeaponWithAffinities < ActiveRecord::Migration[7.0]
  def change()
    create_table(:weapon_with_affinities) do |t|

      t.string(:name,                null: false, index: { unique: true })
      t.integer(:weapon_id,          null: false, index: true)
      t.integer(:weapon_affinity_id, null: false, index: true)

      t.timestamps()
    end

    add_foreign_key(
      :weapon_with_affinities,
      :weapons,
      on_delete: :cascade
    )
    add_foreign_key(
      :weapon_with_affinities,
      :weapon_affinities,
      on_delete: :cascade
    )

    add_index(
      :weapon_with_affinities,
      [:weapon_id, :weapon_affinity_id],
      name: "index_weapon_with_affinities_on_weapon_and_affinity",
      unique: true,
    )

  end
end
