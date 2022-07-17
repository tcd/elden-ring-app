import { createSlice } from "@reduxjs/toolkit"

import { Attributes } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export interface LevelUpState {
    attributes: Attributes
}

export const INITIAL_LEVEL_UP_STATE: LevelUpState = {
    attributes: {
        "vigor":        0,
        "mind":         0,
        "endurance":    0,
        "strength":     0,
        "dexterity":    0,
        "intelligence": 0,
        "faith":        0,
        "arcane":       0,
    },
}

export const LevelUpSlice = createSlice({
    name:          FEATURE_KEYS.LevelUp,
    initialState:  INITIAL_LEVEL_UP_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})