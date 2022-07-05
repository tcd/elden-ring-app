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

  # @!attribute sort_group
  #   @return [Integer]
  # validates(:sort_group, presence: true)

  # @!attribute sort_order
  #   @return [Integer]
  # validates(:order, presence: true)

  # @!attribute default_affinity_id
  #   @return [Integer]
  validates(:default_affinity_id, presence: true, if: -> { ash_of_war == true })

  # TODO: add these fields
  #
  # - fp cost
  # - lasting effects
  # - damage type
  # - affinity

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapons
  #   @return [Array<Weapon>]
  has_many(:weapons)

  # @!attribute default_affinity
  #   @return [WeaponAffinity]
  belongs_to(
    :default_affinity,
    optional: true,
    class_name: "WeaponAffinity",
    foreign_key: :default_affinity_id,
  )

  # @!attribute weapon_skill_weapon_affinities
  #   @return [Array<WeaponSkillWeaponAffinity>]
  has_many(:weapon_skill_weapon_affinities, inverse_of: :weapon_skill)

  # @!attribute weapon_skill_weapon_affinities_attributes
  #   @return [Array<WeaponType>]
  accepts_nested_attributes_for(:weapon_skill_weapon_affinities, allow_destroy: true)

  # @!attribute compatible_weapon_affinities
  #   @return [Array<WeaponAffinity>]
  has_many(
    :compatible_weapon_affinities,
    through: :weapon_skill_weapon_affinities,
    source: :weapon_affinity,
    class_name: "WeaponAffinity",
  )

  # @!attribute weapon_skill_weapon_types
  #   @return [Array<WeaponSkillWeaponType>]
  has_many(:weapon_skill_weapon_types, inverse_of: :weapon_skill)

  # @!attribute weapon_skill_weapon_types_attributes
  #   @return [Array<WeaponType>]
  accepts_nested_attributes_for(:weapon_skill_weapon_types, allow_destroy: true)

  # @!attribute compatible_weapon_types
  #   @return [Array<WeaponType>]
  has_many(
    :compatible_weapon_types,
    through: :weapon_skill_weapon_types,
    source: :weapon_type,
    class_name: "WeaponType",
  )

  # @!endgroup Associations

  # ============================================================================
  # Scopes
  # ============================================================================

  # @!group Scopes

  # @!method self.order_by_name()
  #   @return [WeaponSkill::ActiveRecord_Relation]
  scope(:order_by_name, -> { order(name: :asc) })

  # @!method self.with_includes()
  #   @return [WeaponSkill::ActiveRecord_Relation]
  scope(:with_includes, -> { includes(all_includes()) })

  # @!method self.ashes_of_war()
  #   @return [WeaponSkill::ActiveRecord_Relation]
  scope(:ashes_of_war, -> { where(ash_of_war: true) })

  # @!endgroup Scopes

  # ============================================================================
  # Class Methods
  # ============================================================================

  # @return [Array]
  def self.all_includes()
    return [
      :default_affinity,
      :compatible_weapon_affinities,
      :compatible_weapon_types,
      weapon_skill_weapon_affinities: [:weapon_skill, :weapon_affinity],
      weapon_skill_weapon_types:      [:weapon_skill, :weapon_type]
    ]
  end

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return nil unless self.ash_of_war
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Ashes of War/#{self.name}/public"
  end

  # @return [String]
  def default_affinity_name()
    return self.default_affinity&.name
  end

  # @return [String]
  def compatible_weapon_affinity_names()
    return self.compatible_weapon_affinities.map(&:name)
  end

  # @return [String]
  def compatible_weapon_type_names()
    return self.compatible_weapon_types.map(&:name)
  end

end
