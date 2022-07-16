import { WeaponSlotId } from "@app/constants"
import { WeaponSettings } from "@app/types"

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
