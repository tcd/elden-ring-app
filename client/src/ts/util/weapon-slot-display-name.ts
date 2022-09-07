import { WeaponSlotId } from "@app/types"

const DISPLAY_NAMES: Record<WeaponSlotId, string> = {
    "R1": "Right Hand Armament 1",
    "R2": "Right Hand Armament 2",
    "R3": "Right Hand Armament 3",
    "L1": "Left Hand Armament 1",
    "L2": "Left Hand Armament 2",
    "L3": "Left Hand Armament 3",
}

export const weaponSlotDisplayName = (slotId: WeaponSlotId): string => {
    return DISPLAY_NAMES?.[slotId] ?? ""
}
