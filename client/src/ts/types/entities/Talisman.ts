import { BaseEntity, EquipmentEffect } from "@types"

export interface Talisman extends BaseEntity {
    name: string
    image_url: string
    description: string
    longDescription?: string
    weight: number
    restricts: string[]
    location?: string
    effects?: EquipmentEffect[]
    tags?: string[]
}

export type TalismanSlotId =
    | "1"
    | "2"
    | "3"
    | "4"

export const TalismanSlotIds: TalismanSlotId[] = [ "1", "2", "3", "4" ]

export interface TalismanSet {
    "1"?: string
    "2"?: string
    "3"?: string
    "4"?: string
}
