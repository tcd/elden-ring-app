import type {
    EquipmentSlotId,
    EquipmentType,
} from "@app/types"

export const EQUIPMENT_SLOT_TYPES: Record<EquipmentSlotId, EquipmentType> = {
    R1:    "Weapon",
    R2:    "Weapon",
    R3:    "Weapon",
    A1:    "Ammunition",
    A2:    "Ammunition",
    L1:    "Weapon",
    L2:    "Weapon",
    L3:    "Weapon",
    B1:    "Ammunition",
    B2:    "Ammunition",
    Head:  "Armor",
    Chest: "Armor",
    Arms:  "Armor",
    Legs:  "Armor",
    T1:    "Talisman",
    T2:    "Talisman",
    T3:    "Talisman",
    T4:    "Talisman",
    Q1:    "QuickItem",
    Q2:    "QuickItem",
    Q3:    "QuickItem",
    Q4:    "QuickItem",
    Q5:    "QuickItem",
    Q6:    "QuickItem",
    Q7:    "QuickItem",
    Q8:    "QuickItem",
    Q9:    "QuickItem",
    Q10:   "QuickItem",
}

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
