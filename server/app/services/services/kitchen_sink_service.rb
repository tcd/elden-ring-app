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
      @@armor                         = Armor.with_includes().order_by_sort_order()
      @@spells                        = Spell.all().order_by_name()
      @@talismans                     = Talisman.with_effects().order_by_sort_order()
      @@weapons                       = Weapon.with_all_includes().order_by_sort_order()
      @@weapon_skills                 = WeaponSkill.with_includes().order_by_name()
      @@weapon_types                  = WeaponType.order_by_sort_order()
      @@attack_element_correct_params = AttackElementCorrectParam.all()

      @@result = {
        armor:                         Serializers::ArmorSerializer.render_as_json(@@armor),
        spells:                        Serializers::SpellSerializer.render_as_json(@@spells),
        talismans:                     Serializers::TalismanSerializer.render_as_json(@@talismans),
        weapons:                       Serializers::WeaponSerializer.render_as_json(@@weapons, view: :with_stats),
        weapon_skills:                 Serializers::WeaponSkillSerializer.render_as_json(@@weapon_skills, view: :with_compatibility),
        weapon_types:                  Serializers::WeaponTypeSerializer.render_as_json(@@weapon_types),
        attack_element_correct_params: @@attack_element_correct_params,
      }
    end

    def result()
      return @@result
    end

  end
end
