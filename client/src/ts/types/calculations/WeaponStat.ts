import { WeaponStatData } from "./WeaponStatData"

export interface WeaponStat extends WeaponStatData {
    id: number
    name: string
    display_name: string
    weapon_id: number
    weapon_affinity_id: number
    attack_element_correct_param_id: number
}
