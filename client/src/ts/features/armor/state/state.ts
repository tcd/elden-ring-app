import { createSlice } from "@reduxjs/toolkit"

import {
    ArmorType,
    ArmorSet,
} from "@app/types"
import { CONFIG, FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export interface ArmorState {
    armorNames: ArmorSet
    activeType?: "all" | ArmorType
    oldName: string
    menuHasScrolled: boolean
}

const initialState: ArmorState = {
    armorNames: {
        Arms: null,
        Chest: null,
        Head: null,
        Legs: null,
    },
    activeType: "all",
    oldName: null,
    menuHasScrolled: false,
}
const initialDevState: ArmorState = {
    ...initialState,
    armorNames: {
        ...initialState.armorNames,
        Head: "Banished Knight Helm",
    },
}

// const _initialState = CONFIG.production() ? initialState : initialDevState
const _initialState = initialState

export const ArmorSlice = createSlice({
    name: FEATURE_KEYS.Armor,
    initialState: _initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
