export type WeaponSlotId =
    | "R1"
    | "R2"
    | "R3"
    | "L1"
    | "L2"
    | "L3"

export interface WeaponSet {
    R1?: string
    R2?: string
    R3?: string
    L1?: string
    L2?: string
    L3?: string
}

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
