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
    // resistance: {
        immunity?: number
        robustness?: number
        focus?: number
        vitality?: number
        poise?: number
    // }
    // damageNegation: {
        physical?: number
        vs_strike?: number
        vs_slash?: number
        vs_pierce?: number
        magic?: number
        fire?: number
        lightning?: number
        holy?: number
    // }
    effects?: EquipmentEffect[]
    tags?: string[]
}
