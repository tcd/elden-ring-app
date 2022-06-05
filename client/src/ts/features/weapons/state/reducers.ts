import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { isBlank } from "@app/util"
import { BuilderActions } from "@app/features/builder"
import { WeaponsState } from "./state"

export const reducers = {
    setActiveName(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) { return }
        state.slots[activeSlotId].weapon_name = action.payload.name
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
