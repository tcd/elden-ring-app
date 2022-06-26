module Serializers
  class WeaponSkillSerializer < BaseSerializer

    fields(
      :name,
      :description,
      :ash_of_war,
      :is_chargeable,
      :sort_group,
      :sort_order,
      :metadata,
    )

    field(:default_affinity) { |x| x&.default_affinity&.name || nil }

    field(:compatible_affinities) { |x| x&.compatible_weapon_affinities&.collect(&:name) || [] }
    field(:compatible_types)      { |x| x&.compatible_weapon_types&.collect(&:name)      || [] }

  end
end
