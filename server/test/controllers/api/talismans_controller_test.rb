require "test_helper"

module Tests
  module Controllers
    module Api
      class TalismansControllerTest < ActionDispatch::IntegrationTest

        test "#index" do
          get("/api/talismans", headers: @headers)
          assert_equal(200, response.status)
        end

      end
    end
  end
end
