module Api
  # Armor
  class ArmorController < ApiController

    # Returns information about all armor
    #
    # @route /api/armor/
    # @action GET
    # @response 200 Ok
    def index()
      armor = Armor.includes(:armor_type).all()
      data = Serializers::ArmorSerializer.render_as_json(armor)
      render_json(data)
    end

  end
end
