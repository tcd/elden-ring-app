module Lib
  module Constants
    module DamageTypes

      PHYSICAL  = "Physical".freeze()
      MAGIC     = "Magic".freeze()
      FIRE      = "Fire".freeze()
      LIGHTNING = "Lightning".freeze()
      HOLY      = "Holy".freeze()

      STANDARD = "Standard".freeze()
      SLASH    = "Slash".freeze()
      STRIKE   = "Strike".freeze()
      PIERCE   = "Pierce".freeze()

      BLOOD_LOSS   = "Blood Loss".freeze()
      FROST        = "Frost".freeze()
      MADNESS      = "Madness".freeze()
      POISON       = "Poison".freeze()
      SLEEP        = "Sleep".freeze()
      DEATH_BLIGHT = "Death Blight".freeze()
      SCARLET_ROT  = "Scarlet Rot".freeze()

      # @return [Array<String>]
      ALL = [
        PHYSICAL,
        MAGIC,
        FIRE,
        LIGHTNING,
        HOLY,

        STANDARD,
        SLASH,
        STRIKE,
        PIERCE,

        BLOOD_LOSS,
        FROST,
        MADNESS,
        POISON,
        SLEEP,
        DEATH_BLIGHT,
        SCARLET_ROT,
      ].freeze()

    end
  end
end
