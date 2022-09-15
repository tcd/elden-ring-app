import type { BaseEntity } from "@app/types"
import { WeaponAffinities } from "@app/constants"

export type WeaponAffinityName = typeof WeaponAffinities[keyof typeof WeaponAffinities]

export interface WeaponAffinity extends BaseEntity {
    name: WeaponAffinityName
}
