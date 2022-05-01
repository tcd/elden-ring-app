import { PayloadAction } from "@reduxjs/toolkit"

import { SpellsState } from "./state"

export const reducers = {
    setActiveName(state: SpellsState, action: PayloadAction<{ name: string }>) {
        state.activeName = action.payload.name
    },
}
