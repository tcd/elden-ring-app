module Lib
  # Code for processing weapon names that may or may not include a weapon affinity.
  module WeaponNameProcessing

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
    WEAPON_WITH_AFFINITY_PATTERN = %r{
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
    }x.freeze()

    # @return [Array<String>]
    AFFINITY_NAMES = [
      "Blood",
      "Bloody",
      "Cold",
      "Fire",
      "Flame Art",
      "Heavy",
      "Keen",
      "Lightning",
      "Magic",
      "None",
      "Occult",
      "Poison",
      "Quality",
      "Sacred",
      "Standard",
    ].freeze()

    # @return [Array<String>]
    PATTERN_EXCEPTIONS = [
      "Bloody Helice",
      "Heavy Crossbow",
      "Mohgwyn's Sacred Spear",
      "Moonveil",
      "Rivers of Blood",
      "Sacred Relic Sword",
    ].freeze()

    # @return [Array<String>]
    WEAPONS_WITH_ABNORMAL_NAMES = [
      "Bandit's Curved Sword",
      "Banished Knight's Greatsword",
      "Banished Knight's Greatsword",
      "Banished Knight's Halberd",
      "Banished Knight's Shield",
      "Beastman's Cleaver",
      "Beastman's Curved Sword",
      "Beastman's Jar-Shield",
      "Carian Knight's Shield",
      "Celebrant's Cleaver",
      "Celebrant's Rib-Rake",
      "Celebrant's Sickle",
      "Celebrant's Skull",
      "Clayman's Harpoon",
      "Cleanrot Knight's Sword",
      "Distinguished Greatshield",
      "Executioner's Greataxe",
      "Flowing Curved Sword",
      "Gargoyle's Great Axe",
      "Gargoyle's Greatsword",
      "Gargoyle's Halberd",
      "Gargoyle's Twinblade",
      "Gilded Iron Shield",
      "Golem's Halberd",
      "Guardian's Swordspear",
      "Hoslow's Petal Whip",
      "Knight's Greatsword",
      "Lordsworn's Greatsword",
      "Lordsworn's Straight Sword",
      "Man-Serpent's Shield",
      "Marred Leather Shield",
      "Marred Wooden Shield",
      "Monk's Flameblade",
      "Monk's Flamemace",
      "Noble's Estoc",
      "Noble's Slender Sword",
      "Perfumer's Shield",
      "Pest's Glaive",
      "Prelate's Inferno Crozier",
      "Rogier's Rapier",
      "Scavenger's Curved Sword",
      "Serpent-God's Curved Sword",
      "Troll's Golden Sword",
      "Warhawk's Talon",
      "Watchdog's Greatsword",
      "Weathered Straight Sword",
    ].freeze()

    # Given a weapon name (possibly including an affinity),
    # returns the name of the weapon and the name of the affinity.
    #
    # The returned affinity will be `"Standard"` if no affinity is included.
    #
    # @param name [String] Weapon name, possibly with an affinity.
    # @return [Array(String, String)]
    def self.process_name(name)
      result = {
        weapon_name: name,
        affinity_name: "Standard",
      }

      has_affinity = AFFINITY_NAMES.any? { |x| name.include?(x) }
      has_affinity = false if has_affinity && PATTERN_EXCEPTIONS.include?(name)

      unless has_affinity
        return [result[:weapon_name], result[:affinity_name]]
      end

      if (matches = name.match(WEAPON_WITH_AFFINITY_PATTERN))
        # if WEAPONS_WITH_ABNORMAL_NAMES.include?(name)
        #   binding.pry
        # end
        name_1 = matches[:weapon_name_1]&.strip()
        name_2 = matches[:weapon_name_2]&.strip()
        affinity = matches[:affinity]&.strip()
        affinity = "Blood" if affinity == "Bloody"
        result = {
          weapon_name: [name_1, name_2].compact.join(" "),
          affinity_name: affinity,
        }
      end
      return [result[:weapon_name], result[:affinity_name]]
    end

  end
end
