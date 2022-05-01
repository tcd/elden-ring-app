module Api
  # Spells
  class SpellsController < ApiController

    # Returns information about all spells.
    #
    # @route /api/spells/
    # @action GET
    # @response 200 Ok
    def index()
      records = Spell.all()
      data = Serializers::SpellSerializer.render_as_json(records)
      render_json(data)
    end

  end
end
