module Api
  # Everything
  class KitchenSinkController < ApiController
    prepend Lib::Helpers::Cacheable

    caches_action(:index, layout: false)

    # Returns information about everything
    #
    # @route /api/kitchen-sink/
    # @action GET
    # @response 200 Ok
    def index()
      data = Services::KitchenSinkService.instance.result
      render_json(data)
    end

  end
end
