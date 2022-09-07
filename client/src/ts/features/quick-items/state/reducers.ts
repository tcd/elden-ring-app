import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { QuickItemSlotId } from "@app/types"
import { CoreActions } from "@app/features/core"

import { QuickItemsState, INITIAL_QUICK_ITEMS_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    setActiveSlot(state: QuickItemsState, { payload: { id } }: PayloadAction<{ id: QuickItemSlotId }>) {
        state.activeSlotId = id
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<QuickItemsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
}
