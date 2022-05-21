export interface WeaponType {
    id: number
    name: WeaponTypeSingular
    plural_name: WeaponTypePlural
    is_shield: boolean
}

export enum WeaponTypeSingular {
    AXE                   = "Axe",
    BALLISTA              = "Ballista",
    BOW                   = "Bow",
    CLAW                  = "Claw",
    COLOSSAL_SWORD        = "Colossal Sword",
    COLOSSAL_WEAPON       = "Colossal Weapon",
    CROSSBOW              = "Crossbow",
    CURVED_GREATSWORD     = "Curved Greatsword",
    CURVED_SWORD          = "Curved Sword",
    DAGGER                = "Dagger",
    FIST                  = "Fist",
    FLAIL                 = "Flail",
    GLINTSTONE_STAFF      = "Glintstone Staff",
    GREAT_SPEAR           = "Great Spear",
    GREAT_HAMMER          = "Great Hammer",
    GREATAXE              = "Greataxe",
    GREATBOW              = "Greatbow",
    GREATSWORD            = "Greatsword",
    HALBERD               = "Halberd",
    HAMMER                = "Hammer",
    HEAVY_THRUSTING_SWORD = "Heavy Thrusting Sword",
    KATANA                = "Katana",
    LIGHT_BOW             = "Light Bow",
    REAPER                = "Reaper",
    SPEAR                 = "Spear",
    STRAIGHT_SWORD        = "Straight Sword",
    THRUSTING_SWORD       = "Thrusting Sword",
    TORCH                 = "Torch",
    TWINBLADE             = "Twinblade",
    WARHAMMER             = "Warhammer",
    WHIP                  = "Whip",
}

export enum WeaponTypePlural {
    AXES                   = "Axes",
    BALLISTAE              = "Ballistae",
    BOWS                   = "Bows",
    CLAWS                  = "Claws",
    COLOSSAL_SWORDS        = "Colossal Swords",
    COLOSSAL_WEAPONS       = "Colossal Weapons",
    CROSSBOWS              = "Crossbows",
    CURVED_GREATSWORDS     = "Curved Greatswords",
    CURVED_SWORDS          = "Curved Swords",
    DAGGERS                = "Daggers",
    FISTS                  = "Fists",
    FLAILS                 = "Flails",
    GLINTSTONE_STAVES      = "Glintstone Staves",
    GREAT_SPEARS           = "Great Spears",
    GREAT_HAMMERS          = "Great Hammers",
    GREATAXES              = "Greataxes",
    GREATBOWS              = "Greatbows",
    GREATSWORDS            = "Greatswords",
    HALBERDS               = "Halberds",
    HAMMERS                = "Hammers",
    HEAVY_THRUSTING_SWORDS = "Heavy Thrusting Swords",
    KATANAS                = "Katanas",
    LIGHT_BOWS             = "Light Bows",
    REAPERS                = "Reapers",
    SPEARS                 = "Spears",
    STRAIGHT_SWORDS        = "Straight Swords",
    THRUSTING_SWORDS       = "Thrusting Swords",
    TORCHES                = "Torches",
    TWINBLADES             = "Twinblades",
    WARHAMMERS             = "Warhammers",
    WHIPS                  = "Whips",
}

export type WeaponTypePluralString =
    | "Axes"
    | "Ballistae"
    | "Bows"
    | "Claws"
    | "Colossal Swords"
    | "Colossal Weapons"
    | "Crossbows"
    | "Curved Greatswords"
    | "Curved Swords"
    | "Daggers"
    | "Fists"
    | "Flails"
    | "Glintstone Staves"
    | "Great Spears"
    | "Great Hammers"
    | "Greataxes"
    | "Greatbows"
    | "Greatswords"
    | "Halberds"
    | "Hammers"
    | "Heavy Thrusting Swords"
    | "Katanas"
    | "Light Bows"
    | "Reapers"
    | "Spears"
    | "Straight Swords"
    | "Thrusting Swords"
    | "Torches"
    | "Twinblades"
    | "Warhammers"
    | "Whips"
