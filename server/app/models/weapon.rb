# Weapons in Elden Ring are pieces of offensive equipment that are used by the player's character to inflict damage against Enemies and Bosses.
class Weapon < ApplicationRecord

  validates_with(Lib::Validators::PhysicalDamageTypeValidator)

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute weight
  #   @return [Decimal]
  validates(:weight, presence: true)

  # @!attribute physical_damage_types
  #   @return [Array<String>]

  # @!attribute required_strength
  #   @return [Integer]
  # @!attribute required_dexterity
  #   @return [Integer]
  # @!attribute required_intelligence
  #   @return [Integer]
  # @!attribute required_faith
  #   @return [Integer]
  # @!attribute required_arcane
  #   @return [Integer]

  # @!attribute defense_physical
  #   @return [Decimal]
  validates(:defense_physical, presence: true)
  # @!attribute defense_magic
  #   @return [Decimal]
  validates(:defense_magic, presence: true)
  # @!attribute defense_fire
  #   @return [Decimal]
  validates(:defense_fire, presence: true)
  # @!attribute defense_lightning
  #   @return [Decimal]
  validates(:defense_lightning, presence: true)
  # @!attribute defense_holy
  #   @return [Decimal]
  validates(:defense_holy, presence: true)
  # @!attribute defense_guard_boost
  #   @return [Decimal]
  validates(:defense_guard_boost, presence: true)

  # @!attribute is_shield
  #   @return [Boolean]

  # @!attribute is_special
  #   @return [Boolean]

  # @!attribute range
  #   @return [Integer]

  # @!attribute spell_boost_groups
  #   @return [Array<String>]

  # @!attribute spell_boost_percentage
  #   @return [Decimal]

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute weapon_type
  #   @return [WeaponType]
  belongs_to(:weapon_type)

  # @!attribute weapon_skill
  #   @return [WeaponSkill]
  belongs_to(:weapon_skill)

  # @!attribute equipment_effects
  #   @return [Array<EquipmentEffect>]
  has_many(
    :equipment_effects,
    as: :equipment,
    inverse_of: :equipment,
    class_name: "EquipmentEffect",
    dependent: :destroy,
  )
  accepts_nested_attributes_for(
    :equipment_effects,
    allow_destroy: true,
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

  # @return [Array<String>]
  def damage_types()
    types = []

    types.push(Lib::Constants::DamageTypes::PHYSICAL)  if self.attack_physical  > 0
    types.push(Lib::Constants::DamageTypes::FIRE)      if self.attack_fire      > 0
    types.push(Lib::Constants::DamageTypes::LIGHTNING) if self.attack_lightning > 0
    types.push(Lib::Constants::DamageTypes::HOLY)      if self.attack_holy      > 0

    return types
  end

  # @return [String]
  def image_url()
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Weapons/#{self.name}/public"
  end

end
