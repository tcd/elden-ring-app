class RemoveColumnsFromWeapons < ActiveRecord::Migration[7.0]
  def change()

    remove_column(:weapons, :scaling_strength,     :string)
    remove_column(:weapons, :scaling_dexterity,    :string)
    remove_column(:weapons, :scaling_intelligence, :string)
    remove_column(:weapons, :scaling_faith,        :string)
    remove_column(:weapons, :scaling_arcane,       :string)

    remove_column(:weapons, :attack_physical,        :integer)
    remove_column(:weapons, :attack_magic,           :integer)
    remove_column(:weapons, :attack_fire,            :integer)
    remove_column(:weapons, :attack_lightning,       :integer)
    remove_column(:weapons, :attack_holy,            :integer)
    remove_column(:weapons, :attack_critical,        :integer)
    remove_column(:weapons, :attack_stamina_damage,  :integer)

    remove_column(:weapons, :incantation_scaling,  :integer)
    remove_column(:weapons, :sorcery_scaling,      :integer)

    remove_column(:weapons, :damage_blood_loss,   :integer, default: 0)
    remove_column(:weapons, :damage_frost,        :integer, default: 0)
    remove_column(:weapons, :damage_madness,      :integer, default: 0)
    remove_column(:weapons, :damage_poison,       :integer, default: 0)
    remove_column(:weapons, :damage_sleep,        :integer, default: 0)
    remove_column(:weapons, :damage_death_blight, :integer, default: 0)
    remove_column(:weapons, :damage_scarlet_rot,  :integer, default: 0)

  end
end
