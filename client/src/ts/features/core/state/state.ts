import { createSlice } from "@reduxjs/toolkit"

import type { PageName } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface CoreState {
    /**
     * Always true.
     *
     * Can be used to determine if redux initialization is complete.
     */
    reduxReady: boolean
    sideNavOpened: boolean
    pageName: PageName
    preferences: {
        sounds: boolean
        console: "Xbox" | "PlayStation"
    }
}

export const INITIAL_CORE_STATE: CoreState = {
    reduxReady: true,
    sideNavOpened: false,
    pageName: null,
    preferences: {
        sounds: false,
        console: "Xbox",
    },
}

export const CoreSlice = createSlice({
    name: FeatureKeys.Core,
    initialState: INITIAL_CORE_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
