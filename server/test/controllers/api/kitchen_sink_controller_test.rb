require "test_helper"

module Tests
  module Controllers
    module Api
      class KitchenSinkControllerTest < ActionDispatch::IntegrationTest

        test "#index" do
          get("/api/kitchen-sink", headers: @headers)
          assert_equal(200, response.status)
        end

      end
    end
  end
end
