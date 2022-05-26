require "test_helper"

module Test
  module Models
    class WeaponStatTest < ActiveSupport::TestCase

      setup do
        @model         = WeaponStat
        @initial_count = @model.count()
      end

      test "that there are fixtures" do
        assert(@initial_count > 0)
      end

      test "#display_name" do
        entity = @model.first()
        refute_nil(entity.display_name)
      end

    end
  end
end
