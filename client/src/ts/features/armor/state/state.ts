import { createSlice } from "@reduxjs/toolkit"

import {
    ArmorType,
    ArmorSet,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers } from "./reducers"

export interface ArmorState {
    activeName: string
    activeType?: "all" | ArmorType
    armorNames: ArmorSet
    oldName: string
}

const initialState: ArmorState = {
    activeName: "Banished Knight Helm (Altered)",
    activeType: "all",
    armorNames: {
        Arms: null,
        Chest: null,
        Head: "Banished Knight Helm (Altered)",
        Legs: null,
    },
    oldName: null,
}

export const ArmorSlice = createSlice({
    name: FEATURE_KEYS.Armor,
    initialState,
    reducers: reducers,
})
