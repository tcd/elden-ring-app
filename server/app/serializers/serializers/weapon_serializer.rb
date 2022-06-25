module Serializers
  class WeaponSerializer < BaseSerializer

    fields(
      :name,
      # :image_url,
      :is_shield,
      :is_special,
      :physical_damage_types,
      # :sorcery_scaling,
      # :incantation_scaling,
      :weapon_type_id,
      :weapon_skill_id,
    )

    field(:weapon_type) { |x| x.weapon_type.display_name }
    field(:weight) { |x| x.weight&.to_f }

    fields(
      :required_strength,
      :required_dexterity,
      :required_intelligence,
      :required_faith,
      :required_arcane,
    )

    field(:defense_physical)    { |x| x.defense_physical&.to_f    || 0.0 }
    field(:defense_magic)       { |x| x.defense_magic&.to_f       || 0.0 }
    field(:defense_fire)        { |x| x.defense_fire&.to_f        || 0.0 }
    field(:defense_lightning)   { |x| x.defense_lightning&.to_f   || 0.0 }
    field(:defense_holy)        { |x| x.defense_holy&.to_f        || 0.0 }
    field(:defense_guard_boost) { |x| x.defense_guard_boost&.to_f || 0.0 }

    association(:weapon_skill, blueprint: WeaponSkillSerializer)
    # association(:effects, blueprint: EquipmentEffectSerializer)

    view(:with_stats) do
      association(:weapon_stats, name: :stats, blueprint: WeaponStatSerializer, view: :default)
    end

  end
end
