import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { TalismanSlotId } from "@app/constants"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"

import { TalismansState, INITIAL_TALISMANS_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    setActiveSlotId(state: TalismansState, { payload: { id } }: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[id]
        state.activeSlotId = id
        // state.menuHasScrolled = false
    },
    clearActiveSlotId(state: TalismansState) {
        state.oldTalismanName = null
        state.activeSlotId = null
        state.menuHasScrolled = true
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
        state.oldTalismanName = state.talismanNames[state.activeSlotId]
        state.talismanNames[state.activeSlotId] = null
    },
    removeTalismanBySlot(state: TalismansState, { payload: { id } }: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[id]
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
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(RoutingActions.locationChange, (state, { payload }) => {
            if (payload?.pathParams?.talismanSlotId) {
                if (isBlank(state?.activeSlotId)) {
                    state.activeSlotId    = payload.pathParams.talismanSlotId
                    state.oldTalismanName = state.talismanNames[payload.pathParams.talismanSlotId]
                }
            } else {
                if (payload?.location?.pathname != "/") {
                    state.activeSlotId = INITIAL_STATE.activeSlotId
                }
            }

            if (!payload?.location?.pathname?.includes("talisman")) {
                state.oldTalismanName = INITIAL_STATE.oldTalismanName // null
                state.menuHasScrolled = INITIAL_STATE.menuHasScrolled // false
            }
        })
}
