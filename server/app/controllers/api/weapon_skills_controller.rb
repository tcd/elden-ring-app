module Api
  # Weapon Skills
  class WeaponSkillsController < ApiController

    # Returns information about all WeaponSkills
    #
    # @route /api/weapon-skills/
    # @action GET
    # @response 200 Ok
    def index()
      records = WeaponSkill.all().order(name: :asc)
      data = Serializers::WeaponSkillSerializer.render_as_json(records)
      render_json(data)
    end

  end
end
