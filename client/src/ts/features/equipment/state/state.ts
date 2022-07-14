import { createSlice } from "@reduxjs/toolkit"

import {
    EquipmentType,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"

export interface EquipmentState {
    activeType: EquipmentType
}

export const INITIAL_EQUIPMENT_STATE: EquipmentState = {
    activeType: null,
}

export const EquipmentSlice = createSlice({
    name:          FEATURE_KEYS.Equipment,
    initialState:  INITIAL_EQUIPMENT_STATE,
    reducers:      reducers,
    extraReducers: extraReducers,
})
