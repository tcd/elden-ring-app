class AddColumnsToSpells < ActiveRecord::Migration[7.0]
  def change()
    change_table(:spells) do |t|

      t.boolean(:is_usable_while_jumping)

      t.boolean(:inflicts_physical)
      t.boolean(:inflicts_magic)
      t.boolean(:inflicts_fire)
      t.boolean(:inflicts_lightning)
      t.boolean(:inflicts_holy)
      t.boolean(:inflicts_blood_loss)
      t.boolean(:inflicts_frost)
      t.boolean(:inflicts_madness)
      t.boolean(:inflicts_poison)
      t.boolean(:inflicts_sleep)
      t.boolean(:inflicts_death_blight)
      t.boolean(:inflicts_scarlet_rot)

    end
  end
end
