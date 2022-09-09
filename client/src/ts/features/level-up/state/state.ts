import { createSlice } from "@reduxjs/toolkit"

import type { Attributes } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface LevelUpState {
    attributes: Attributes
    importComplete: boolean
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
    importComplete: false,
}

// const initialDevState: LevelUpState = {
//     attributes: {
//         ...INITIAL_LEVEL_UP_STATE.attributes,
//     },
//     // attributes: {
//     //     "vigor":        30,
//     //     "mind":         30,
//     //     "endurance":    30,
//     //     "strength":     30,
//     //     "dexterity":    30,
//     //     "intelligence": 30,
//     //     "faith":        30,
//     //     "arcane":       30,
//     // },
//     // attributes: {
//     //     "vigor":        50,
//     //     "mind":         40,
//     //     "endurance":    60,
//     //     "strength":     80,
//     //     "dexterity":    50,
//     //     "intelligence": 30,
//     //     "faith":        80,
//     //     "arcane":       33,
//     // },
//     // attributes: {
//     //     vigor:        38,
//     //     mind:         29,
//     //     endurance:    47,
//     //     strength:     68,
//     //     dexterity:    35,
//     //     intelligence: 21,
//     //     faith:        72,
//     //     arcane:       25,
//     // },
// }

export const LevelUpSlice = createSlice({
    name:          FeatureKeys.LevelUp,
    initialState:  INITIAL_LEVEL_UP_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
