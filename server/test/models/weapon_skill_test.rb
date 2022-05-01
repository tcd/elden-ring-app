require "test_helper"

module Test
  module Models
    class WeaponSkillTest < ActiveSupport::TestCase

      setup do
        @model         = WeaponSkill
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
        skip()
        x = @model.first()
        valid = x.valid?
        assert(valid)
      end

    end
  end
end
