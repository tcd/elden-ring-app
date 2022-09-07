import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import type { AmmunitionSlotId } from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface AmmunitionState {
    activeSlotId: AmmunitionSlotId
    mobileTab: "grid" | "detail" | "status"
}

export const INITIAL_AMMUNITION_STATE: AmmunitionState = {
    activeSlotId: null,
    mobileTab: "grid",
}

export const AmmunitionSlice = createSlice({
    name:          FeatureKeys.Ammunition,
    initialState:  INITIAL_AMMUNITION_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
