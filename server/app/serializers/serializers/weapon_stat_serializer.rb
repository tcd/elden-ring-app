module Serializers
  class WeaponStatSerializer < Blueprinter::Base

    IS_POSITIVE = ->(field_name, weapon_stat, _options) { weapon_stat[field_name]&.positive?() }

    # @param attribute_name [Symbol]
    # @return [void]
    def self.float_field(attribute_name)
      field(attribute_name) { |x| x[attribute_name].to_f }
      # field(attribute_name, if: IS_POSITIVE) { |x| x[attribute_name].to_f }
    end

    # @param attribute_name [Symbol]
    # @return [void]
    def self.nullable_field(attribute_name)
      field(attribute_name)
      # field(attribute_name, if: IS_POSITIVE)
    end

    identifier(:id)

    fields(
      # :display_name,
      # :name,
      # :weapon_id,
      :weapon_affinity_id,
      :attack_element_correct_param_id,
    )

    fields(
      :calc_correct_physical,
      :calc_correct_magic,
      :calc_correct_fire,
      :calc_correct_lightning,
      :calc_correct_holy,
    )

    view(:default) do
      include_view(:attack)
      include_view(:scaling)
      include_view(:passive)
    end

    view(:attack) do
      float_field(:attack_physical_0)
      float_field(:attack_physical_1)
      float_field(:attack_physical_2)
      float_field(:attack_physical_3)
      float_field(:attack_physical_4)
      float_field(:attack_physical_5)
      float_field(:attack_physical_6)
      float_field(:attack_physical_7)
      float_field(:attack_physical_8)
      float_field(:attack_physical_9)
      float_field(:attack_physical_10)
      float_field(:attack_physical_11)
      float_field(:attack_physical_12)
      float_field(:attack_physical_13)
      float_field(:attack_physical_14)
      float_field(:attack_physical_15)
      float_field(:attack_physical_16)
      float_field(:attack_physical_17)
      float_field(:attack_physical_18)
      float_field(:attack_physical_19)
      float_field(:attack_physical_20)
      float_field(:attack_physical_21)
      float_field(:attack_physical_22)
      float_field(:attack_physical_23)
      float_field(:attack_physical_24)
      float_field(:attack_physical_25)
      float_field(:attack_magic_0)
      float_field(:attack_magic_1)
      float_field(:attack_magic_2)
      float_field(:attack_magic_3)
      float_field(:attack_magic_4)
      float_field(:attack_magic_5)
      float_field(:attack_magic_6)
      float_field(:attack_magic_7)
      float_field(:attack_magic_8)
      float_field(:attack_magic_9)
      float_field(:attack_magic_10)
      float_field(:attack_magic_11)
      float_field(:attack_magic_12)
      float_field(:attack_magic_13)
      float_field(:attack_magic_14)
      float_field(:attack_magic_15)
      float_field(:attack_magic_16)
      float_field(:attack_magic_17)
      float_field(:attack_magic_18)
      float_field(:attack_magic_19)
      float_field(:attack_magic_20)
      float_field(:attack_magic_21)
      float_field(:attack_magic_22)
      float_field(:attack_magic_23)
      float_field(:attack_magic_24)
      float_field(:attack_magic_25)
      float_field(:attack_fire_0)
      float_field(:attack_fire_1)
      float_field(:attack_fire_2)
      float_field(:attack_fire_3)
      float_field(:attack_fire_4)
      float_field(:attack_fire_5)
      float_field(:attack_fire_6)
      float_field(:attack_fire_7)
      float_field(:attack_fire_8)
      float_field(:attack_fire_9)
      float_field(:attack_fire_10)
      float_field(:attack_fire_11)
      float_field(:attack_fire_12)
      float_field(:attack_fire_13)
      float_field(:attack_fire_14)
      float_field(:attack_fire_15)
      float_field(:attack_fire_16)
      float_field(:attack_fire_17)
      float_field(:attack_fire_18)
      float_field(:attack_fire_19)
      float_field(:attack_fire_20)
      float_field(:attack_fire_21)
      float_field(:attack_fire_22)
      float_field(:attack_fire_23)
      float_field(:attack_fire_24)
      float_field(:attack_fire_25)
      float_field(:attack_lightning_0)
      float_field(:attack_lightning_1)
      float_field(:attack_lightning_2)
      float_field(:attack_lightning_3)
      float_field(:attack_lightning_4)
      float_field(:attack_lightning_5)
      float_field(:attack_lightning_6)
      float_field(:attack_lightning_7)
      float_field(:attack_lightning_8)
      float_field(:attack_lightning_9)
      float_field(:attack_lightning_10)
      float_field(:attack_lightning_11)
      float_field(:attack_lightning_12)
      float_field(:attack_lightning_13)
      float_field(:attack_lightning_14)
      float_field(:attack_lightning_15)
      float_field(:attack_lightning_16)
      float_field(:attack_lightning_17)
      float_field(:attack_lightning_18)
      float_field(:attack_lightning_19)
      float_field(:attack_lightning_20)
      float_field(:attack_lightning_21)
      float_field(:attack_lightning_22)
      float_field(:attack_lightning_23)
      float_field(:attack_lightning_24)
      float_field(:attack_lightning_25)
      float_field(:attack_holy_0)
      float_field(:attack_holy_1)
      float_field(:attack_holy_2)
      float_field(:attack_holy_3)
      float_field(:attack_holy_4)
      float_field(:attack_holy_5)
      float_field(:attack_holy_6)
      float_field(:attack_holy_7)
      float_field(:attack_holy_8)
      float_field(:attack_holy_9)
      float_field(:attack_holy_10)
      float_field(:attack_holy_11)
      float_field(:attack_holy_12)
      float_field(:attack_holy_13)
      float_field(:attack_holy_14)
      float_field(:attack_holy_15)
      float_field(:attack_holy_16)
      float_field(:attack_holy_17)
      float_field(:attack_holy_18)
      float_field(:attack_holy_19)
      float_field(:attack_holy_20)
      float_field(:attack_holy_21)
      float_field(:attack_holy_22)
      float_field(:attack_holy_23)
      float_field(:attack_holy_24)
      float_field(:attack_holy_25)
      float_field(:attack_stamina_0)
      float_field(:attack_stamina_1)
      float_field(:attack_stamina_2)
      float_field(:attack_stamina_3)
      float_field(:attack_stamina_4)
      float_field(:attack_stamina_5)
      float_field(:attack_stamina_6)
      float_field(:attack_stamina_7)
      float_field(:attack_stamina_8)
      float_field(:attack_stamina_9)
      float_field(:attack_stamina_10)
      float_field(:attack_stamina_11)
      float_field(:attack_stamina_12)
      float_field(:attack_stamina_13)
      float_field(:attack_stamina_14)
      float_field(:attack_stamina_15)
      float_field(:attack_stamina_16)
      float_field(:attack_stamina_17)
      float_field(:attack_stamina_18)
      float_field(:attack_stamina_19)
      float_field(:attack_stamina_20)
      float_field(:attack_stamina_21)
      float_field(:attack_stamina_22)
      float_field(:attack_stamina_23)
      float_field(:attack_stamina_24)
      float_field(:attack_stamina_25)
    end

    view(:scaling) do
      float_field(:scaling_strength_0)
      float_field(:scaling_strength_1)
      float_field(:scaling_strength_2)
      float_field(:scaling_strength_3)
      float_field(:scaling_strength_4)
      float_field(:scaling_strength_5)
      float_field(:scaling_strength_6)
      float_field(:scaling_strength_7)
      float_field(:scaling_strength_8)
      float_field(:scaling_strength_9)
      float_field(:scaling_strength_10)
      float_field(:scaling_strength_11)
      float_field(:scaling_strength_12)
      float_field(:scaling_strength_13)
      float_field(:scaling_strength_14)
      float_field(:scaling_strength_15)
      float_field(:scaling_strength_16)
      float_field(:scaling_strength_17)
      float_field(:scaling_strength_18)
      float_field(:scaling_strength_19)
      float_field(:scaling_strength_20)
      float_field(:scaling_strength_21)
      float_field(:scaling_strength_22)
      float_field(:scaling_strength_23)
      float_field(:scaling_strength_24)
      float_field(:scaling_strength_25)
      float_field(:scaling_dexterity_0)
      float_field(:scaling_dexterity_1)
      float_field(:scaling_dexterity_2)
      float_field(:scaling_dexterity_3)
      float_field(:scaling_dexterity_4)
      float_field(:scaling_dexterity_5)
      float_field(:scaling_dexterity_6)
      float_field(:scaling_dexterity_7)
      float_field(:scaling_dexterity_8)
      float_field(:scaling_dexterity_9)
      float_field(:scaling_dexterity_10)
      float_field(:scaling_dexterity_11)
      float_field(:scaling_dexterity_12)
      float_field(:scaling_dexterity_13)
      float_field(:scaling_dexterity_14)
      float_field(:scaling_dexterity_15)
      float_field(:scaling_dexterity_16)
      float_field(:scaling_dexterity_17)
      float_field(:scaling_dexterity_18)
      float_field(:scaling_dexterity_19)
      float_field(:scaling_dexterity_20)
      float_field(:scaling_dexterity_21)
      float_field(:scaling_dexterity_22)
      float_field(:scaling_dexterity_23)
      float_field(:scaling_dexterity_24)
      float_field(:scaling_dexterity_25)
      float_field(:scaling_intelligence_0)
      float_field(:scaling_intelligence_1)
      float_field(:scaling_intelligence_2)
      float_field(:scaling_intelligence_3)
      float_field(:scaling_intelligence_4)
      float_field(:scaling_intelligence_5)
      float_field(:scaling_intelligence_6)
      float_field(:scaling_intelligence_7)
      float_field(:scaling_intelligence_8)
      float_field(:scaling_intelligence_9)
      float_field(:scaling_intelligence_10)
      float_field(:scaling_intelligence_11)
      float_field(:scaling_intelligence_12)
      float_field(:scaling_intelligence_13)
      float_field(:scaling_intelligence_14)
      float_field(:scaling_intelligence_15)
      float_field(:scaling_intelligence_16)
      float_field(:scaling_intelligence_17)
      float_field(:scaling_intelligence_18)
      float_field(:scaling_intelligence_19)
      float_field(:scaling_intelligence_20)
      float_field(:scaling_intelligence_21)
      float_field(:scaling_intelligence_22)
      float_field(:scaling_intelligence_23)
      float_field(:scaling_intelligence_24)
      float_field(:scaling_intelligence_25)
      float_field(:scaling_faith_0)
      float_field(:scaling_faith_1)
      float_field(:scaling_faith_2)
      float_field(:scaling_faith_3)
      float_field(:scaling_faith_4)
      float_field(:scaling_faith_5)
      float_field(:scaling_faith_6)
      float_field(:scaling_faith_7)
      float_field(:scaling_faith_8)
      float_field(:scaling_faith_9)
      float_field(:scaling_faith_10)
      float_field(:scaling_faith_11)
      float_field(:scaling_faith_12)
      float_field(:scaling_faith_13)
      float_field(:scaling_faith_14)
      float_field(:scaling_faith_15)
      float_field(:scaling_faith_16)
      float_field(:scaling_faith_17)
      float_field(:scaling_faith_18)
      float_field(:scaling_faith_19)
      float_field(:scaling_faith_20)
      float_field(:scaling_faith_21)
      float_field(:scaling_faith_22)
      float_field(:scaling_faith_23)
      float_field(:scaling_faith_24)
      float_field(:scaling_faith_25)
      float_field(:scaling_arcane_0)
      float_field(:scaling_arcane_1)
      float_field(:scaling_arcane_2)
      float_field(:scaling_arcane_3)
      float_field(:scaling_arcane_4)
      float_field(:scaling_arcane_5)
      float_field(:scaling_arcane_6)
      float_field(:scaling_arcane_7)
      float_field(:scaling_arcane_8)
      float_field(:scaling_arcane_9)
      float_field(:scaling_arcane_10)
      float_field(:scaling_arcane_11)
      float_field(:scaling_arcane_12)
      float_field(:scaling_arcane_13)
      float_field(:scaling_arcane_14)
      float_field(:scaling_arcane_15)
      float_field(:scaling_arcane_16)
      float_field(:scaling_arcane_17)
      float_field(:scaling_arcane_18)
      float_field(:scaling_arcane_19)
      float_field(:scaling_arcane_20)
      float_field(:scaling_arcane_21)
      float_field(:scaling_arcane_22)
      float_field(:scaling_arcane_23)
      float_field(:scaling_arcane_24)
      float_field(:scaling_arcane_25)
    end

    view(:passive) do
      # fields(
      #   # :passive_type_1,
      #   # :passive_type_2,
      # )
      nullable_field(:passive_scarlet_rot_0)
      nullable_field(:passive_madness_0)
      nullable_field(:passive_sleep_0)
      nullable_field(:passive_frost_0)
      nullable_field(:passive_poison_0)
      nullable_field(:passive_blood_loss_0)
      nullable_field(:passive_frost_1)
      nullable_field(:passive_poison_1)
      nullable_field(:passive_blood_loss_1)
      nullable_field(:passive_frost_2)
      nullable_field(:passive_poison_2)
      nullable_field(:passive_blood_loss_2)
      nullable_field(:passive_frost_3)
      nullable_field(:passive_poison_3)
      nullable_field(:passive_blood_loss_3)
      nullable_field(:passive_frost_4)
      nullable_field(:passive_poison_4)
      nullable_field(:passive_blood_loss_4)
      nullable_field(:passive_frost_5)
      nullable_field(:passive_poison_5)
      nullable_field(:passive_blood_loss_5)
      nullable_field(:passive_frost_6)
      nullable_field(:passive_poison_6)
      nullable_field(:passive_blood_loss_6)
      nullable_field(:passive_frost_7)
      nullable_field(:passive_poison_7)
      nullable_field(:passive_blood_loss_7)
      nullable_field(:passive_frost_8)
      nullable_field(:passive_poison_8)
      nullable_field(:passive_blood_loss_8)
      nullable_field(:passive_frost_9)
      nullable_field(:passive_poison_9)
      nullable_field(:passive_blood_loss_9)
      nullable_field(:passive_frost_10)
      nullable_field(:passive_poison_10)
      nullable_field(:passive_blood_loss_10)
      nullable_field(:passive_frost_11)
      nullable_field(:passive_poison_11)
      nullable_field(:passive_blood_loss_11)
      nullable_field(:passive_frost_12)
      nullable_field(:passive_poison_12)
      nullable_field(:passive_blood_loss_12)
      nullable_field(:passive_frost_13)
      nullable_field(:passive_poison_13)
      nullable_field(:passive_blood_loss_13)
      nullable_field(:passive_frost_14)
      nullable_field(:passive_poison_14)
      nullable_field(:passive_blood_loss_14)
      nullable_field(:passive_frost_15)
      nullable_field(:passive_poison_15)
      nullable_field(:passive_blood_loss_15)
      nullable_field(:passive_frost_16)
      nullable_field(:passive_poison_16)
      nullable_field(:passive_blood_loss_16)
      nullable_field(:passive_frost_17)
      nullable_field(:passive_poison_17)
      nullable_field(:passive_blood_loss_17)
      nullable_field(:passive_frost_18)
      nullable_field(:passive_poison_18)
      nullable_field(:passive_blood_loss_18)
      nullable_field(:passive_frost_19)
      nullable_field(:passive_poison_19)
      nullable_field(:passive_blood_loss_19)
      nullable_field(:passive_frost_20)
      nullable_field(:passive_poison_20)
      nullable_field(:passive_blood_loss_20)
      nullable_field(:passive_frost_21)
      nullable_field(:passive_poison_21)
      nullable_field(:passive_blood_loss_21)
      nullable_field(:passive_frost_22)
      nullable_field(:passive_poison_22)
      nullable_field(:passive_blood_loss_22)
      nullable_field(:passive_frost_23)
      nullable_field(:passive_poison_23)
      nullable_field(:passive_blood_loss_23)
      nullable_field(:passive_frost_24)
      nullable_field(:passive_poison_24)
      nullable_field(:passive_blood_loss_24)
      nullable_field(:passive_frost_25)
      nullable_field(:passive_poison_25)
      nullable_field(:passive_blood_loss_25)
    end


  end
end
