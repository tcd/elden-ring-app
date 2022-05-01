require "test_helper"

module Test
  module Models
    class EquipmentEffectTest < ActiveSupport::TestCase

      setup do
        @model         = EquipmentEffect
        @initial_count = @model.count()
      end

      test "that there are fixtures" do
        assert(@initial_count > 0)
      end

      test "#display_name" do
        entity = equipment_effects(:Crimson_Amber_Medallion_plus_2_effect)
        refute_nil(entity.display_name)
        assert_equal("Increase HP by 7.5%", entity.display_name)
      end

    end
  end
end
