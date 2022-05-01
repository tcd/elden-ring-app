module Api
  # Talismans
  class TalismansController < ApiController

    # Returns information about all talismans.
    #
    # @route /api/talismans/
    # @action GET
    # @response 200 Ok
    def index()
      records = Talisman.includes(:equipment_effects).all().order(name: :asc)
      data = Serializers::TalismanSerializer.render_as_json(records)
      render_json(data)
    end

  end
end
