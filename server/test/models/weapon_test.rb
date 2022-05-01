require "test_helper"

module Test
  module Models
    class WeaponTest < ActiveSupport::TestCase

      setup do
        @model         = Weapon
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
        # @type [Weapon]
        claymore = weapons(:claymore)
        claymore.physical_damage_types = ["not valid"]
        refute(claymore.valid?)
        claymore.physical_damage_types = [
          "Standard",
          "Strike",
          "Slash",
          "Pierce",
          "None",
        ]
        assert(claymore.valid?)
      end

    end
  end
end
