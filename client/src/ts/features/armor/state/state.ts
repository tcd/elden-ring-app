import { createSlice } from "@reduxjs/toolkit"

import {
    ArmorType,
    ArmorSet,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers } from "./reducers"

export interface ArmorState {
    armorNames: ArmorSet
    activeType?: "all" | ArmorType
    oldName: string
    menuHasScrolled: boolean
}

const initialState: ArmorState = {
    armorNames: {
        Arms: null,
        Chest: null,
        Head: null,
        Legs: null,
    },
    activeType: "all",
    oldName: null,
    menuHasScrolled: false,
}
const initialDevState: ArmorState = {
    ...initialState,
    armorNames: {
        Arms: null,
        Chest: null,
        Head: "Banished Knight Helm (Altered)",
        Legs: null,
    },
}

export const ArmorSlice = createSlice({
    name: FEATURE_KEYS.Armor,
    initialState: initialDevState,
    reducers: reducers,
})
