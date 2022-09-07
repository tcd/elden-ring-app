import type {
    ArmorType,
    WeaponSlotId,
    TalismanSlotId,
    AmmunitionSlotId,
    QuickItemSlotId,
} from "@app/types"

export type EquipmentType =
    | "Weapon"
    | "Armor"
    | "Talisman"
    | "Ammunition"
    | "QuickItem"

export type EquipmentSlotId =
    | WeaponSlotId
    | ArmorType
    | TalismanSlotId
    | AmmunitionSlotId
    | QuickItemSlotId
