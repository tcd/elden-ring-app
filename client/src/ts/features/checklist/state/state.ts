import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import {
    FiniteResourceId,
    UpgradeMaterialsChecklist,
} from "@app/data"

import { reducers, extraReducers } from "./reducers"

export interface ChecklistState {
    obtainedResources: Record<FiniteResourceId, boolean>
    importComplete: boolean
}

export const INITIAL_CHECKLIST_STATE: ChecklistState = {
    importComplete: false,
    obtainedResources: {
        ...UpgradeMaterialsChecklist,
    },
}

const initialDevState: ChecklistState = {
    importComplete: false,
    obtainedResources: {
        ...UpgradeMaterialsChecklist,
        "102": true,
        "103": true,
        "105": true,
        "106": true,
        "108": true,
        "109": true,
        "301": true,
        "302": true,
        "404": true,
    },
}

// const _initialState = CONFIG.production() ? initialState : initialDevState
const _initialState = INITIAL_CHECKLIST_STATE

export const ChecklistSlice = createSlice({
    name: FeatureKeys.Checklist,
    initialState: _initialState,
    reducers: reducers,
    extraReducers: extraReducers,
})
