import { BaseEntity, EquipmentEffect } from "@app/types"

export type TalismanSortGroup =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8

export const TALISMAN_SORT_GROUPS: TalismanSortGroup[] = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

export interface Talisman extends BaseEntity {
    name: string
    description: string
    longDescription?: string
    weight: number
    restricts: string[]
    location?: string
    effects?: EquipmentEffect[]
    tags?: string[]
    sort_group?: TalismanSortGroup
}
