import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { AmmunitionSlotId } from "@app/constants"
import { CoreActions } from "@app/features/core"
import { AmmunitionState, INITIAL_AMMUNITION_STATE } from "./state"

export const reducers = {
    setActiveSlot(state: AmmunitionState, { payload: { id } }: PayloadAction<{ id: AmmunitionSlotId }>) {
        state.activeSlotId = id
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<AmmunitionState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_AMMUNITION_STATE)
}
