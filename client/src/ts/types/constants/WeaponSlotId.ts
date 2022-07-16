export const WeaponSlotIds = {
    "R1": "R1",
    "R2": "R2",
    "R3": "R3",
    "L1": "L1",
    "L2": "L2",
    "L3": "L3",
} as const

type WeaponSlotIdsKey = keyof typeof WeaponSlotIds

export type WeaponSlotId = typeof WeaponSlotIds[WeaponSlotIdsKey];
