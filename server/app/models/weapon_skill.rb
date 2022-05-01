class WeaponSkill < ApplicationRecord

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute name
  #   @return [String]
  validates(:description, presence: true)

  # @!attribute ash_of_war
  #   @return [Boolean]

  # @!attribute is_chargeable
  #   @return [Boolean]

  # @!attribute can_be_applied_to
  #   @return [Array<String>]

  # ============================================================================
  # TODO: add these fields
  # ============================================================================
  #
  # - fp cost
  # - lasting effects
  # - damage type

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapons
  #   @return [Array<Weapon>]
  has_many(:weapons)

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return "/public/images/weapon-skills/#{self.name}.png"
  end

end
