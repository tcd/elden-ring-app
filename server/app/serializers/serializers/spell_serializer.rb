module Serializers
  class SpellSerializer < BaseSerializer

    fields(
      :name,
      # :image_url,
      :spell_type,
      :description,
      :slots_required,
      :stamina_cost,
      :fp_cost,
      # :fp_cost_alt,
      # :fp_cost_alt_description,
      :bonus_category,
    )

    fields(
      :required_intelligence,
      :required_faith,
      :required_arcane,
    )
    fields(
      :is_chargeable,
      :is_usable_on_horse,
      :is_usable_while_jumping,
    )
    # fields(
    #   :damage_blood_loss,
    #   :damage_frost,
    #   :damage_madness,
    #   :damage_poison,
    #   :damage_sleep,
    #   :damage_death_blight,
    #   :damage_scarlet_rot,
    # )
    fields(
      :inflicts_physical,
      :inflicts_magic,
      :inflicts_fire,
      :inflicts_lightning,
      :inflicts_holy,
      :inflicts_blood_loss,
      :inflicts_frost,
      :inflicts_madness,
      :inflicts_poison,
      :inflicts_sleep,
      :inflicts_death_blight,
      :inflicts_scarlet_rot,
    )

  end
end
