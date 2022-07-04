module Api
  class IndexController < ApiController

    # @response 200 Ok
    def index()
      render(
        status: 200,
        json: {
          version: EldenRing::Application::VERSION,
          environment: Rails.env,
        },
      )
    end

  end
end
