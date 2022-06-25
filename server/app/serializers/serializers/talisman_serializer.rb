module Serializers
  class TalismanSerializer < BaseSerializer

    fields(
      :name,
      # :image_url,
      :description,
      :long_description,
      :restricts,
      # :effects,
      :sort_group,
    )

    field(:weight) { |x| x.weight&.to_f }

    association(:equipment_effects, name: :effects, blueprint: EquipmentEffectSerializer)

  end
end
