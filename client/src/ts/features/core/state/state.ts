import { createSlice } from "@reduxjs/toolkit"

import { PageName } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
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

const initialState: CoreState = {
    reduxReady: true,
    sideNavOpened: false,
    pageName: null,
}

export const CoreSlice = createSlice({
    name: FEATURE_KEYS.Core,
    initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
