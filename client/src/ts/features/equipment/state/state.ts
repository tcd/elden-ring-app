import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import type {
    EquipmentType,
    EquipmentSlotId,
} from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface EquipmentState {
    activeType: EquipmentType
    activeSlotId: EquipmentSlotId
}

export const INITIAL_EQUIPMENT_STATE: EquipmentState = {
    activeType: null,
    activeSlotId: null,
}

export const EquipmentSlice = createSlice({
    name:          FeatureKeys.Equipment,
    initialState:  INITIAL_EQUIPMENT_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
