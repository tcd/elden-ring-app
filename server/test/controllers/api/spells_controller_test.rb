require "test_helper"

module Tests
  module Controllers
    module Api
      class SpellsControllerTest < ActionDispatch::IntegrationTest

        test "#index" do
          get("/api/spells", headers: @headers)
          assert_equal(200, response.status)
        end

      end
    end
  end
end
