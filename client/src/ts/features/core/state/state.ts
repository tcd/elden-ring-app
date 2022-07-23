import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { PageName } from "@app/types"
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
}

export const INITIAL_CORE_STATE: CoreState = {
    reduxReady: true,
    sideNavOpened: false,
    pageName: null,
}

export const CoreSlice = createSlice({
    name: FeatureKeys.Core,
    initialState: INITIAL_CORE_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
