import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { TalismanSlotId } from "@app/types"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { TalismansState, INITIAL_TALISMANS_STATE } from "./state"

export const reducers = {
    setActiveSlotId(state: TalismansState, action: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[action.payload.id]
        state.activeSlotId = action.payload.id
        // state.menuHasScrolled = false
    },
    scrollMenu(state: TalismansState) {
        state.menuHasScrolled = true
    },
    openTalismansMenu(state: TalismansState, action: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[action.payload.id]
        state.activeSlotId = action.payload.id
        state.menuHasScrolled = false
    },
    closeTalismansMenu(state: TalismansState) {
        state.oldTalismanName = null
        state.activeSlotId = null
        state.menuHasScrolled = true
    },
    removeTalisman(state: TalismansState) {
        state.talismanNames[state.activeSlotId] = null
    },
    setActiveName(state: TalismansState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldTalismanName = null
        state.talismanNames[activeSlotId] = action.payload.name
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<TalismansState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_TALISMANS_STATE)
}
