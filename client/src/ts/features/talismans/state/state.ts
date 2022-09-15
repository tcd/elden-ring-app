import { createSlice } from "@reduxjs/toolkit"

import type { TalismanSlotId } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface TalismansState {
    // FIXME: rename to `slots`
    talismanNames: Record<TalismanSlotId, string>
    activeSlotId: TalismanSlotId
    oldTalismanName?: string
    menuHasScrolled: boolean
    importComplete: boolean
}

export const INITIAL_TALISMANS_STATE: TalismansState = {
    talismanNames: {
        "T1": null,
        "T2": null,
        "T3": null,
        "T4": null,
    },
    activeSlotId: null,
    oldTalismanName: null,
    menuHasScrolled: false,
    importComplete: false,
}

const initialDevState: TalismansState = {
    ...INITIAL_TALISMANS_STATE,
    talismanNames: {
        ...INITIAL_TALISMANS_STATE.talismanNames,
        "T1": "Red-Feathered Branchsword",
        // "T2": "Ritual Sword Talisman",
        // "T3": "Blue-Feathered Branchsword",
        "T4": "Ritual Shield Talisman",
    },
}

export const TalismansSlice = createSlice({
    name: FeatureKeys.Talismans,
    initialState: INITIAL_TALISMANS_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
