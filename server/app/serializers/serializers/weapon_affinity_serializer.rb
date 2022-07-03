module Serializers
  class WeaponAffinitySerializer < BaseSerializer

    fields(
      :name,
      :sort_order,
      # :image_url,
    )

  end
end
