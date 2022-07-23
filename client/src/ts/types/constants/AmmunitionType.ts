export const AmmunitionTypes = {
    "Arrow":      "Arrow",
    "Bolt":       "Bolt",
    "Greatarrow": "Greatarrow",
    "Greatbolt":  "Greatbolt",
} as const

type AmmunitionTypesKey = keyof typeof AmmunitionTypes

export type AmmunitionType = typeof AmmunitionTypes[AmmunitionTypesKey];
