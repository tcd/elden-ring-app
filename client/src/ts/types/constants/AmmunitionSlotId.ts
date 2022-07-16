export const AmmunitionSlotIds = {
    "A1": "A1",
    "A2": "A2",
    "B1": "B1",
    "B2": "B2",
} as const

type AmmunitionSlotIdsKey = keyof typeof AmmunitionSlotIds

export type AmmunitionSlotId = typeof AmmunitionSlotIds[AmmunitionSlotIdsKey];
