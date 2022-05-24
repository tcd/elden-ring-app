class AttackElementCorrectParam < ApplicationRecord

  # ============================================================================
  # Instance Methods
  # ============================================================================

  # @return [String]
  def display_name()
    return self.id.to_s()
  end

end
