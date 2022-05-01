class IndexController < ApplicationController

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

  # @response 404 Not Found
  def route_not_found()
    head(404)
  end

end
