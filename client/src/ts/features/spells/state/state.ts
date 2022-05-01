import { createSlice } from "@reduxjs/toolkit"

import { Spell } from "@types"
import { FEATURE_KEYS } from "@util"
import { reducers } from "./reducers"

export interface SpellsState {
    activeName: string
}

const initialState: SpellsState = {
    activeName: "Death Lightning",
}

export const SpellsSlice = createSlice({
    name: FEATURE_KEYS.Spells,
    initialState,
    reducers: reducers,
})
