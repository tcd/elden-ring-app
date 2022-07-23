import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { Spell } from "@app/types"
import { CONFIG } from "@app/util"
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

const _initialState = CONFIG.production() ? INITIAL_SPELLS_STATE : INITIAL_SPELLS_STATE

export const SpellsSlice = createSlice({
    name: FeatureKeys.Spells,
    initialState: _initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
