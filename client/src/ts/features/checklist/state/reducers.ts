import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { CoreActions } from "@app/features/core"
import { ImportExportActions } from "@app/features/import-export"

import type { ChecklistState } from "./state"
import { INITIAL_CHECKLIST_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    toggleObtained: (state: ChecklistState, action: PayloadAction<string>)  => {
        state.obtainedResources[action.payload] = (!state.obtainedResources[action.payload])
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<ChecklistState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(ImportExportActions.importData.fulfilled, (_, { payload: { checklist = {} } }): ChecklistState => ({
            ...INITIAL_STATE,
            // @ts-ignore: next-line
            obtainedResources: { ...checklist },
            importComplete: true,
        }))
}
