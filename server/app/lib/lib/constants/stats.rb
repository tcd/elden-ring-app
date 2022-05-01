module Lib
  module Constants
    module Stats

      LEVEL        = "Level".freeze()

      # ========================================================================
      # Attributes
      # ========================================================================

      VIGOR        = "Vigor".freeze()
      MIND         = "Mind".freeze()
      ENDURANCE    = "Endurance".freeze()
      STRENGTH     = "Strength".freeze()
      DEXTERITY    = "Dexterity".freeze()
      INTELLIGENCE = "Intelligence".freeze()
      FAITH        = "Faith".freeze()
      ARCANE       = "Arcane".freeze()

      # ========================================================================
      # Stats
      # ========================================================================

      HP             = "HP".freeze()
      FP             = "FP".freeze()
      STAMINA        = "Stamina".freeze()
      MAX_EQUIP_LOAD = "Max Equip Load".freeze()
      POISE          = "Poise".freeze()
      DISCOVERY      = "Discovery".freeze()

      # ========================================================================
      # Resistance
      # ========================================================================

      IMMUNITY   = "Immunity".freeze()
      ROBUSTNESS = "Robustness".freeze()
      FOCUS      = "Focus".freeze()
      # Your resistance to death.
      # The higher the number, the lower your susceptibility to instant death.
      # Governed by your attributes, as well as defensive gear and any additional effects.
      VITALITY   = "Vitality".freeze()

      # ========================================================================
      # Defense
      # ========================================================================

      PHYSICAL_DEFENSE          = "Physical Defense".freeze()
      VS_STRIKE_DEFENSE         = "VS Strike Defense".freeze()
      VS_SLASH_DEFENSE          = "VS Slash Defense".freeze()
      VS_PIERCE_DEFENSE         = "VS Pierce Defense".freeze()
      MAGIC_DEFENSE             = "Magic Defense".freeze()
      FIRE_DEFENSE              = "Fire Defense".freeze()
      LIGHTNING_DEFENSE         = "Lightning Defense".freeze()
      HOLY_DEFENSE              = "Holy Defense".freeze()

      # ========================================================================
      # Damage Negation
      # ========================================================================

      PHYSICAL_DAMAGE_NEGATION  = "Physical Damage Negation".freeze()
      VS_STRIKE_DAMAGE_NEGATION = "VS Strike Damage Negation".freeze()
      VS_SLASH_DAMAGE_NEGATION  = "VS Slash Damage Negation".freeze()
      VS_PIERCE_DAMAGE_NEGATION = "VS Pierce Damage Negation".freeze()
      MAGIC_DAMAGE_NEGATION     = "Magic Damage Negation".freeze()
      FIRE_DAMAGE_NEGATION      = "Fire Damage Negation".freeze()
      LIGHTNING_DAMAGE_NEGATION = "Lightning Damage Negation".freeze()
      HOLY_DAMAGE_NEGATION      = "Holy Damage Negation".freeze()

    end
  end
end
