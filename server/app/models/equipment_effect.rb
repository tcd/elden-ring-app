class EquipmentEffect < ApplicationRecord

  # @return [Array<String>]
  EFFECT_TYPES = ["increase", "decrease"].freeze()

  # @return [Array<String>]
  EFFECT_METHODS = ["flat", "percentage"].freeze()

  # @return [Array<String>]
  STATS = [
    # Attributes
    "Vigor",
    "Mind",
    "Endurance",
    "Strength",
    "Dexterity",
    "Intelligence",
    "Faith",
    "Arcane",
    # Stats
    "HP",
    "FP",
    "Stamina",
    "Max Equip Load",
    "Poise",
    "Discovery",
    # Resistance
    "Immunity",
    "Robustness",
    "Focus",
    "Vitality",
    # Defense
    "Physical Defense",
    "VS Strike Defense",
    "VS Slash Defense",
    "VS Pierce Defense",
    "Magic Defense",
    "Fire Defense",
    "Lightning Defense",
    "Holy Defense",
    # Damage Negation
    "Physical Damage Negation",
    "VS Strike Damage Negation",
    "VS Slash Damage Negation",
    "VS Pierce Damage Negation",
    "Magic Damage Negation",
    "Fire Damage Negation",
    "Lightning Damage Negation",
    "Holy Damage Negation",
  ].freeze()

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute effect_type
  #   @return [String]
  validates(:effect_type, inclusion: { in: EFFECT_TYPES, message: "%{value} is not a valid effect type" })

  # @!attribute effect_method
  #   @return [String]
  validates(:effect_method, inclusion: { in: EFFECT_METHODS, message: "%{value} is not a valid effect method" })

  # @!attribute affected_stat
  #   @return [String]
  validates(:affected_stat, inclusion: { in: STATS, message: "%{value} is not a valid stat" })

  # @!attribute value
  #   @return [Decimal]
  validates(:value, presence: true)

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute equipment
  #   @return [Array<ApplicationRecord>]
  belongs_to(:equipment, polymorphic: true)

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    val = self.value
    if self.effect_method == "percentage"
      val *= 100
      suffix = "%"
    end
    # suffix = (self.effect_method == "percentage") ? "%" : ""
    return [
      self.effect_type.capitalize(),
      self.affected_stat,
      "by",
      "#{val}#{suffix}",
    ].join(" ")
  end

end
