import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    KitchenSink,
    StartingClassName,
    AttributeName,
} from "@app/types"
import { STARTING_CLASSES } from "@app/data"
import { BuilderState } from "./state"
import { fetchEverything } from "./thunks"
import { selectCorrectedAttributeLevel } from "./selectors/for-reducers"

export const reducers = {
    incrementAttribute(state: BuilderState, { payload: { name } }: PayloadAction<{ name: AttributeName }>) {
        const correctedLevel = selectCorrectedAttributeLevel(state, name)
        if (correctedLevel < 99) {
            state.attributes[name]++
        }
    },
    decrementAttribute(state: BuilderState, { payload: { name } }: PayloadAction<{ name: AttributeName }>) {
        const baseValue = STARTING_CLASSES.find(x => x.name == state.startingClassName)[name]
        const currentValue = selectCorrectedAttributeLevel(state, name)
        if (currentValue <= baseValue) {
            return state
        } else  {
            state.attributes[name]--
            return state
        }
    },
    cycleCharacterStatus(state: BuilderState, _action?: PayloadAction<"A" | "B">) {
        switch (state.whichCharacterStatus) {
            case null: state.whichCharacterStatus = "A"; break
            case "A":  state.whichCharacterStatus = "B"; break
            case "B":  state.whichCharacterStatus = "A"; break
            default:   state.whichCharacterStatus = "A"
        }
        // state.whichCharacterStatus = action.payload
    },
    // =========================================================================
    // Starting Class
    // =========================================================================
    setPendingStartingClass(state: BuilderState, action: PayloadAction<{ name: string }>) {
        const className = action.payload.name as StartingClassName
        state.pendingStartingClassName = className
        state.confirmingStartingClass = true
    },
    openStartingClassConfirmation(state: BuilderState) {
        state.confirmingStartingClass = true
    },
    cancelStartingClassConfirmation(state: BuilderState) {
        state.confirmingStartingClass = false
    },
    confirmStartingClassName(state: BuilderState, action: PayloadAction<{ name: string }>) {
        state.startingClassName = state.pendingStartingClassName
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<BuilderState>) => {
    builder
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
