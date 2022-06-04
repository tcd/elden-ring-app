// import { WeaponScalingStatData } from "./WeaponScalingStatData"
// import { WeaponAttackStatData } from "./WeaponAttackStatData"
import { WeaponStatData } from "./WeaponStatData"

export interface WeaponStat extends WeaponStatData {
    name: string
    weapon_id: number
    weapon_affinity_id: number
}
