// export const AMMUNITION_FEATURE_KEY = "Ammunition"
// export const ARMOR_FEATURE_KEY = "Armor"
// export const BUILDER_FEATURE_KEY = "Builder"
// export const CHECKLIST_FEATURE_KEY = "Checklist"
// export const CORE_FEATURE_KEY = "Core"
// export const EQUIPMENT_FEATURE_KEY = "Equipment"
// export const LEVEL_UP_FEATURE_KEY = "LevelUp"
// export const SPELLS_FEATURE_KEY = "Spells"
// export const STARTING_CLASS_FEATURE_KEY = "StartingClass"
// export const TALISMANS_FEATURE_KEY = "Talismans"
// export const WEAPONS_FEATURE_KEY = "Weapons"
// export const ROUTER_FEATURE_KEY = "Router"

// export const FEATURE_KEYS = {
//     Ammunition:    AMMUNITION_FEATURE_KEY,
//     Armor:         ARMOR_FEATURE_KEY,
//     Builder:       BUILDER_FEATURE_KEY,
//     Checklist:     CHECKLIST_FEATURE_KEY,
//     Core:          CORE_FEATURE_KEY,
//     Equipment:     EQUIPMENT_FEATURE_KEY,
//     LevelUp:       LEVEL_UP_FEATURE_KEY,
//     Spells:        SPELLS_FEATURE_KEY,
//     StartingClass: STARTING_CLASS_FEATURE_KEY,
//     Talismans:     TALISMANS_FEATURE_KEY,
//     Weapons:       WEAPONS_FEATURE_KEY,
//     router:        ROUTER_FEATURE_KEY,
// } as const

export const FeatureKeys = {
    Ammunition:    "Ammunition",
    Armor:         "Armor",
    Builder:       "Builder",
    Checklist:     "Checklist",
    Core:          "Core",
    Equipment:     "Equipment",
    LevelUp:       "LevelUp",
    Spells:        "Spells",
    StartingClass: "StartingClass",
    Talismans:     "Talismans",
    Weapons:       "Weapons",
    Router:        "Router",
} as const

type FeatureKeyKey = keyof typeof FeatureKeys
export type FeatureKey = typeof FeatureKeys[FeatureKeyKey];
