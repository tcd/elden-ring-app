class StartingClass < ApplicationRecord

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

  # @!attribute description
  #   @return [String]
  validates(:description, presence: true)

  # @!endgroup Attributes

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

  # @!attribute r1
  #   @return [Weapon]
  belongs_to(:r1, class_name: "Weapon", foreign_key: :r1_id, optional: true)
  # @!attribute r2
  #   @return [Weapon]
  belongs_to(:r2, class_name: "Weapon", foreign_key: :r2_id, optional: true)
  # @!attribute r3
  #   @return [Weapon]
  belongs_to(:r3, class_name: "Weapon", foreign_key: :r3_id, optional: true)
  # @!attribute l1
  #   @return [Weapon]
  belongs_to(:l1, class_name: "Weapon", foreign_key: :l1_id, optional: true)
  # @!attribute l2
  #   @return [Weapon]
  belongs_to(:l2, class_name: "Weapon", foreign_key: :l2_id, optional: true)
  # @!attribute l3
  #   @return [Weapon]
  belongs_to(:l3, class_name: "Weapon", foreign_key: :l3_id, optional: true)

  # @!attribute head
  #   @return [Armor]
  belongs_to(:head, class_name: "Armor", foreign_key: :head_id, optional: true)
  # @!attribute chest
  #   @return [Armor]
  belongs_to(:chest, class_name: "Armor", foreign_key: :chest_id, optional: true)
  # @!attribute arms
  #   @return [Armor]
  belongs_to(:arms, class_name: "Armor", foreign_key: :arms_id, optional: true)
  # @!attribute legs
  #   @return [Armor]
  belongs_to(:legs, class_name: "Armor", foreign_key: :legs_id, optional: true)

  # @!attribute spell_1
  #   @return [Spell]
  belongs_to(:spell_1, class_name: "Spell", foreign_key: :spell_1_id, optional: true)
  # @!attribute spell_2
  #   @return [Spell]
  belongs_to(:spell_2, class_name: "Spell", foreign_key: :spell_2_id, optional: true)
  # @!attribute spell_3
  #   @return [Spell]
  belongs_to(:spell_3, class_name: "Spell", foreign_key: :spell_3_id, optional: true)
  # @!attribute spell_4
  #   @return [Spell]
  belongs_to(:spell_4, class_name: "Spell", foreign_key: :spell_4_id, optional: true)

  # @!endgroup Associations

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [Integer]
  def total_levels()
    return [
      self.vigor,
      self.mind,
      self.endurance,
      self.strength,
      self.dexterity,
      self.intelligence,
      self.faith,
      self.arcane,
    ].sum()
  end

end
