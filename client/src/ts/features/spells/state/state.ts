import { createSlice } from "@reduxjs/toolkit"

import type { SpellSlotId } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface SpellsState {
    activeSlotId: SpellSlotId
    oldName: string
    menuHasScrolled: boolean
    slots: Record<SpellSlotId, string>
    importComplete: boolean

    activeName: string
    activeIndex: number
    spellNames: string[]
}

export const INITIAL_SPELLS_STATE: SpellsState = {
    activeSlotId: null,
    oldName: null,
    menuHasScrolled: false,
    importComplete: false,
    slots: {
        "S1":  null,
        "S2":  null,
        "S3":  null,
        "S4":  null,
        "S5":  null,
        "S6":  null,
        "S7":  null,
        "S8":  null,
        "S9":  null,
        "S10": null,
        "S11": null,
        "S12": null,
    },
    activeName: "",
    activeIndex: 0,
    spellNames: [],
}

export const SpellsSlice = createSlice({
    name: FeatureKeys.Spells,
    initialState: INITIAL_SPELLS_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
