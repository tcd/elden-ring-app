import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import {
    EquipmentType,
    EquipmentSlotId,
} from "@app/types"
import { reducers, extraReducers } from "./reducers"

export interface EquipmentState {
    activeType: EquipmentType
    activeSlotId: EquipmentSlotId
    mobileTab: "grid" | "detail" | "status"
}

export const INITIAL_EQUIPMENT_STATE: EquipmentState = {
    activeType: null,
    activeSlotId: null,
    mobileTab: "grid",
}

export const EquipmentSlice = createSlice({
    name:          FeatureKeys.Equipment,
    initialState:  INITIAL_EQUIPMENT_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
