class ApplicationController < ActionController::API

  def not_found()
    response = {
      status: 404,
      message: "not found",
    }
    render(json: response, status: :not_found)
  end

end
