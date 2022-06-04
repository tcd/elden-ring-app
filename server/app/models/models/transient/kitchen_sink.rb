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

      # @!attribute spells
      #   @return [Array<Spell>]

      # @!attribute talismans
      #   @return [Array<Talisman>]

      # @!attribute weapons
      #   @return [Array<Weapon>]

      # @!attribute weapon_skills
      #   @return [Array<WeaponSkill>]

      # @!attribute weapon_types
      #   @return [Array<WeaponType>]

      # @!endgroup Attributes

      # ========================================================================
      # Class Methods
      # ========================================================================

      # @return [void]
      def initialize()

        self.armor =
          Armor
            .includes(:armor_type)
            .all()
            .order(name: :asc)

        self.spells =
          Spell
            .all()
            .order(name: :asc)

        self.talismans =
          Talisman
            .includes(:equipment_effects)
            .all()

        self.weapons =
          Weapon
            .includes(:weapon_type, :weapon_skill)
            .all()
            .order(name: :asc)

        self.weapon_skills =
          WeaponSkill
            .all()
            .order(name: :asc)

        self.weapon_types =
          WeaponType
            .all()

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
          armor:         Serializers::ArmorSerializer.render_as_json(self.armor),
          spells:        Serializers::SpellSerializer.render_as_json(self.spells),
          talismans:     Serializers::TalismanSerializer.render_as_json(self.talismans),
          weapons:       Serializers::WeaponSerializer.render_as_json(self.weapons),
          weapon_skills: Serializers::WeaponSkillSerializer.render_as_json(self.weapon_skills),
          weapon_types:  Serializers::WeaponTypeSerializer.render_as_json(self.weapon_types),
        }
      end

    end
  end
end
