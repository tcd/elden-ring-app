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
