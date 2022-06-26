import { BaseEntity } from "@app/types"

export interface WeaponSkill extends BaseEntity {
    name: string
    description: string
    ash_of_war?: boolean
    is_chargeable?: boolean
    can_be_applied_to?: string[]
    compatible_weapon_affinities: string[]
    compatible_weapon_types: string[]
}
