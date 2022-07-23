import { BaseEntity } from "@app/types"

export interface QuickItem extends BaseEntity {
    name: string
    hp_cost?: number
    fp_cost?: number
}
