import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { CoreActions } from "@app/features/core"
import { ChecklistState, INITIAL_CHECKLIST_STATE } from "./state"

export const reducers = {
    toggleObtained: (state: ChecklistState, action: PayloadAction<string>)  => {
        state.obtainedResources[action.payload] = (!state.obtainedResources[action.payload])
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<ChecklistState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_CHECKLIST_STATE)
}
