import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { QuickItemSlotId } from "@app/types"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"
import { EquipmentActions } from "@app/features/equipment"

import {
    QuickItemsState,
    INITIAL_QUICK_ITEMS_STATE as INITIAL_STATE,
} from "./state"

export const reducers = {
    setActiveSlot(state: QuickItemsState, { payload: { id } }: PayloadAction<{ id: QuickItemSlotId }>) {
        state.activeSlotId = id
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<QuickItemsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(EquipmentActions.navigate.fulfilled, (state, { payload: { id, type } }) => {
            if (type === "QuickItem") {
                // @ts-ignore: next-line
                state.activeSlotId = id
            }
        })
        .addCase(RoutingActions.locationChange, (state, { payload }) => {
            if (payload?.pathParams?.quickItemSlotId) {
                if (isBlank(state?.activeSlotId)) {
                    state.activeSlotId = payload.pathParams.quickItemSlotId
                }
            } else {
                if (payload?.location?.pathname != "/") {
                    state.activeSlotId = INITIAL_STATE.activeSlotId
                }
            }
        })
}
