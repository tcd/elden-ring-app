import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { TalismanSlotId } from "@app/constants"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { TalismansState, INITIAL_TALISMANS_STATE } from "./state"

export const reducers = {
    setActiveSlotId(state: TalismansState, { payload: { id } }: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[id]
        state.activeSlotId = id
        // state.menuHasScrolled = false
    },
    scrollMenu(state: TalismansState) {
        state.menuHasScrolled = true
    },
    openTalismansMenu(state: TalismansState, { payload: { id } }: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[id]
        state.activeSlotId = id
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
    removeTalismanBySlot(state: TalismansState, { payload: { id } }: PayloadAction<{ id: TalismanSlotId }>) {
        state.talismanNames[id] = null
    },
    setActiveName(state: TalismansState, { payload: { name } }: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldTalismanName = null
        state.talismanNames[activeSlotId] = name
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<TalismansState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_TALISMANS_STATE)
}
