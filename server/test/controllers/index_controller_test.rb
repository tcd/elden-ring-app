require "test_helper"

module Tests
  module Controllers
    # See:
    #
    # - [`ActionDispatch::Assertions::ResponseAssertions`](https://api.rubyonrails.org/v6.0.0/classes/ActionDispatch/Assertions/ResponseAssertions.html)
    # - [Changes to test controllers in Rails 5](https://blog.bigbinary.com/2016/04/19/changes-to-test-controllers-in-rails-5.html)
    class IndexControllerTest < ActionDispatch::IntegrationTest

      test "#index" do
        get("/", headers: @headers)
        assert_equal(200, response.status)
        assert_equal(EldenRing::Application::VERSION, json_response_body["version"])
        assert_equal("test", json_response_body["environment"])
      end

    end
  end
end
