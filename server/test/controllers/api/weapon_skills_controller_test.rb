require "test_helper"

module Tests
  module Controllers
    module Api
      class WeaponSkillsControllerTest < ActionDispatch::IntegrationTest

        test "#index" do
          get("/api/weapon-skills", headers: @headers)
          assert_equal(200, response.status)
        end

      end
    end
  end
end
