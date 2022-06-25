module Serializers
  class WeaponSkillSerializer < BaseSerializer

    fields(
      :name,
      :image_url,
      :description,
      :ash_of_war,
      :is_chargeable,
      :can_be_applied_to,
      :metadata,
    )

  end
end
