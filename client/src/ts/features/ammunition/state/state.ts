import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import type { AmmunitionSlotId } from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface AmmunitionState {
    slots: Record<AmmunitionSlotId, string>
    activeSlotId: AmmunitionSlotId
    oldName: string
    menuHasScrolled: boolean
}

export const INITIAL_AMMUNITION_STATE: AmmunitionState = {
    slots:  {
        "A1": null,
        "A2": null,
        "B1": null,
        "B2": null,
    },
    activeSlotId: null,
    oldName: null,
    menuHasScrolled: false,
}

export const AmmunitionSlice = createSlice({
    name:          FeatureKeys.Ammunition,
    initialState:  INITIAL_AMMUNITION_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
