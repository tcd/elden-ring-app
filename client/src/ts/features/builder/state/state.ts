import { createSlice } from "@reduxjs/toolkit"

import {
    Attributes,
    KitchenSink,
    RequestState,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"

// Define a type for the slice state
export interface BuilderState {
    errors: any[]
    everythingRequest: RequestState<KitchenSink>
    attributes: Attributes
    whichCharacterStatus: "A" | "B"
    actionMenuDescription: string
    mobileTab: "level" | "equipment" | "status"
}

// Define the initial state using that type
export const INITIAL_BUILDER_STATE: BuilderState = {
    errors: [],
    everythingRequest: {
        status: "idle",
        response: null,
    },
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
    whichCharacterStatus: "A",
    actionMenuDescription: "",
    mobileTab: "equipment",
}

const myBuild: BuilderState = {
    ...INITIAL_BUILDER_STATE,
    // attributes: {
    //     "vigor":        30,
    //     "mind":         30,
    //     "endurance":    30,
    //     "strength":     30,
    //     "dexterity":    30,
    //     "intelligence": 30,
    //     "faith":        30,
    //     "arcane":       30,
    // },
    // attributes: {
    //     "vigor":        50,
    //     "mind":         40,
    //     "endurance":    60,
    //     "strength":     80,
    //     "dexterity":    50,
    //     "intelligence": 30,
    //     "faith":        80,
    //     "arcane":       33,
    // },
    attributes: {
        vigor:        38,
        mind:         29,
        endurance:    47,
        strength:     68,
        dexterity:    35,
        intelligence: 21,
        faith:        72,
        arcane:       25,
    },
}

// const _initialState = CONFIG.production() ? initialState : myBuild
const _initialState = INITIAL_BUILDER_STATE

export const BuilderSlice = createSlice({
    name:          FEATURE_KEYS.Builder,
    initialState:  _initialState,
    reducers:      reducers,
    extraReducers: extraReducers,
})
