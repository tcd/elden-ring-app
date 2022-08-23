export const FeatureKeys = {
    Ammunition:      "Ammunition",
    Armor:           "Armor",
    Builder:         "Builder",
    CharacterStatus: "CharacterStatus",
    Checklist:       "Checklist",
    Core:            "Core",
    Equipment:       "Equipment",
    LevelUp:         "LevelUp",
    QuickItems:      "QuickItems",
    Router:          "Router",
    Routing:         "Routing",
    Spells:          "Spells",
    StartingClass:   "StartingClass",
    Talismans:       "Talismans",
    Weapons:         "Weapons",
} as const

type FeatureKeyKey = keyof typeof FeatureKeys
export type FeatureKey = typeof FeatureKeys[FeatureKeyKey];
