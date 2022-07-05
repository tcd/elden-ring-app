class Talisman < ApplicationRecord

  EFFECTS_SCHEMA = Rails.root.join("app", "schema", "effects.schema.json")

  # ============================================================================
  # Attributes
  # ============================================================================

  # @!group Attributes

  # @!attribute name
  #   @required
  #   @return [String]
  validates(:name, presence: true, uniqueness: true)

  # @!attribute description
  #   @return [String]
  validates(:description, presence: true)

  # @!attribute long_description
  #   @return [String]

  # @!attribute weight
  #   @required
  #   @return [Decimal]
  validates(:weight, presence: true)

  # @!attribute restricts
  #   @return [Array<String>]
  # validates(:restricts, presence: true)

  # @!attribute effects
  #   @return [Array<Object>]
  validates(:effects, presence: false, json: { schema: EFFECTS_SCHEMA })

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

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
  # Scopes
  # ============================================================================

  # @!group Scopes

  # @!method self.order_by_sort_order()
  #   @return [Talisman::ActiveRecord_Relation]
  scope(:order_by_sort_order, -> { order(sort_order: :asc) })

  # @!method self.with_effects()
  #   @return [Talisman::ActiveRecord_Relation]
  scope(:with_effects, -> { includes(:equipment_effects) })

  # @!endgroup Scopes

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def image_url()
    return "https://imagedelivery.net/#{Lib::Util.get_credential(:cloudflare_account_hash)}/Talismans/#{self.name}/public"
  end

end
