require "singleton"

module Services
  class KitchenSinkService

    include Singleton

    @@armor = nil
    @@spells = nil
    @@talismans = nil
    @@weapons = nil
    @@weapon_skills = nil
    @@weapon_types = nil
    @@attack_element_correct_params = nil

    @@result = nil

    def initialize()
      @@armor                         = Armor.includes(:armor_type).all().order(name: :asc)
      @@spells                        = Spell.all().order(name: :asc)
      @@talismans                     = Talisman.includes(:equipment_effects).all()
      @@weapons                       = Weapon.includes(:weapon_type, :weapon_skill, :weapon_stats).all().order(name: :asc)
      @@weapon_skills                 = WeaponSkill.all().order(name: :asc)
      @@weapon_types                  = WeaponType.all()
      @@attack_element_correct_params = AttackElementCorrectParam.all()

      @@result = {
        armor:                         Serializers::ArmorSerializer.render_as_json(@@armor),
        spells:                        Serializers::SpellSerializer.render_as_json(@@spells),
        talismans:                     Serializers::TalismanSerializer.render_as_json(@@talismans),
        weapons:                       Serializers::WeaponSerializer.render_as_json(@@weapons, view: :with_stats),
        weapon_skills:                 Serializers::WeaponSkillSerializer.render_as_json(@@weapon_skills),
        weapon_types:                  Serializers::WeaponTypeSerializer.render_as_json(@@weapon_types),
        attack_element_correct_params: @@attack_element_correct_params,
      }
    end

    def result()
      return @@result
    end

  end
end
