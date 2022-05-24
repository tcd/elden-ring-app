class WeaponAttackStat < ApplicationRecord

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

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

end
