import { AmmunitionType } from "@app/constants"
import { BaseEntity } from "@app/types"

export interface Ammunition extends BaseEntity {
    name: string
    ammunition_type: AmmunitionType
    physical_damage_types: string[]
}
