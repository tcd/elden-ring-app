module Api
  # Everything
  class KitchenSinkController < ApiController
    prepend Lib::Helpers::Cacheable

    caches_action(:index, layout: false)

    # Returns information about everything
    #
    # @route /api/kitchen-sink/
    # @action GET
    # @response 200 Ok
    def index()
      @data = Models::Transient::KitchenSink.create()
      # armor         = Armor.includes(:armor_type).all().order(name: :asc)
      # spells        = Spell.all().order(name: :asc)
      # talismans     = Talisman.includes(:equipment_effects).all()
      # weapons       = Weapon.includes(:weapon_type, :weapon_skill).all().order(name: :asc)
      # weapon_skills = WeaponSkill.all().order(name: :asc)
      # weapon_types  = WeaponType.all()
      # aec_params    = AttackElementCorrectParam.all()

      # data = {
      #   armor:         Serializers::ArmorSerializer.render_as_json(armor),
      #   spells:        Serializers::SpellSerializer.render_as_json(spells),
      #   talismans:     Serializers::TalismanSerializer.render_as_json(talismans),
      #   weapons:       Serializers::WeaponSerializer.render_as_json(weapons),
      #   weapon_skills: Serializers::WeaponSkillSerializer.render_as_json(weapon_skills),
      #   weapon_types:  Serializers::WeaponTypeSerializer.render_as_json(weapon_types),
      #   attack_element_correct_params: aec_params,
      # }

      render_json(@data)
    end

  end
end
