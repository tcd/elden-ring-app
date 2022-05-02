module Api
  # Weapons
  class WeaponsController < ApiController

    # Returns information about all weapons
    #
    # @route /api/weapons/
    # @action GET
    # @response 200 Ok
    def index()
      records = Weapon.includes(:weapon_type, :weapon_skill).all()
      data = Serializers::WeaponSerializer.render_as_json(records)
      render_json(data)
    end

  end
end
