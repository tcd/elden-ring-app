import { createSlice } from "@reduxjs/toolkit"

import {
    EquipmentType,
    EquipmentSlotId,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
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
    name:          FEATURE_KEYS.Equipment,
    initialState:  INITIAL_EQUIPMENT_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
