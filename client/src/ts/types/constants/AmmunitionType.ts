export const AmmunitionTypes = {
    "Arrow":  "Arrow",
    "Bolt": "Bolt",
} as const

type AmmunitionTypesKey = keyof typeof AmmunitionTypes

export type AmmunitionType = typeof AmmunitionTypes[AmmunitionTypesKey];
