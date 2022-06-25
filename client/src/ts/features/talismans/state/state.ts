import { createSlice } from "@reduxjs/toolkit"

import { TalismanSet, TalismanSlotId } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers } from "./reducers"

export interface TalismansState {
    activeSlotId: TalismanSlotId
    oldTalismanName?: string
    talismanNames: TalismanSet
}

const initialState: TalismansState = {
    activeSlotId: null,
    oldTalismanName: null,
    // talismanNames: {
    //     "1": null,
    //     "2": null,
    //     "3": null,
    //     "4": null,
    // },
    talismanNames: {
        "1": "Red-Feathered Branchsword",
        "2": "Ritual Sword Talisman",
        "3": "Blue-Feathered Branchsword",
        "4": "Ritual Shield Talisman",
    },
}

export const TalismansSlice = createSlice({
    name: FEATURE_KEYS.Talismans,
    initialState,
    reducers: reducers,
})
