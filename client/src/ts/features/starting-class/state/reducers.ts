import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { StartingClassName } from "@app/constants"
import { CoreActions } from "@app/features/core"
import { StartingClassState, INITIAL_STARTING_CLASS_STATE } from "./state"

export const reducers = {
    setPendingStartingClass(state: StartingClassState, { payload: { name } }: PayloadAction<{ name: StartingClassName }>) {
        state.pendingStartingClassName = name
        state.confirmingStartingClass = true
    },
    openStartingClassConfirmation(state: StartingClassState) {
        state.confirmingStartingClass = true
    },
    cancelStartingClassConfirmation(state: StartingClassState) {
        state.confirmingStartingClass = false
    },
    /** Action payload used by other slices */
    confirmStartingClassName(state: StartingClassState, _action: PayloadAction<{ name: string }>) {
        state.startingClassName = state.pendingStartingClassName
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<StartingClassState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STARTING_CLASS_STATE)
}
