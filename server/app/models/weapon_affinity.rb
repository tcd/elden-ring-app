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

  # @!attribute weapon_stats
  #   @return [Array<WeaponStat>]
  has_many(:weapon_stats, class_name: "WeaponStat")

  # @!attribute default_skills
  #   @return [Array<WeaponSkill>]
  has_many(:default_skills, class_name: "WeaponSkill", inverse_of: :default_affinity)

  # @!attribute weapon_skill_weapon_affinities
  #   @return [Array<WeaponSkillWeaponAffinity>]
  has_many(:weapon_skill_weapon_affinities, inverse_of: :weapon_affinity)

  # @!attribute compatible_skills
  #   @return [Array<WeaponSkill>]
  has_many(
    :compatible_skills,
    through: :weapon_skill_weapon_affinities,
    source: :weapon_skill,
    class_name: "WeaponSkill",
  )

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Affinities/#{self.name}/public"
  end
end
