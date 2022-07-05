import { createSlice } from "@reduxjs/toolkit"

import {
    Attributes,
    KitchenSink,
    RequestState,
    StartingClassName,
} from "@app/types"
import { FEATURE_KEYS, CONFIG } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export type BuilderMenu =
    | null
    | "armor"
    | "weapon"
    | "talisman"
    | "spell"
    | "starting-class"

// Define a type for the slice state
export interface BuilderState {
    errors: any[]
    everythingRequest: RequestState<KitchenSink>
    attributes: Attributes
    currentMenu?: BuilderMenu
    whichCharacterStatus: "A" | "B"
    actionMenuDescription: string
    startingClassName: StartingClassName
    pendingStartingClassName: StartingClassName
    confirmingStartingClass: boolean
}

// Define the initial state using that type
const initialState: BuilderState = {
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
    currentMenu: null,
    whichCharacterStatus: "A",
    actionMenuDescription: "",
    startingClassName: null,
    pendingStartingClassName: null,
    confirmingStartingClass: false,
}

const myBuild: BuilderState = {
    ...initialState,
    startingClassName: StartingClassName.Samurai,
    // currentMenu: "starting-class",
    attributes: {
        "vigor":        30,
        "mind":         30,
        "endurance":    30,
        "strength":     30,
        "dexterity":    30,
        "intelligence": 30,
        "faith":        30,
        "arcane":       30,
    },
    // attributes: {
    //     "vigor":        50,
    //     "mind":         40,
    //     "endurance":    60,
    //     "strength":     80,
    //     "dexterity":    50,
    //     "intelligence": 30,
    //     "faith":        80,
    //     "arcane":       30,
    // },
}

// const _initialState = CONFIG.production() ? initialState : myBuild
const _initialState = initialState

export const BuilderSlice = createSlice({
    name:          FEATURE_KEYS.Builder,
    initialState:  _initialState,
    reducers:      reducers,
    extraReducers: extraReducers,
})
