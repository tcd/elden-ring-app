import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    KitchenSink,
    AttributeName,
} from "@app/types"
import { STARTING_CLASSES } from "@app/data"
import { CoreActions } from "@app/features/core"
import { BuilderState, INITIAL_BUILDER_STATE } from "./state"
import { fetchEverything } from "./thunks"
import { selectCorrectedAttributeLevel } from "./selectors/for-reducers"

export const reducers = {
    cycleCharacterStatus(state: BuilderState, _action?: PayloadAction<"A" | "B">) {
        switch (state.whichCharacterStatus) {
            case null: state.whichCharacterStatus = "A"; break
            case "A":  state.whichCharacterStatus = "B"; break
            case "B":  state.whichCharacterStatus = "A"; break
            default:   state.whichCharacterStatus = "A"
        }
        // state.whichCharacterStatus = action.payload
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<BuilderState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_BUILDER_STATE)
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
