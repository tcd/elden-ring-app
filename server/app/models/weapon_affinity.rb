class WeaponAffinity < ApplicationRecord
  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute sort_order
  #   @return [String]
  validates(:sort_order, presence: true, uniqueness: true)

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # # @!attribute compatible_weapons_skills
  # #   @return [Array<WeaponSkill>]
  # has_many(:compatible_weapon_skills)

  # @!attribute weapon_attack_stats
  #   @return [Array<WeaponAttackStat>]
  has_many(
    :weapon_attack_stats,
    class_name: "WeaponAttackStat",
  )

  # @!attribute weapon_scaling_stats
  #   @return [Array<WeaponScalingStat>]
  has_many(
    :weapon_scaling_stats,
    class_name: "WeaponScalingStat",
  )

  # @!attribute weapon_with_affinities
  #   @return [Array<WeaponWithAffinity>]
  has_many(
    :weapon_with_affinities,
    class_name: "WeaponWithAffinity",
  )

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

  # @return [String]
  def image_url()
    return "/public/images/weapon-affinities/#{self.name}.png"
  end
end
