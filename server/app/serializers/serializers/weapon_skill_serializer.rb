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

    view(:with_compatibility) do
      field(:compatible_weapon_affinities) { |x| x.compatible_weapon_affinity_names }
      field(:compatible_weapon_types)      { |x| x.compatible_weapon_type_names }
    end
  end
end
