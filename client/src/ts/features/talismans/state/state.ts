import { createSlice } from "@reduxjs/toolkit"

import { TalismanSet, TalismanSlotId } from "@app/types"
import { FEATURE_KEYS, CONFIG } from "@app/util"
import { reducers } from "./reducers"

export interface TalismansState {
    talismanNames: TalismanSet
    activeSlotId: TalismanSlotId
    oldTalismanName?: string
    menuHasScrolled: boolean
}

const initialState: TalismansState = {
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
    ...initialState,
    talismanNames: {
        ...initialState.talismanNames,
        "1": "Red-Feathered Branchsword",
        // "2": "Ritual Sword Talisman",
        // "3": "Blue-Feathered Branchsword",
        "4": "Ritual Shield Talisman",
    },
}

// const _initialState = CONFIG.production() ? initialState : initialDevState
const _initialState = initialState

export const TalismansSlice = createSlice({
    name: FEATURE_KEYS.Talismans,
    initialState: _initialState,
    reducers: reducers,
})
