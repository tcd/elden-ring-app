class WeaponType < ApplicationRecord

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

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
  def display_name()
    return self.name
  end

  # @return [Integer]
  def sort_order()
    return self.id
  end

  # @return [String]
  def image_url()
    return "/public/images/weapon-types/#{self.name}.png"
  end

end
