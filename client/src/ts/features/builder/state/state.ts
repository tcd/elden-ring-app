import { createSlice } from "@reduxjs/toolkit"

import {
    ArmorType,
    Attributes,
    KitchenSink,
    RequestState,
    StartingClassName,
    TalismanSet,
    TalismanSlotId,
    WeaponSlotId,
} from "@types"
import { FEATURE_KEYS } from "@util"
import { reducers, extraReducers } from "./reducers"

export type BuilderMenu = null |  "armor" | "weapon" | "talisman" | "spell" | "starting-class"

// Define a type for the slice state
export interface BuilderState {

    errors: any[]

    everythingRequest: RequestState<KitchenSink>

    whichCharacterStatus: "A" | "B"

    currentMenu?: BuilderMenu

    actionMenuDescription: string

    startingClassName: StartingClassName,

    attributes: Attributes
}

// Define the initial state using that type
const initialState: BuilderState = {

    errors: [],

    everythingRequest: {
        status: "idle",
        response: null,
    },

    whichCharacterStatus: "A",

    currentMenu: null,
    actionMenuDescription: "",

    startingClassName: null,

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

const myBuild: BuilderState = {
    ...initialState,

    startingClassName: StartingClassName.Samurai,

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

export const BuilderSlice = createSlice({
    name:          FEATURE_KEYS.Builder,
    initialState:  myBuild,
    reducers:      reducers,
    extraReducers: extraReducers,
})
