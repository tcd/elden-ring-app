import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { CoreActions } from "@app/features/core"
import { CharacterStatusState, INITIAL_CHARACTER_STATUS_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    cycleCharacterStatus(state: CharacterStatusState, _action?: PayloadAction<"A" | "B">) {
        switch (state.whichCharacterStatus) {
            case null: state.whichCharacterStatus = "A"; break
            case "A":  state.whichCharacterStatus = "B"; break
            case "B":  state.whichCharacterStatus = "A"; break
            default:   state.whichCharacterStatus = "A"
        }
        // state.whichCharacterStatus = action.payload
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<CharacterStatusState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
}
