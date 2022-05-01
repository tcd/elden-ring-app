export enum Stat {
    LEVEL        = "Level",
    // Attributes
    VIGOR        = "Vigor",
    MIND         = "Mind",
    ENDURANCE    = "Endurance",
    STRENGTH     = "Strength",
    DEXTERITY    = "Dexterity",
    INTELLIGENCE = "Intelligence",
    FAITH        = "Faith",
    ARCANE       = "Arcane",
    // Stats
    HP             = "HP",
    FP             = "FP",
    STAMINA        = "Stamina",
    MAX_EQUIP_LOAD = "Max Equip Load",
    POISE          = "Poise",
    DISCOVERY      = "Discovery",
    // Resistance
    IMMUNITY   = "Immunity",
    ROBUSTNESS = "Robustness",
    FOCUS      = "Focus",
    /**
     * Your resistance to death.
     * The higher the number, the lower your susceptibility to instant death.
     * Governed by your attributes, as well as defensive gear and any additional effects.
     */
    VITALITY   = "Vitality",
    // Defense/Dmg Negation
    PHYSICAL_DEFENSE          = "Physical Defense",
    PHYSICAL_DAMAGE_NEGATION  = "Physical Damage Negation",
    VS_STRIKE_DEFENSE         = "VS Strike Defense",
    VS_STRIKE_DAMAGE_NEGATION = "VS Strike Damage Negation",
    VS_SLASH_DEFENSE          = "VS Slash Defense",
    VS_SLASH_DAMAGE_NEGATION  = "VS Slash Damage Negation",
    VS_PIERCE_DEFENSE         = "VS Pierce Defense",
    VS_PIERCE_DAMAGE_NEGATION = "VS Pierce Damage Negation",
    MAGIC_DEFENSE             = "Magic Defense",
    MAGIC_DAMAGE_NEGATION     = "Magic Damage Negation",
    FIRE_DEFENSE              = "Fire Defense",
    FIRE_DAMAGE_NEGATION      = "Fire Damage Negation",
    LIGHTNING_DEFENSE         = "Lightning Defense",
    LIGHTNING_DAMAGE_NEGATION = "Lightning Damage Negation",
    HOLY_DEFENSE              = "Holy Defense",
    HOLY_DAMAGE_NEGATION      = "Holy Damage Negation",
}
