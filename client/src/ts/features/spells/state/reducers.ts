import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { SpellSlotId } from "@app/types"
import { startingClassByName } from "@app/data"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"
import { StartingClassActions } from "@app/features/starting-class"

import type { SpellsState } from "./state"
import { INITIAL_SPELLS_STATE as INITIAL_STATE } from "./state"
import { noSpellsSelected } from "./helpers"

export const reducers = {
    setActiveName(state: SpellsState, action: PayloadAction<{ name: string }>) {
        state.activeName = action.payload.name
    },
    setActiveSlot(state: SpellsState, { payload: { id } }: PayloadAction<{ id: SpellSlotId }>) {
        state.oldName = state.slots[id]
        state.activeSlotId = id
        state.menuHasScrolled = false
    },
    clearActiveSlot(state: SpellsState) {
        state.activeSlotId = null
        state.oldName = null
        state.menuHasScrolled = true
    },
    equipSpell(state: SpellsState, { payload: { name } }: PayloadAction<{ name: string }>) {
        if (!isBlank(state.activeSlotId)) {
            state.oldName = state.slots[state.activeSlotId]
            state.slots[state.activeSlotId] = name
        }
    },
    removeSpell(state: SpellsState) {
        state.oldName = state.slots[state.activeSlotId]
        state.slots[state.activeSlotId] = null
    },
    removeSpellBySlot(state: SpellsState, { payload: { id } }: PayloadAction<{ id: SpellSlotId }>) {
        state.oldName = state.slots[id]
        state.slots[id] = null
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<SpellsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(StartingClassActions.confirmStartingClassName, (state: SpellsState, { payload: { name } }) => {
            if (noSpellsSelected(state)) {
                const sClass = startingClassByName(name)
                state.spellNames = []
                return state
            }
        })
        .addCase(RoutingActions.locationChange, (state, { payload }) => {
            if (payload?.pathParams?.spellSlotId) {
                if (isBlank(state?.activeSlotId)) {
                    state.oldName      = state.slots[payload.pathParams.spellSlotId]
                    state.activeSlotId = payload.pathParams.spellSlotId
                }
            } else {
                if (payload?.location?.pathname != "/") {
                    state.activeSlotId = INITIAL_STATE.activeSlotId
                }
            }

            if (!payload?.location?.pathname?.includes("spells")) {
                state.oldName         = INITIAL_STATE.oldName         // null
                state.menuHasScrolled = INITIAL_STATE.menuHasScrolled // false
            }
        })
}
