import { createSlice } from "@reduxjs/toolkit"

import type { HeaderIconId, PageName } from "@app/types"
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
    /** overrides `pageName` */
    pageTitle: string
    /** overrides `pageName` */
    pageIcon: HeaderIconId
    preferences: {
        sounds: boolean
        console: "Xbox" | "PlayStation" // | "PC"
    }
}

export const INITIAL_CORE_STATE: CoreState = {
    reduxReady: true,
    sideNavOpened: false,
    pageName: null,
    pageTitle: null,
    pageIcon: null,
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
