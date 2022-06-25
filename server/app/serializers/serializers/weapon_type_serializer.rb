module Serializers
  class WeaponTypeSerializer < BaseSerializer

    fields(
      :name,
      # :image_url,
      :plural_name,
      # :is_shield,
    )

  end
end
