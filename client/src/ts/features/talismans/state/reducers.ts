import { PayloadAction } from "@reduxjs/toolkit"

import { TalismansState } from "./state"

export const reducers = {
    setActiveName(state: TalismansState, action: PayloadAction<{ name: string }>) {
        state.activeName = action.payload.name
    },
}
