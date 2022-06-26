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

  # @!attribute sort_order
  #   @return [Integer]
  validates(:sort_order, presence: true)

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

  # @!attribute weapon_skill_weapon_types
  #   @return [Array<WeaponSkillWeaponType>]
  has_many(:weapon_skill_weapon_types, inverse_of: :weapon_type)

  # @!attribute compatible_skills
  #   @return [Array<WeaponSkill>]
  has_many(
    :compatible_skills,
    through: :weapon_skill_weapon_types,
    source: :weapon_skill,
    class_name: "WeaponSkill",
  )

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    return self.name
  end

  # @return [String]
  def image_url()
    return "/public/images/weapon-types/#{self.name}.png"
  end

end
