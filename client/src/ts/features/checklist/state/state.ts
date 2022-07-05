import { createSlice } from "@reduxjs/toolkit"

import { FEATURE_KEYS, CONFIG } from "@app/util"
import {
    FiniteResourceChecklist,
    UpgradeMaterialsChecklist,
} from "@app/data"
import { reducers } from "./reducers"

export interface ChecklistState {
    obtainedResources: FiniteResourceChecklist
}

const initialState: ChecklistState = {
    obtainedResources: {
        ...UpgradeMaterialsChecklist,
    },
}

const initialDevState: ChecklistState = {
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

const _initialState = CONFIG.production() ? initialState : initialDevState

export const ChecklistSlice = createSlice({
    name: FEATURE_KEYS.Checklist,
    initialState: _initialState,
    reducers: reducers,
})
