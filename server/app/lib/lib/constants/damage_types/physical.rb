module Lib
  module Constants
    module DamageTypes
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
    end
  end
end
