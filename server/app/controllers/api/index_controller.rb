module Api
  class IndexController < ApiController

    # @response 200 Ok
    def index()
      response = {
        version:    EldenRing::Application::VERSION,
        environment: Rails.env,
      }
      render_json(response)
    end

  end
end
