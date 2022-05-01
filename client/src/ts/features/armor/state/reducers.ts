import { PayloadAction } from "@reduxjs/toolkit"

import { ArmorType } from "@types"
import { ArmorState } from "./state"

export const reducers = {
    setActiveName(state: ArmorState, action: PayloadAction<{ name: string }>) {
        state.activeName = action.payload.name
    },
    setActiveType(state: ArmorState, action: PayloadAction<{ type: "all" | ArmorType }>) {
        state.activeType = action.payload.type
    },
}
