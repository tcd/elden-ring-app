import { createSlice } from "@reduxjs/toolkit"

import { Weapon } from "@types"
import { FEATURE_KEYS } from "@util"
import { reducers } from "./reducers"

export interface WeaponsState {
    activeName: string
}

const initialState: WeaponsState = {
    activeName: "Claymore",
}

export const WeaponsSlice = createSlice({
    name: FEATURE_KEYS.Weapons,
    initialState,
    reducers: reducers,
})
