# In Elden Ring, Armor are protective items worn by the player's character which grant
# protections, resistances, and various bonus effects against damage and status effects,
# as well as influencing statistics such as carry load and poise.
class Armor < ApplicationRecord

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

  # @!attribute is_altered
  #   @return [Boolean]

  # @!attribute physical
  #   @return [Decimal]
  validates(:physical, presence: true)
  # @!attribute vs_strike
  #   @return [Decimal]
  validates(:vs_strike, presence: true)
  # @!attribute vs_slash
  #   @return [Decimal]
  validates(:vs_slash, presence: true)
  # @!attribute vs_pierce
  #   @return [Decimal]
  validates(:vs_pierce, presence: true)
  # @!attribute magic
  #   @return [Decimal]
  validates(:magic, presence: true)
  # @!attribute fire
  #   @return [Decimal]
  validates(:fire, presence: true)
  # @!attribute lightning
  #   @return [Decimal]
  validates(:lightning, presence: true)
  # @!attribute holy
  #   @return [Decimal]
  validates(:holy, presence: true)

  # @!attribute immunity
  #   @return [Decimal]
  validates(:immunity, presence: true)
  # @!attribute robustness
  #   @return [Decimal]
  validates(:robustness, presence: true)
  # @!attribute focus
  #   @return [Decimal]
  validates(:focus, presence: true)
  # @!attribute vitality
  #   @return [Decimal]
  validates(:vitality, presence: true)
  # @!attribute poise
  #   @return [Decimal]
  validates(:poise, presence: true)

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute armor_type
  #   @return [ArmorType]
  belongs_to(:armor_type)

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

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Armor/#{self.name}/public"
  end

end
