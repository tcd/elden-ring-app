import { createSlice } from "@reduxjs/toolkit"

import type { ArmorType, ArmorSet } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface ArmorState {
    armorNames: ArmorSet
    activeType?: "all" | ArmorType
    oldName: string
    menuHasScrolled: boolean
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
}
const initialDevState: ArmorState = {
    ...INITIAL_ARMOR_STATE,
    armorNames: {
        ...INITIAL_ARMOR_STATE.armorNames,
        Head: "Banished Knight Helm",
    },
}

export const ArmorSlice = createSlice({
    name: FeatureKeys.Armor,
    initialState: INITIAL_ARMOR_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
