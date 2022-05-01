import { createSlice } from "@reduxjs/toolkit"

import { ArmorType } from "@types"
import { FEATURE_KEYS } from "@util"
import { reducers } from "./reducers"

export interface ArmorState {
    activeName: string
    activeType?: "all" | ArmorType
}

const initialState: ArmorState = {
    activeName: "Banished Knight Helm (Altered)",
    activeType: "all",
}

export const ArmorSlice = createSlice({
    name: FEATURE_KEYS.Armor,
    initialState,
    reducers: reducers,
})
