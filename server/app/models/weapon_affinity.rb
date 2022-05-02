class WeaponAffinity < ApplicationRecord
  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!endgroup Attributes

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return "/public/images/weapon-affinities/#{self.name}.png"
  end
end
