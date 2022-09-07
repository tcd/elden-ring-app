import {
    ArmorType,
    WeaponSlotId,
    TalismanSlotId,
    AmmunitionSlotId,
    QuickItemSlotId,
} from "@app/types"

export type EquipmentType = "Weapon" | "Armor" | "Talisman" | "Ammunition" | "QuickItem"
export type EquipmentSlotId =
    | WeaponSlotId
    | ArmorType
    | TalismanSlotId
    | AmmunitionSlotId
    | QuickItemSlotId

export const EQUIPMENT_SLOT_SORT_ORDER: Record<EquipmentSlotId, Integer> = {
    R1:     1,
    R2:     2,
    R3:     3,
    A1:     4,
    A2:     5,
    L1:     6,
    L2:     7,
    L3:     8,
    B1:     9,
    B2:    10,
    Head:  11,
    Chest: 12,
    Arms:  13,
    Legs:  14,
    T1:    15,
    T2:    16,
    T3:    17,
    T4:    18,
    Q1:    19,
    Q2:    20,
    Q3:    21,
    Q4:    22,
    Q5:    23,
    Q6:    24,
    Q7:    25,
    Q8:    26,
    Q9:    27,
    Q10:   28,
}
