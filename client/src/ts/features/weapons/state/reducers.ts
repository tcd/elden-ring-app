import { PayloadAction } from "@reduxjs/toolkit"

import { WeaponsState } from "./state"

export const reducers = {
    setActiveName(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        state.activeName = action.payload.name
    },
}
