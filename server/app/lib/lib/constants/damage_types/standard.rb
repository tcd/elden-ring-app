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
    end
  end
end
