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
      view    = :default
      if include_stats?()
        view = :with_stats
        records = Weapon.with_all_includes().order_by_sort_order()
      else
        records = Weapon.with_type_and_skill_includes().order_by_sort_order()
      end
      data = Serializers::WeaponSerializer.render_as_json(records, view: view)
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
