class SpellGroup < ApplicationRecord

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute alt_name
  #   @return [String]
  validates(:alt_name, presence: false, uniqueness: true, allow_blank: true)

  # @!attribute spell_type
  #   @return [String]
  validates(:spell_type, inclusion: { in: Lib::Constants::SpellTypes, message: "%{value} is not a valid spell_type" })

  # @!endgroup Attributes

end
