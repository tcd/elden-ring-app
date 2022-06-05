export interface WeaponSettings {
    // weapon_id: number
    weapon_name: string
    level: number
    affinity_name: string
}

export const DEFAULT_WEAPON_SETTINGS: WeaponSettings = {
    // weapon_id: null,
    weapon_name: null,
    level: 0,
    affinity_name: "Standard",
}
