import { createSlice } from "@reduxjs/toolkit"

import type { Spell } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface SpellsState {
    activeName: string
    activeIndex: number
    spellNames: string[]
}

export const INITIAL_SPELLS_STATE: SpellsState = {
    activeName: "Death Lightning",
    activeIndex: 0,
    spellNames: [],
}

export const SpellsSlice = createSlice({
    name: FeatureKeys.Spells,
    initialState: INITIAL_SPELLS_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
