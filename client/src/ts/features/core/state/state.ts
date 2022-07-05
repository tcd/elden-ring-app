import { createSlice } from "@reduxjs/toolkit"

import { FEATURE_KEYS } from "@util"
import { reducers } from "./reducers"

export interface CoreState {
    /**
     * Always true.
     *
     * Can be used to determine if redux initialization is complete.
     */
    reduxReady: boolean
    darkModeEnabled: boolean
    userMenuOpened: boolean
    sideNavOpened: boolean
    /** Sections in the side nav that are open */
    expandedSections: string[]
}

const initialState: CoreState = {
    reduxReady: true,
    darkModeEnabled: true,
    userMenuOpened: false,
    sideNavOpened: false,
    expandedSections: [],
}

export const CoreSlice = createSlice({
    name: FEATURE_KEYS.Core,
    initialState,
    reducers: reducers,
})
