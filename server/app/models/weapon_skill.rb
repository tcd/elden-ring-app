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
  # validates(:ash_of_war, inclusion: { in: [ true, false ] })

  # @!attribute is_chargeable
  #   @return [Boolean]

  # @!attribute can_be_applied_to
  #   @return [Array<String>]

  # TODO: add these fields
  #
  # - fp cost
  # - lasting effects
  # - damage type
  # - affinity
  # - compatible_affinities

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapons
  #   @return [Array<Weapon>]
  has_many(:weapons)

  # @!attribute weapon_skill_weapon_affinities
  #   @return [Array<WeaponSkillWeaponAffinity>]
  has_many(:weapon_skill_weapon_affinities)

  # @!attribute compatible_skills
  #   @return [Array<WeaponSkill>]
  has_many(
    :compatible_skills,
    through: :weapon_skill_weapon_affinities,
    class_name: "WeaponSkill",
  )

  # @!endgroup Associations

  # ============================================================================
  # Scopes
  # ============================================================================

  # @!group Scopes

  # @!method self.ashes_of_war()
  #   @return [WeaponSkill::ActiveRecord_Relation]
  scope(:ashes_of_war, -> { where(ash_of_war: true) })

  # @!endgroup Scopes

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return nil unless self.ash_of_war
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Ashes of War/#{self.name}/public"
  end

end
