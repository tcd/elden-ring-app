import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { reducers, extraReducers } from "./reducers"

export interface QuickItemsState {
    activeSlotId: any
    mobileTab: "grid" | "detail" | "status"
}

export const INITIAL_QUICK_ITEMS_STATE: QuickItemsState = {
    activeSlotId: null,
    mobileTab: "grid",
}

export const QuickItemsSlice = createSlice({
    name:          FeatureKeys.QuickItems,
    initialState:  INITIAL_QUICK_ITEMS_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
