import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { SetActiveEquipmentSlotPayload } from "@app/types"
import { CoreActions } from "@app/features/core"
import { logger } from "@app/util"

import {
    EquipmentState,
    INITIAL_EQUIPMENT_STATE as INITIAL_STATE,
} from "./state"
import { navigate } from "./thunks"


export const reducers = {
    clickSlot(state: EquipmentState, { payload: { type, id } }: PayloadAction<SetActiveEquipmentSlotPayload>) {
        state.activeType   = type
        state.activeSlotId = id
    },
    setActiveSlot(state: EquipmentState, { payload: { type, id } }: PayloadAction<SetActiveEquipmentSlotPayload>) {
        state.activeType   = type
        state.activeSlotId = id
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<EquipmentState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(navigate.pending, (state, _action) => state)
        .addCase(navigate.rejected, (_state, action) => { logger.warn(action.payload) })
        .addCase(navigate.fulfilled, (state, { payload: { type, id } }) => {
            state.activeType   = type
            state.activeSlotId = id
        })
}
