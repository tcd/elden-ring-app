require "test_helper"

module Test
  module Serializers
    class EquipmentEffectTest < ActiveSupport::TestCase

      setup do
        @model      = EquipmentEffect
        @serializer = ::Serializers::EquipmentEffectSerializer
      end

      test ".render_as_json" do
        entity = @model.first()
        data = @serializer.render_as_json(entity)
        refute_nil(entity.effect_type)
        refute_nil(entity.effect_method)
        refute_nil(entity.affected_stat)
        refute_nil(entity.value)
        refute_nil(data["effect_type"])
        refute_nil(data["effect_method"])
        refute_nil(data["affected_stat"])
        refute_nil(data["value"])
      end

    end
  end
end
