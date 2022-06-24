# Affinities in Elden Ring determine the following Weapon properties:
#
# - attribute scaling
# - attack power
# - guard boost
# - guarded damage negation
# - passive damage
class WeaponAffinity < ApplicationRecord
  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute sort_order
  #   @return [Integer]
  validates(:sort_order, presence: true, uniqueness: true)

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # # @!attribute compatible_weapons_skills
  # #   @return [Array<WeaponSkill>]
  # has_many(:compatible_weapon_skills)

  # @!attribute weapon_stats
  #   @return [Array<WeaponStat>]
  has_many(
    :weapon_stats,
    class_name: "WeaponStat",
  )

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [Integer]
  def display_order()
    return "/public/images/weapon-affinities/#{self.name}.png"
  end

  # @return [String]
  def image_url()
    return "/public/images/weapon-affinities/#{self.name}.png"
  end
end
