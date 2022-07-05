import { createSlice } from "@reduxjs/toolkit"

import { Spell } from "@types"
import { FEATURE_KEYS, CONFIG } from "@util"
import { reducers } from "./reducers"

export interface SpellsState {
    activeName: string
}

const initialState: SpellsState = {
    activeName: "Death Lightning",
}

const _initialState = CONFIG.production() ? initialState : initialState

export const SpellsSlice = createSlice({
    name: FEATURE_KEYS.Spells,
    initialState: _initialState,
    reducers: reducers,
})
