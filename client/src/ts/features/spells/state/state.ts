import { createSlice } from "@reduxjs/toolkit"

import { Spell } from "@app/types"
import { FEATURE_KEYS, CONFIG } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export interface SpellsState {
    activeName: string
    spellNames: string[]
}

const initialState: SpellsState = {
    activeName: "Death Lightning",
    spellNames: [],
}

const _initialState = CONFIG.production() ? initialState : initialState

export const SpellsSlice = createSlice({
    name: FEATURE_KEYS.Spells,
    initialState: _initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
