module Serializers
  class ArmorSerializer < BaseSerializer

    include SerializerHelpers

    fields(
      :name,
      # :image_url,
      # :is_altered,
      :sort_group,
      :poise,
      :immunity,
      :robustness,
      :focus,
      :vitality,
      # :effects,
    )

    field(:armor_type) { |x| x.armor_type.display_name }

    float_field(:weight)

    float_field(:physical)
    float_field(:vs_strike)
    float_field(:vs_slash)
    float_field(:vs_pierce)
    float_field(:magic)
    float_field(:fire)
    float_field(:lightning)
    float_field(:holy)

    # association(:effects, blueprint: EquipmentEffectSerializer)
  end
end
