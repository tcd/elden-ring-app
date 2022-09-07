import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { AmmunitionSlotId } from "@app/types"
import { CoreActions } from "@app/features/core"

import { AmmunitionState, INITIAL_AMMUNITION_STATE } from "./state"

export const reducers = {
    setActiveSlotId(state: AmmunitionState, { payload: { id } }: PayloadAction<{ id: AmmunitionSlotId }>) {
        state.activeSlotId = id
    },
    clearActiveSlotId(state: AmmunitionState) {
        state.activeSlotId = null
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<AmmunitionState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_AMMUNITION_STATE)
}
