module Lib
  module Constants
    module DamageTypes
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
    end
  end
end
