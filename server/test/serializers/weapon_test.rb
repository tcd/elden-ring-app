require "test_helper"

module Test
  module Serializers
    class WeaponTest < ActiveSupport::TestCase

      setup do
        @model      = Weapon
        @serializer = ::Serializers::WeaponSerializer
      end

      test ".render_as_json" do
        entity = @model.first()
        data = @serializer.render_as_json(entity)
        refute_nil(entity.name)
        refute_nil(data["name"])
      end

    end
  end
end
