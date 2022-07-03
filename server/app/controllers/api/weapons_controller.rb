module Api
  # Weapons
  class WeaponsController < ApiController

    # Returns information about all weapons
    #
    # @route /api/weapons/
    # @action GET
    # @query_param include-stats [Boolean] If `true`, associated `WeaponStat` entities will be included in the response.
    # @response 200 Ok
    def index()
      records = nil
      data    = nil
      if include_stats?()
        records = Weapon.includes(:weapon_type, :weapon_skill, :weapon_stats).all()
        data = Serializers::WeaponSerializer.render_as_json(records, view: :with_stats)
      else
        records = Weapon.includes(:weapon_type, :weapon_skill).all()
        data = Serializers::WeaponSerializer.render_as_json(records)
      end
      render_json(data)
    end

    private

    def include_stats?()
      return params["include-stats"] == "true"
    rescue ActionController::ParameterMissing => error
      return false
    end

  end
end
