module Api
  # Starting Classes
  class StartingClassesController < ApiController

    # Returns information about all starting classes.
    #
    # @route /api/starting-classes/
    # @action GET
    # @response 200 Ok
    def index()
      records = StartingClass.includes(:r1, :r2, :l1, :l2, :head, :chest, :arms, :legs, :spell_1, :spell_2).all()
      data = Serializers::StartingClassSerializer.render_as_json(records)
      render_json(data)
    end

  end
end
