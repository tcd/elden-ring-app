import { createSlice } from "@reduxjs/toolkit"

import {
    ArmorSet,
    ArmorType,
    Attributes,
    KitchenSink,
    RequestState,
    StartingClassName,
    TalismanSet,
    TalismanSlotId,
    WeaponSet,
    WeaponSlotId,
} from "@types"
import { FEATURE_KEYS } from "@util"
import { reducers, extraReducers } from "./reducers"

// Define a type for the slice state
export interface BuilderState {

    errors: any[]

    everythingRequest: RequestState<KitchenSink>

    whichCharacterStatus: "A" | "B"

    startingClassName: StartingClassName,

    attributes: Attributes
    armor_names: ArmorSet
    talisman_names: TalismanSet
    weapon_names: WeaponSet

    talisman: {
        modal_open: boolean
        active_number: TalismanSlotId
    }
    weapon: {
        modal_open: boolean
        active_slot: WeaponSlotId
    }
    armor: {
        modal_open: boolean
        active_type: ArmorType
    }
}

// Define the initial state using that type
const initialState: BuilderState = {

    errors: [],

    everythingRequest: {
        status: "idle",
        response: null,
    },

    whichCharacterStatus: "B",

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

    armor_names: {
        Head:  null,
        Chest: null,
        Arms:  null,
        Legs:  null,
    },

    talisman_names: {
        "1": null,
        "2": null,
        "3": null,
        "4": null,
    },

    weapon_names: {
        R1: null,
        R2: null,
        R3: null,
        L1: null,
        L2: null,
        L3: null,
    },

    talisman: {
        modal_open: false,
        active_number: null,
    },
    weapon: {
        modal_open: false,
        active_slot: null,
    },
    armor: {
        modal_open: false,
        active_type: null,
    },
}

const myBuild: BuilderState = {
    ...initialState,

    startingClassName: StartingClassName.Samurai,

    attributes: {
        "vigor":        50,
        "mind":         40,
        "endurance":    60,
        "strength":     80,
        "dexterity":    45,
        "intelligence": 26,
        "faith":        80,
        "arcane":       24,
    },

    // talisman_names: {
    //     "1": "Silver Scarab",
    //     "2": "Bull-Goat's Talisman",
    //     "3": "Gold Scarab",
    //     "4": "Great-Jar's Arsenal",
    // },

    talisman_names: {
        "1": "Red-Feathered Branchsword",
        "2": "Ritual Sword Talisman",
        "3": "Blue-Feathered Branchsword",
        "4": "Ritual Shield Talisman",
    },

    armor_names: {
        // Head:  "Banished Knight Helm (Altered)",
        Chest: "Knight Armor",
        Arms:  "Knight Gauntlets",
        Legs:  "Knight Greaves",
    },

    weapon_names: {
        ...initialState.weapon_names,
        R1: "Maliketh's Black Blade",
        R3: "Erdtree Seal",
        L1: "Fingerprint Stone Shield",
        L3: "Erdtree Seal",
    },

//     weapon: {
//         active_slot: "R1",
//         modal_open: true,
//     },
}

export const BuilderSlice = createSlice({
    name:          FEATURE_KEYS.Builder,
    initialState:  myBuild,
    reducers:      reducers,
    extraReducers: extraReducers,
})
