import { WeaponSettings } from "@app/types"

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

export type WeaponSlots = Record<WeaponSlotId, WeaponSettings>

const WeaponSlotIdDisplayNames: Record<WeaponSlotId, string> = {
    "R1": "Right Hand Armament 1",
    "R2": "Right Hand Armament 2",
    "R3": "Right Hand Armament 3",
    "L1": "Left Hand Armament 1",
    "L2": "Left Hand Armament 2",
    "L3": "Left Hand Armament 3",
}

export const weaponSlotIdName = (slotId: WeaponSlotId): string => {
    return WeaponSlotIdDisplayNames?.[slotId] ?? ""
}

export interface WeaponSlotData {
    name: string
    displayName: string
    empty: boolean
}

export type WeaponSlotsData = Record<WeaponSlotId, WeaponSlotData>
