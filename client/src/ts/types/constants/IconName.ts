export const IconNames = {
    AttackPower:        "attack-power",
    AttributePoints:    "attribute-points",
    AttributeScaling:   "attribute-scaling",
    AttributesRequired: "attributes-required",
    BaseStats:          "base-stats",
    CharacterStatus:    "character-status",
    DamageNegation:     "damage-negation",
    DefenseDmgNegation: "defense-dmg-negation",
    Equipment:          "equipment",
    Equipped:           "equipped",
    GuardedDmgNegation: "guarded-damage-negation",
    ItemEffect:         "item-effect",
    Lineage:            "lineage",
    Obtained:           "obtained",
    PassiveEffects:     "passive-effects",
    RequiredItems:      "required-items",
    ResistancePlus:     "resistance-plus",
    Resistance:         "resistance",
} as const

export type IconNamesKey = keyof typeof IconNames

export type IconName = typeof IconNames[IconNamesKey];
