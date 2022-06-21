module Models
  module Transient
    # All data needed by the application.
    class KitchenSink

      # ========================================================================
      # Attributes
      # ========================================================================

      # @!group Attributes

      # @!attribute armor
      #   @return [Array<Armor>]
      attr_accessor :armor

      # @!attribute spells
      #   @return [Array<Spell>]
      attr_accessor :spells

      # @!attribute talismans
      #   @return [Array<Talisman>]
      attr_accessor :talismans

      # @!attribute weapons
      #   @return [Array<Weapon>]
      attr_accessor :weapons

      # @!attribute weapon_skills
      #   @return [Array<WeaponSkill>]
      attr_accessor :weapon_skills

      # @!attribute weapon_types
      #   @return [Array<WeaponType>]
      attr_accessor :weapon_types

      # @!attribute attack_element_correct_params
      #   @return [Array<AttackElementCorrectParam>]
      attr_accessor :attack_element_correct_params

      # @!endgroup Attributes

      # ========================================================================
      # Class Methods
      # ========================================================================

      # @return [void]
      def initialize()

        self.armor                         = Armor.includes(:armor_type).all().order(name: :asc)
        self.spells                        = Spell.all().order(name: :asc)
        self.talismans                     = Talisman.includes(:equipment_effects).all()
        self.weapons                       = Weapon.includes(:weapon_type, :weapon_skill, :weapon_stats).all().order(name: :asc)
        self.weapon_skills                 = WeaponSkill.all().order(name: :asc)
        self.weapon_types                  = WeaponType.all()
        self.attack_element_correct_params = AttackElementCorrectParam.all()

      end

      # @return [KitchenSink]
      def self.create()
        return self.new().as_json()
      end

      # ========================================================================
      # Instance Methods
      # ========================================================================

      # @return [Hash]
      def as_json()
        return {
          armor:                         Serializers::ArmorSerializer.render_as_json(self.armor),
          spells:                        Serializers::SpellSerializer.render_as_json(self.spells),
          talismans:                     Serializers::TalismanSerializer.render_as_json(self.talismans),
          weapons:                       Serializers::WeaponSerializer.render_as_json(self.weapons, view: :with_stats),
          weapon_skills:                 Serializers::WeaponSkillSerializer.render_as_json(self.weapon_skills),
          weapon_types:                  Serializers::WeaponTypeSerializer.render_as_json(self.weapon_types),
          attack_element_correct_params: self.attack_element_correct_params,
        }
      end

    end
  end
end
