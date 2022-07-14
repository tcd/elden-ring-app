import { createSlice } from "@reduxjs/toolkit"

import { StartingClassName } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export interface StartingClassState {
    /**
     * The name of the character class used for the build.
     *
     * Used to calculate much other data in the application.
     */
    startingClassName: StartingClassName
    pendingStartingClassName: StartingClassName
    confirmingStartingClass: boolean
}

export const INITIAL_STARTING_CLASS_STATE: StartingClassState = {
    startingClassName: null,
    pendingStartingClassName: null,
    confirmingStartingClass: false,
}

export const StartingClassSlice = createSlice({
    name:          FEATURE_KEYS.StartingClass,
    initialState:  INITIAL_STARTING_CLASS_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
