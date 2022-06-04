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
        # refute_nil(entity.display_name)
        refute_nil(data["display_name"])
      end

    end
  end
end
