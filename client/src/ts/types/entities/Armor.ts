import { BaseEntity, EquipmentEffect } from "@types"

export enum ArmorType {
    Head  = "Head",
    Chest = "Chest",
    Arms  = "Arms",
    Legs  = "Legs",
}

export interface ArmorSet {
    [ArmorType.Head]?:  string
    [ArmorType.Chest]?: string
    [ArmorType.Arms]?:  string
    [ArmorType.Legs]?:  string
}

export interface Armor extends BaseEntity {
    name: string
    armor_type: ArmorType
    weight: Decimal
    poise?: number
    sort_group?: ArmorSortGroup

    effects?: EquipmentEffect[]
    // tags?: string[]

    // Resistance
    immunity?: Integer
    robustness?: Integer
    focus?: Integer
    vitality?: Integer

    // Damage Negation
    physical?: Decimal
    vs_strike?: Decimal
    vs_slash?: Decimal
    vs_pierce?: Decimal
    magic?: Decimal
    fire?: Decimal
    lightning?: Decimal
    holy?: Decimal
}

export type ArmorSortGroup =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11

export const ARMOR_SORT_GROUPS: ArmorSortGroup[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
