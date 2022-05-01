require "test_helper"

module Test
  module Models
    class TalismanTest < ActiveSupport::TestCase

      setup do
        @model         = Talisman
        @initial_count = @model.count()
      end

      test "that there are fixtures" do
        assert(@initial_count > 0)
      end

      test "#display_name" do
        entity = @model.first()
        refute_nil(entity.display_name)
      end

      test "validation" do
        x = @model.first()
        valid = x.valid?
        assert(valid)
      end

      test "nested equipment_effect" do
        initial_count = EquipmentEffect.count
        attributes = {
          name: "Clay's Talisman",
          description: "Example for a test",
          weight: 69.0,
          equipment_effects_attributes: [
            {
              effect_method: "percentage",
              effect_type: "increase",
              affected_stat: "HP",
              value: 0.33,
            }
          ]
        }
        assert_nothing_raised do
          x = @model.create!(attributes)
        end
        new_count = EquipmentEffect.count
        assert_equal(new_count, (initial_count + 1))
      end

    end
  end
end
