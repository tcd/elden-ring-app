import { BaseEntity } from "@app/types"

export interface WeaponSkill extends BaseEntity {
    name: string
    image_url: string
    description: string
    ash_of_war?: boolean
    is_chargeable?: boolean
    can_be_applied_to?: string[]
}
