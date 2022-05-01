module Serializers
  class EquipmentEffectSerializer < BaseSerializer

    fields(
      :effect_type,
      :effect_method,
      :affected_stat,
    )

    field(:value) { |x| x.value&.to_f }

  end
end
