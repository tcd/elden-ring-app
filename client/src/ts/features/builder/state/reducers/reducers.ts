import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { KitchenSink } from "@app/types"
import { CoreActions } from "@app/features/core"

import {
    BuilderState,
    INITIAL_BUILDER_STATE as INITIAL_STATE,
} from "../state"
import { fetchEverything } from "../thunks"

export const reducers = {}

export const extraReducers = (builder: ActionReducerMapBuilder<BuilderState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        // ---------------------------------------------------------------------
        // Fetch Everything
        // ---------------------------------------------------------------------
        .addCase(fetchEverything.pending, (state) => {
            state.everythingRequest.status = "pending"
        })
        .addCase(fetchEverything.rejected, (state, action) => {
            state.everythingRequest.status = "rejected"
            state.errors.push(action.error.message)
        })
        .addCase(fetchEverything.fulfilled, (state, action: PayloadAction<KitchenSink>) => {
            state.everythingRequest.status = "fulfilled"
            state.everythingRequest.response = action.payload
        })
}
