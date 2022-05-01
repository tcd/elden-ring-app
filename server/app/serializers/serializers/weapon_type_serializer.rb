module Serializers
  class WeaponTypeSerializer < BaseSerializer

    fields(
      :name,
      :image_url,
      :singular_name,
      :plural_name,
      :is_shield,
    )

  end
end
