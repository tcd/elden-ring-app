class WeaponStat < ApplicationRecord
  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapon
  #   @return [Weapon]
  belongs_to(:weapon)

  # @!attribute weapon_affinity
  #   @return [WeaponAffinity]
  belongs_to(:weapon_affinity)

  # @!attribute attack_element_correct_param
  #   @return [AttackElementCorrectParam]
  belongs_to(:attack_element_correct_param)

  # @!endgroup Associations
end
