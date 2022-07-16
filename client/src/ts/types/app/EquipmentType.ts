import { ArmorType, WeaponSlotId, TalismanSlotId } from "@app/constants"

export type EquipmentType = "Weapon" | "Armor" | "Talisman"
export type EquipmentSlotId = WeaponSlotId | ArmorType | TalismanSlotId

export const EQUIPMENT_SLOT_SORT_ORDER: Record<EquipmentSlotId, Integer> = {
    R1: 1,
    R2: 2,
    R3: 3,
    L1: 6,
    L2: 7,
    L3: 8,
    Head: 11,
    Chest: 12,
    Arms: 13,
    Legs: 14,
    "1": 15,
    "2": 16,
    "3": 17,
    "4": 18,
}
