import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { BuildData } from "@app/types"
import { CoreActions } from "@app/features/core"

import type { ImportExportState } from "./state"
import { INITIAL_IMPORT_EXPORT_STATE as INITIAL_STATE } from "./state"
import {
    buildUrl,
    importData,
} from "./thunks"

export const reducers = {}

export const extraReducers = (builder: ActionReducerMapBuilder<ImportExportState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        // ---------------------------------------------------------------------
        // Build Url
        // ---------------------------------------------------------------------
        .addCase(buildUrl.pending, (state) => {
            state.requests.buildUrl.status = "pending"
        })
        .addCase(buildUrl.rejected, (state, _action) => {
            state.requests.buildUrl.status = "rejected"
            // TODO: handle error
        })
        .addCase(buildUrl.fulfilled, (state, action: PayloadAction<string>) => {
            state.requests.buildUrl.status = "fulfilled"
            state.requests.buildUrl.response = action.payload
        })
        // ---------------------------------------------------------------------
        // Import Data
        // ---------------------------------------------------------------------
        .addCase(importData.pending, (state) => {
            state.requests.importData.status = "pending"
        })
        .addCase(importData.rejected, (state, action) => {
            state.requests.importData.status = "rejected"
            // TODO: handle error
            state.requests.importData.error = action.payload
        })
        .addCase(importData.fulfilled, (state, action: PayloadAction<BuildData>) => {
            state.requests.importData.status = "fulfilled"
            state.requests.importData.response = action.payload
        })
}
