class CreateWeaponSkills < ActiveRecord::Migration[7.0]
  def change()
    create_table(:weapon_skills) do |t|
      t.string(:name, null: false, index: { unique: true })
      t.string(:description, null: false)
      t.boolean(:ash_of_war)
      t.boolean(:is_chargeable)
      t.string(:can_be_applied_to, array: true, null: false, default: [])
      t.jsonb(:metadata, default: {})
      t.timestamps()
    end
  end
end
