module Lib
  module Constants
    module Affinities
      Blood     = "Blood".freeze()
      Cold      = "Cold".freeze()
      Fire      = "Fire".freeze()
      FlameArt  = "Flame Art".freeze()
      Heavy     = "Heavy".freeze()
      Keen      = "Keen".freeze()
      Lightning = "Lightning".freeze()
      Magic     = "Magic".freeze()
      None      = "None".freeze()
      Occult    = "Occult".freeze()
      Poison    = "Poison".freeze()
      Quality   = "Quality".freeze()
      Sacred    = "Sacred".freeze()
      Standard  = "Standard".freeze()

      # @return [Array<String>]
      ALL = [
        Blood,
        Cold,
        Fire,
        FlameArt,
        Heavy,
        Keen,
        Lightning,
        Magic,
        None,
        Occult,
        Poison,
        Quality,
        Sacred,
        Standard,
      ].freeze()
    end
  end
end
