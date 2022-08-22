import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { reducers, extraReducers } from "./reducers"

export interface CharacterStatusState {
    whichCharacterStatus: "A" | "B"
}

export const INITIAL_CHARACTER_STATUS_STATE: CharacterStatusState = {
    whichCharacterStatus: "A",
}

const _initialState = INITIAL_CHARACTER_STATUS_STATE

export const CharacterStatusSlice = createSlice({
    name:          FeatureKeys.CharacterStatus,
    initialState:  _initialState,
    reducers:      reducers,
    extraReducers: extraReducers,
})
