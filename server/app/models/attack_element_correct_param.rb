class AttackElementCorrectParam < ApplicationRecord

  # ============================================================================
  # Associations
  # ============================================================================

  # @!group Associations

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

  # @return [String]
  def display_name()
    return self.id.to_s()
  end

end
