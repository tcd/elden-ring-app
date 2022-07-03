module Api
  # Weapon Stats
  class WeaponStatsController < ApiController

    # Returns information about all WeaponSkills
    #
    # @route /api/weapon-skills/
    # @action GET
    # @query_param slim [Boolean]
    # @response 200 Ok
    def index()
      view = slim?() ? :slim : :default
      records = WeaponStat.includes(:weapon, :weapon_affinity)
      data = Serializers::WeaponStatSerializer.render_as_json(records, view: view)
      render_json(data)
    end

    def slim?()
      return params["slim"] == "true"
    rescue ActionController::ParameterMissing => error
      return false
    end

  end
end
