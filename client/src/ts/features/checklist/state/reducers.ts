import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { ChecklistState } from "./state"

export const reducers = {
    toggleObtained: (state: ChecklistState, action: PayloadAction<string>)  => {
        state.obtainedResources[action.payload] = (!state.obtainedResources[action.payload])
    },
}
