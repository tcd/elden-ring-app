import { PayloadAction } from "@reduxjs/toolkit"

import {
    WeaponSlotId,
    WeaponAffinityName,
    DEFAULT_WEAPON_SETTINGS,
} from "@app/types"
import { isBlank } from "@app/util"
import { WeaponsState } from "./state"

export const reducers = {
    openWeaponsMenu(state: WeaponsState, action: PayloadAction<{ id: WeaponSlotId }>) {
        state.oldWeapon = {
            ...state.slots[action.payload.id],
        }
        state.activeSlotId = action.payload.id
    },
    closeWeaponsMenu(state: WeaponsState) {
        state.activeSlotId = null
        state.oldWeapon = null
    },
    removeWeapon(state: WeaponsState) {
        state.slots[state.activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
        }
    },
    setActiveName(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
            weapon_name: action.payload.name,
        }
    },
    setAffinity(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId].affinity_name = action.payload.name as WeaponAffinityName
    },
}
