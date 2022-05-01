import { createSlice } from "@reduxjs/toolkit"

import { Talisman } from "@types"
import { FEATURE_KEYS } from "@util"
import { reducers } from "./reducers"

export interface TalismansState {
    activeName: string
}

const initialState: TalismansState = {
    activeName: "Great-Jar's Arsenal",
}

export const TalismansSlice = createSlice({
    name: FEATURE_KEYS.Talismans,
    initialState,
    reducers: reducers,
})
