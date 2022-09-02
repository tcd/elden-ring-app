import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys, TalismanSlotId } from "@app/constants"
import { TalismanSet } from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface TalismansState {
    talismanNames: TalismanSet
    activeSlotId: TalismanSlotId
    oldTalismanName?: string
    menuHasScrolled: boolean
}

export const INITIAL_TALISMANS_STATE: TalismansState = {
    talismanNames: {
        "1": null,
        "2": null,
        "3": null,
        "4": null,
    },
    activeSlotId: null,
    oldTalismanName: null,
    menuHasScrolled: false,
}

const initialDevState: TalismansState = {
    ...INITIAL_TALISMANS_STATE,
    talismanNames: {
        ...INITIAL_TALISMANS_STATE.talismanNames,
        "1": "Red-Feathered Branchsword",
        // "2": "Ritual Sword Talisman",
        // "3": "Blue-Feathered Branchsword",
        "4": "Ritual Shield Talisman",
    },
}

export const TalismansSlice = createSlice({
    name: FeatureKeys.Talismans,
    initialState: INITIAL_TALISMANS_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
