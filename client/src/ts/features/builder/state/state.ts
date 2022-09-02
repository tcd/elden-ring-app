import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import type {
    KitchenSink,
    RequestState,
} from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface BuilderState {
    errors: any[]
    everythingRequest: RequestState<KitchenSink>
}

export const INITIAL_BUILDER_STATE: BuilderState = {
    errors: [],
    everythingRequest: {
        status: "idle",
        response: null,
    },
}

export const BuilderSlice = createSlice({
    name:          FeatureKeys.Builder,
    initialState:  INITIAL_BUILDER_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
