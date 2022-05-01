module Serializers
  class ArmorSerializer < BaseSerializer

    fields(
      :name,
      :image_url,
      :is_altered,
      :poise,
      :immunity,
      :robustness,
      :focus,
      :vitality,
      :effects,
    )

    field(:armor_type) { |x| x.armor_type.display_name }

    field(:weight) { |x| x.weight&.to_f }

    field(:physical)  { |x| x.physical&.to_f  || 0.0 }
    field(:vs_strike) { |x| x.vs_strike&.to_f || 0.0 }
    field(:vs_slash)  { |x| x.vs_slash&.to_f  || 0.0 }
    field(:vs_pierce) { |x| x.vs_pierce&.to_f || 0.0 }
    field(:magic)     { |x| x.magic&.to_f     || 0.0 }
    field(:fire)      { |x| x.fire&.to_f      || 0.0 }
    field(:lightning) { |x| x.lightning&.to_f || 0.0 }
    field(:holy)      { |x| x.holy&.to_f      || 0.0 }

    # association(:effects, blueprint: EquipmentEffectSerializer)
  end
end
