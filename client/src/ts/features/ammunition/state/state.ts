import { createSlice } from "@reduxjs/toolkit"

import { AmmunitionSlotId } from "@app/constants"
import { FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export interface AmmunitionState {
    activeSlotId: AmmunitionSlotId
}

export const INITIAL_AMMUNITION_STATE: AmmunitionState = {
    activeSlotId: null,
}

export const AmmunitionSlice = createSlice({
    name:          FEATURE_KEYS.Ammunition,
    initialState:  INITIAL_AMMUNITION_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
