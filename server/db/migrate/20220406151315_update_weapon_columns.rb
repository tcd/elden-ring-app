class UpdateWeaponColumns < ActiveRecord::Migration[7.0]
  def change()
    add_column(:weapons, :is_special, :boolean)
    add_column(:weapons, :range, :integer)
    add_column(:weapons, :attack_stamina_damage, :integer)
    add_column(:weapons, :spell_boost_groups, :string, array: true, default: [])
    add_column(:weapons, :spell_boost_percentage, :decimal)

    add_column(:weapons, :damage_blood_loss,   :integer, default: 0)
    add_column(:weapons, :damage_frost,        :integer, default: 0)
    add_column(:weapons, :damage_madness,      :integer, default: 0)
    add_column(:weapons, :damage_poison,       :integer, default: 0)
    add_column(:weapons, :damage_sleep,        :integer, default: 0)
    add_column(:weapons, :damage_death_blight, :integer, default: 0)
    add_column(:weapons, :damage_scarlet_rot,  :integer, default: 0)
  end
end
