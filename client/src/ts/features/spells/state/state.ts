import { createSlice } from "@reduxjs/toolkit"

import { Spell } from "@app/types"
import { FEATURE_KEYS, CONFIG } from "@app/util"
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
    name: FEATURE_KEYS.Spells,
    initialState: _initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
