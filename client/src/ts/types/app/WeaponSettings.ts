import { WeaponAffinityName } from "@app/types"

export interface WeaponSettings {
    // weapon_id: number
    weapon_name: string
    level: number
    affinity_name: WeaponAffinityName
    weapon_skill_name?: string
}

// FIXME: move out of `@app/types`
export const DEFAULT_WEAPON_SETTINGS: WeaponSettings = {
    // weapon_id: null,
    weapon_name: null,
    level: 0,
    affinity_name: "Standard",
    weapon_skill_name: null,
}
