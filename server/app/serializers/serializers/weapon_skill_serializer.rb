module Serializers
  class WeaponSkillSerializer < BaseSerializer

    fields(
      :name,
      # :image_url,
      :description,
      :ash_of_war,
      :is_chargeable,
      # :can_be_applied_to,
      :metadata,
    )

    field(:compatible_affinities) { |x| x&.compatible_weapon_affinities&.collect(&:name) || [] }
    field(:compatible_types)      { |x| x&.compatible_weapon_types&.collect(&:name)      || [] }

  end
end
