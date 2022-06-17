module Lib
  module Constants
    module DamageTypes

      # @return [Array<String>]
      ALL = [
        *Standard::ALL,
        *Physical::ALL,
        *Passive::ALL,
      ].freeze()

    end
  end
end
