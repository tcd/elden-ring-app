module Api
  # Weapon Skills
  class WeaponSkillsController < ApiController

    # Returns information about all WeaponSkills
    #
    # @route /api/weapon-skills/
    # @action GET
    # @response 200 Ok
    def index()
      records = WeaponSkill.includes(:compatible_weapon_affinities, :compatible_weapon_types).order(name: :asc)
      data = Serializers::WeaponSkillSerializer.render_as_json(records, view: :with_compatibility)
      render_json(data)
    end

  end
end
