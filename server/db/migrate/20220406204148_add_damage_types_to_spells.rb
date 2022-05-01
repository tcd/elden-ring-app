class AddDamageTypesToSpells < ActiveRecord::Migration[7.0]
  def change()
    add_column(:spells, :damage_blood_loss,   :integer, default: 0)
    add_column(:spells, :damage_frost,        :integer, default: 0)
    add_column(:spells, :damage_madness,      :integer, default: 0)
    add_column(:spells, :damage_poison,       :integer, default: 0)
    add_column(:spells, :damage_sleep,        :integer, default: 0)
    add_column(:spells, :damage_death_blight, :integer, default: 0)
    add_column(:spells, :damage_scarlet_rot,  :integer, default: 0)
  end
end
