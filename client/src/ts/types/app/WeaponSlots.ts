import type { WeaponSlotId, WeaponSettings } from "@app/types"

export type WeaponSlots = Record<WeaponSlotId, WeaponSettings>

export interface WeaponSlotData {
    name: string
    displayName: string
    empty: boolean
}

export type WeaponSlotsData = Record<WeaponSlotId, WeaponSlotData>
