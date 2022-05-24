module Lib
  # Yeah this is kind of a mess.
  module WeaponNaming

    ##
    # This will match weapon names with affinities with the following exceptions:
    #
    # - `Rivers of Blood`
    # - `Sacred Relic Sword`
    # - `Moonveil`
    # - `Bloody Helice`
    # - `Mohgwyn's Sacred Spear`
    # - `Heavy Crossbow`
    #
    # @return [Regexp]
    WEAPON_NAME_WITH_AFFINITY = %r{
      ^
      (?<weapon_name_1>(?:[a-zA-Z\'\- ]+))?
      (?<affinity>
          (?:
              (?:Heavy)
              |(?:Keen)
              |(?:Quality)
              |(?:Fire)
              |(?:Flame\sArt)
              |(?:Lightning)
              |(?:Sacred)
              |(?:Magic)
              |(?:Cold)
              |(?:Poison)
              |(?:Bloody?)
              |(?:Occult)
          )
          (?:\s{1})
      )
      (?<weapon_name_2>(?:[a-zA-Z\'\- ]+))?
      $
    }x

    # @return [Array<String>]
    WEAPON_NAME_WITH_AFFINITY_EXCEPTIONS = [
      "Rivers of Blood",
      "Sacred Relic Sword",
      "Moonveil",
      "Bloody Helice",
      "Mohgwyn's Sacred Spear",
      "Heavy Crossbow",
    ].freeze()

    # These get affinity names inserted into the middle instead of at the beginning.
    #
    # Go figure.
    #
    # @return [Array<String>]
    ABNORMALLY_NAMED_WEAPONS = [
      "Banished Knight's Greatsword",
      "Celebrant's Sickle",
      "Lordsworn's Straight Sword",
      "Weathered Straight Sword",
      "Noble's Slender Sword",
      "Warhawk's Talon",
      "Lordsworn's Greatsword",
      "Knight's Greatsword",
      "Banished Knight's Greatsword",
      "Gargoyle's Greatsword",
      "Watchdog's Greatsword",
      "Troll's Golden Sword",
      "Cleanrot Knight's Sword",
      "Rogier's Rapier",
      "Noble's Estoc",
      "Beastman's Curved Sword",
      "Bandit's Curved Sword",
      "Flowing Curved Sword",
      "Scavenger's Curved Sword",
      "Serpent-God's Curved Sword",
      "Monk's Flameblade",
      "Beastman's Cleaver",
      "Gargoyle's Twinblade",
      "Monk's Flamemace",
      "Celebrant's Skull",
      "Celebrant's Cleaver",
      "Executioner's Greataxe",
      "Gargoyle's Great Axe",
      "Clayman's Harpoon",
      "Celebrant's Rib-Rake",
      "Pest's Glaive",
      "Banished Knight's Halberd",
      "Guardian's Swordspear",
      "Gargoyle's Halberd",
      "Hoslow's Petal Whip",
      "Prelate's Inferno Crozier",
      "Golem's Halberd",
      "Perfumer's Shield",
      "Man-Serpent's Shield",
      "Beastman's Jar-Shield",
      "Gilded Iron Shield",
      "Marred Leather Shield",
      "Marred Wooden Shield",
      "Banished Knight's Shield",
      "Carian Knight's Shield",
      "Distinguished Greatshield",
    ].freeze()

    def self.match_name()

    end

  end
end

