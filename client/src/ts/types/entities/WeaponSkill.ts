import { BaseEntity } from "@app/types"

export interface WeaponSkill extends BaseEntity {
    name: string
    description: string
    ash_of_war?: boolean
    is_chargeable?: boolean
    sort_group: Integer
    sort_order: Integer
    default_affinity?: string
    compatible_weapon_affinities: string[]
    compatible_weapon_types: string[]
}

export type WeaponSkillSortGroup =
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

export const WEAPON_SKILL_SORT_GROUPS: WeaponSkillSortGroup[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
