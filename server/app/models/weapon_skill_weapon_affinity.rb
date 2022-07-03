# What weapon affinities can be applied by specific weapon skills.
class WeaponSkillWeaponAffinity < ApplicationRecord

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapon_skill
  #   @return [WeaponSkill]
  belongs_to(:weapon_skill)

  # @!attribute weapon_affinity
  #   @return [WeaponAffinity]
  belongs_to(:weapon_affinity)

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    return self.id.to_s()
  end

end
