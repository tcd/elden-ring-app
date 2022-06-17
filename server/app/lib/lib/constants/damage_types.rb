module Lib
  module Constants
    module DamageTypes

      module Standard
        # @return [String]
        PHYSICAL  = "Physical".freeze()
        # @return [String]
        MAGIC     = "Magic".freeze()
        # @return [String]
        FIRE      = "Fire".freeze()
        # @return [String]
        LIGHTNING = "Lightning".freeze()
        # @return [String]
        HOLY      = "Holy".freeze()

        # @return [Array<String>]
        ALL = [
          PHYSICAL,
          MAGIC,
          FIRE,
          LIGHTNING,
          HOLY,
        ].freeze()
      end

      module Physical
        # @return [String]
        STANDARD = "Standard".freeze()
        # @return [String]
        SLASH    = "Slash".freeze()
        # @return [String]
        STRIKE   = "Strike".freeze()
        # @return [String]
        PIERCE   = "Pierce".freeze()
        # @return [String]
        NONE     = "None".freeze()

        # @return [Array<String>]
        ALL = [
          STANDARD,
          SLASH,
          STRIKE,
          PIERCE,
          NONE,
        ].freeze()
      end

      module Passive
        # @return [String]
        BLOOD_LOSS   = "Blood Loss".freeze()
        # @return [String]
        FROST        = "Frost".freeze()
        # @return [String]
        MADNESS      = "Madness".freeze()
        # @return [String]
        POISON       = "Poison".freeze()
        # @return [String]
        SLEEP        = "Sleep".freeze()
        # @return [String]
        DEATH_BLIGHT = "Death Blight".freeze()
        # @return [String]
        SCARLET_ROT  = "Scarlet Rot".freeze()

        # @return [Array<String>]
        ALL = [
          BLOOD_LOSS,
          FROST,
          MADNESS,
          POISON,
          SLEEP,
          DEATH_BLIGHT,
          SCARLET_ROT,
        ].freeze()
      end

      # @return [Array<String>]
      ALL = [
        *Standard::ALL,
        *Physical::ALL,
        *Passive::ALL,
      ].freeze()

    end
  end
end
