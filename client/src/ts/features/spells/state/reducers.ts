import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { startingClassByName } from "@app/data"
import { CoreActions } from "@app/features/core"
import { StartingClassActions } from "@app/features/starting-class"
import { SpellsState, INITIAL_SPELLS_STATE } from "./state"

export const reducers = {
    setActiveName(state: SpellsState, action: PayloadAction<{ name: string }>) {
        state.activeName = action.payload.name
    },
}

const noSpellsSelected = (slice: SpellsState): boolean => {
    const spellNames = slice?.spellNames
    return true
}

export const extraReducers = (builder: ActionReducerMapBuilder<SpellsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_SPELLS_STATE)
        .addCase(StartingClassActions.confirmStartingClassName, (state: SpellsState, { payload: { name } }) => {
            if (noSpellsSelected(state)) {
                const sClass = startingClassByName(name)
                state.spellNames = []
                return state
            }
        })
}
