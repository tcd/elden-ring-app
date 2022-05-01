import { createSlice } from "@reduxjs/toolkit"

import { FEATURE_KEYS } from "@util"
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
        "102": true,
        "103": true,
    },
}

export const ChecklistSlice = createSlice({
    name: FEATURE_KEYS.Checklist,
    initialState,
    reducers: reducers,
})
