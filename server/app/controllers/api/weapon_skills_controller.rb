module Api
  # Weapon Skills
  class WeaponSkillsController < ApiController

    # Returns information about all WeaponSkills
    #
    # @route /api/weapon-skills/
    # @action GET
    # @response 200 Ok
    def index()
      records = WeaponSkill.with_includes().order_by_name()
      data = Serializers::WeaponSkillSerializer.render_as_json(records, view: :with_compatibility)
      render_json(data)
    end

  end
end
