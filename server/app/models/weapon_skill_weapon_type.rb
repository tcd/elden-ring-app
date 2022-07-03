class WeaponSkillWeaponType < ApplicationRecord

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapon_skill
  #   @return [WeaponSkill]
  belongs_to(:weapon_skill)

  # @!attribute weapon_type
  #   @return [WeaponType]
  belongs_to(:weapon_type)

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    return self.id.to_s()
  end

end
