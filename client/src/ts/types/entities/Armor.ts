import { BaseEntity, EquipmentEffect } from "@types"

export enum ArmorType {
    Head = "Head",
    Chest = "Chest",
    Arms = "Arms",
    Legs = "Legs",
}

export interface ArmorSet {
    [ArmorType.Head]?:  string
    [ArmorType.Chest]?: string
    [ArmorType.Arms]?:  string
    [ArmorType.Legs]?:  string
}

export interface Armor extends BaseEntity {
    name: string
    image_url: string
    armor_type: ArmorType
    weight: number
    poise?: number
    sort_group?: ArmorSortGroup

    effects?: EquipmentEffect[]
    // tags?: string[]

    // Resistance
    immunity?: number
    robustness?: number
    focus?: number
    vitality?: number

    // Damage Negation
    physical?: number
    vs_strike?: number
    vs_slash?: number
    vs_pierce?: number
    magic?: number
    fire?: number
    lightning?: number
    holy?: number
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
