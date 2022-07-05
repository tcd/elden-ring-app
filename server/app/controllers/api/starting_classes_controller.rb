module Api
  # Starting Classes
  class StartingClassesController < ApiController

    # Returns information about all starting classes.
    #
    # @route /api/starting-classes/
    # @action GET
    # @response 200 Ok
    def index()
      records = StartingClass.with_includes().order_by_sort_order()
      data = Serializers::StartingClassSerializer.render_as_json(records)
      render_json(data)
    end

  end
end
