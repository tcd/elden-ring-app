import { WeaponSettings } from "@app/types"

export type WeaponSlotId =
    | "R1"
    | "R2"
    | "R3"
    | "L1"
    | "L2"
    | "L3"

// export type WeaponSlotIdMap<T> = {
//     [key in WeaponSlotId]: T;
// };
export type WeaponSlotIdMap<T> = Record<WeaponSlotId, T>
export type WeaponSlots = WeaponSlotIdMap<WeaponSettings>

export const weaponSlotIdName = (slotId: WeaponSlotId): string => {
    switch (slotId) {
        case "R1":
            return "Right Hand Armament 1"
        case "R2":
            return "Right Hand Armament 2"
        case "R3":
            return "Right Hand Armament 3"
        case "L1":
            return "Left Hand Armament 1"
        case "L2":
            return "Left Hand Armament 2"
        case "L3":
            return "Left Hand Armament 3"
        default:
            return ""
    }
}

export interface WeaponSlotData {
    name: string
    displayName: string
    empty: boolean
}

export type WeaponSlotsData = WeaponSlotIdMap<WeaponSlotData>
