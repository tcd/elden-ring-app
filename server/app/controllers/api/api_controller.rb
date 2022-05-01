module Api
  # @abstract
  class ApiController < ActionController::API

    # @param object [Hash]
    # @param status [Integer,Symbol]
    # @return [void]
    def render_json(object, status = 200)
      render(json: object, status: status)
    end

  end
end
