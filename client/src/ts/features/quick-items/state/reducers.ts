import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { QuickItemSlotId } from "@app/constants"
import { CoreActions } from "@app/features/core"
import { QuickItemsState, INITIAL_QUICK_ITEMS_STATE } from "./state"

export const reducers = {
    setActiveSlot(state: QuickItemsState, { payload: { id } }: PayloadAction<{ id: QuickItemSlotId }>) {
        state.activeSlotId = id
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<QuickItemsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_QUICK_ITEMS_STATE)
}
