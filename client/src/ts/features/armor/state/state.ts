import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys, ArmorType } from "@app/constants"
import { ArmorSet } from "@app/types"
import { reducers, extraReducers } from "./redeucers"

export interface ArmorState {
    armorNames: ArmorSet
    activeType?: "all" | ArmorType
    oldName: string
    menuHasScrolled: boolean
    mobileTab: "grid" | "detail" | "status"
}

export const INITIAL_ARMOR_STATE: ArmorState = {
    armorNames: {
        Arms:  null,
        Chest: null,
        Head:  null,
        Legs:  null,
    },
    activeType: null,
    oldName: null,
    menuHasScrolled: false,
    mobileTab: "grid",
}
const initialDevState: ArmorState = {
    ...INITIAL_ARMOR_STATE,
    armorNames: {
        ...INITIAL_ARMOR_STATE.armorNames,
        Head: "Banished Knight Helm",
    },
}

// const _initialState = CONFIG.production() ? initialState : initialDevState
const _initialState = INITIAL_ARMOR_STATE

export const ArmorSlice = createSlice({
    name: FeatureKeys.Armor,
    initialState: _initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
