import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import type {
    RequestState,
    BuildData,
} from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface ImportExportState {
    requests: {
        buildUrl: RequestState<string>
        importData: RequestState<BuildData>
    }
}

export const INITIAL_IMPORT_EXPORT_STATE: ImportExportState = {
    requests: {
        buildUrl:      { status: "idle", response: null },
        importData: { status: "idle", response: null },
    },
}

export const ImportExportSlice = createSlice({
    name:          FeatureKeys.ImportExport,
    initialState:  INITIAL_IMPORT_EXPORT_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
