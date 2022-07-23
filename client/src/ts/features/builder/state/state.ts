import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import {
    KitchenSink,
    RequestState,
} from "@app/types"
import { reducers, extraReducers } from "./reducers"

export interface BuilderState {
    errors: any[]
    everythingRequest: RequestState<KitchenSink>
    whichCharacterStatus: "A" | "B"
    actionMenuDescription: string
    mobileTab: "level" | "equipment" | "status"
}

export const INITIAL_BUILDER_STATE: BuilderState = {
    errors: [],
    everythingRequest: {
        status: "idle",
        response: null,
    },
    whichCharacterStatus: "A",
    actionMenuDescription: "",
    mobileTab: "equipment",
}

const _initialState = INITIAL_BUILDER_STATE

export const BuilderSlice = createSlice({
    name:          FeatureKeys.Builder,
    initialState:  _initialState,
    reducers:      reducers,
    extraReducers: extraReducers,
})
