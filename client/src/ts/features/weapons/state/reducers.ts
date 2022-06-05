import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    // WeaponSlotId,
    DEFAULT_WEAPON_SETTINGS,
} from "@app/types"
import { isBlank } from "@app/util"
import { BuilderActions } from "@app/features/builder"
import { WeaponsState } from "./state"

export const reducers = {
    removeWeapon(state: WeaponsState) {
        state.slots[state.activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
        }
    },
    setActiveName(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) { return }
        state.slots[activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
            weapon_name: action.payload.name,
        }
    },
    setAffinity(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) { return }
        state.slots[activeSlotId].affinity_name = action.payload.name
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<WeaponsState>) => {
    builder
        .addCase(BuilderActions.openWeaponModal, (state, action) => {
            state.activeSlotId = action.payload.id
        })
}
