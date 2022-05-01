class WeaponType < ApplicationRecord

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute singular_name
  #   @return [String]
  validates(:singular_name, presence: true)

  # @!attribute plural_name
  #   @return [String]
  validates(:plural_name, presence: true)

  # @!attribute is_shield
  #   @return [Boolean]

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
    return "/public/images/weapon-types/#{self.singular_name}.png"
  end

end
