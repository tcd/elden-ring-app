class Spell < ApplicationRecord

  # @return [Array<String>]
  SPELL_BOOST_GROUPS = [
    # Sorceries
    "Full Moon Sorcery",
    "Invisibility Sorcery",
    "Crystalian Sorcery",
    "Gravity Sorcery",
    "Thorn Sorcery",
    # Incantations
    "Bestial Incantations",
    "Golden Order Fundamentalist Incantations",
    "Dragon Cult Incantations",
    "Godslayer Incantations",
  ].freeze()

  # @return [Array<String>]
  ALT_FP_TYPES = [
    "Chain",
    "Charge",
  ].freeze()

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute spell_type
  #   @return [String]
  validates(:spell_type, inclusion: { in: Lib::Constants::SpellTypes::ALL, message: "%{value} is not a valid spell_type" })

  # @!attribute description
  #   @return [String]
  validates(:description, presence: true)

  # @!attribute slots_required
  #   @return [Integer]
  validates(:slots_required, presence: true)

  # @!attribute stamina_cost
  #   @return [Integer]
  validates(:stamina_cost, presence: true)

  # @!attribute fp_cost
  #   @return [Integer]
  validates(:fp_cost, presence: true)

  # @!attribute fp_cost_alt
  #   @return [Integer]

  # @!attribute fp_cost_alt_description
  #   @return [String]

  # @!attribute required_intelligence
  #   @return [Integer]
  validates(:required_intelligence, presence: true)
  # @!attribute required_faith
  #   @return [Integer]
  validates(:required_faith, presence: true)
  # @!attribute required_arcane
  #   @return [Integer]
  validates(:required_arcane, presence: true)

  # @!attribute bonus_category
  #   @return [String]

  # @!attribute is_chargeable
  #   @return [Boolean]
  # @!attribute is_usable_on_horse
  #   @return [Boolean]
  # @!attribute is_usable_while_jumping
  #   @return [Boolean]

  # @!attribute damage_blood_loss
  #   @return [Integer]
  # @!attribute damage_frost
  #   @return [Integer]
  # @!attribute damage_madness
  #   @return [Integer]
  # @!attribute damage_poison
  #   @return [Integer]
  # @!attribute damage_sleep
  #   @return [Integer]
  # @!attribute damage_death_blight
  #   @return [Integer]
  # @!attribute damage_scarlet_rot
  #   @return [Integer]

  # @!attribute inflicts_physical
  #   @return [Boolean]
  # @!attribute inflicts_magic
  #   @return [Boolean]
  # @!attribute inflicts_fire
  #   @return [Boolean]
  # @!attribute inflicts_lightning
  #   @return [Boolean]
  # @!attribute inflicts_holy
  #   @return [Boolean]
  # @!attribute inflicts_blood_loss
  #   @return [Boolean]
  # @!attribute inflicts_frost
  #   @return [Boolean]
  # @!attribute inflicts_madness
  #   @return [Boolean]
  # @!attribute inflicts_poison
  #   @return [Boolean]
  # @!attribute inflicts_sleep
  #   @return [Boolean]
  # @!attribute inflicts_death_blight
  #   @return [Boolean]
  # @!attribute inflicts_scarlet_rot
  #   @return [Boolean]

  # @!endgroup Attributes

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Spells/#{self.name.gsub(':', '_')}/public"
  end

end
