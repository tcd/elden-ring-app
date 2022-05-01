import { EquipmentEffect } from "@types"

export interface Talisman {
    id?: number
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
