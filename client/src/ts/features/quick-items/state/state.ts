import { createSlice } from "@reduxjs/toolkit"

import type { QuickItemSlotId } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface QuickItemsState {
    activeSlotId: QuickItemSlotId
    mobileTab: "grid" | "detail" | "status"
    slots: Record<QuickItemSlotId, string>
}

export const INITIAL_QUICK_ITEMS_STATE: QuickItemsState = {
    activeSlotId: null,
    mobileTab: "grid",
    slots: {
        "Q1": "",
        "Q2": "",
        "Q3": "",
        "Q4": "",
        "Q5": "",
        "Q6": "",
        "Q7": "",
        "Q8": "",
        "Q9": "",
        "Q10": "",
    },
}

export const QuickItemsSlice = createSlice({
    name:          FeatureKeys.QuickItems,
    initialState:  INITIAL_QUICK_ITEMS_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
