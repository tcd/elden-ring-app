import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { startingClassByName } from "@app/data"
import type { ArmorType } from "@app/types"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"
import { StartingClassActions } from "@app/features/starting-class"

import {
    ArmorState,
    INITIAL_ARMOR_STATE as INITIAL_STATE,
} from "./state"
import { noArmorSelected } from "./helpers"

export const reducers = {
    setActiveSlotId(state: ArmorState, { payload: { type } }: PayloadAction<{ type: ArmorType }>) {
        state.activeType = type
        state.oldName = state.armorNames[type]
        state.menuHasScrolled = false
    },
    clearActiveSlotId(state: ArmorState) {
        state.activeType = null
        state.oldName = null
        state.menuHasScrolled = true
    },
    scrollMenu(state: ArmorState) {
        state.menuHasScrolled = true
    },
    // TODO: deprecate in favor of `setActiveSlotId`
    openArmorMenu(state: ArmorState, { payload: { type } }: PayloadAction<{ type: ArmorType }>) {
        state.activeType = type
        state.oldName = state.armorNames[type]
        state.menuHasScrolled = false
    },
    // TODO: deprecate in favor of `clearActiveSlotId`
    closeArmorMenu(state: ArmorState) {
        state.activeType = null
        state.oldName = null
        state.menuHasScrolled = true
    },
    setActiveType(state: ArmorState, { payload: { type } }: PayloadAction<{ type: "all" | ArmorType }>) {
        state.activeType = type
    },
    equipArmor(state: ArmorState, { payload: { name } }: PayloadAction<{ name: string }>) {
        state.oldName = state.armorNames[state.activeType]
        state.armorNames[state.activeType] = name
    },
    removeArmor(state: ArmorState) {
        if (!isBlank(state.activeType)) {
            state.oldName = state.armorNames[state.activeType]
            state.armorNames[state.activeType] = null
        }
    },
    removeArmorByType(state: ArmorState, { payload: { type } }: PayloadAction<{ type: ArmorType }>) {
        state.armorNames[type] = null
    },
    // equipArmor(state: ArmorState, action: PayloadAction<{ type: ArmorType, name: string }>) {
    //     state.armorNames[action.payload.type] = action.payload.name
    // },
    // removeArmorByType(state: ArmorState, action: PayloadAction<{ type: ArmorType }>) {
    //     state.armorNames[action.payload.type] = null
    // },
}

export const extraReducers = (builder: ActionReducerMapBuilder<ArmorState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(StartingClassActions.confirmStartingClassName, (state: ArmorState, { payload: { name } }) => {
            if (noArmorSelected(state)) {
                const sClass = startingClassByName(name)
                state.armorNames = {
                    Head:  sClass?.Head  ?? null,
                    Chest: sClass?.Chest ?? null,
                    Arms:  sClass?.Arms  ?? null,
                    Legs:  sClass?.Legs  ?? null,
                }
                return state
            }
        })
        .addCase(RoutingActions.locationChange, (state, { payload }) => {
            if (payload?.pathParams?.armorSlotId) {
                if (isBlank(state?.activeType)) {
                    state.activeType = payload.pathParams.armorSlotId
                    state.oldName    = state.armorNames[payload.pathParams.armorSlotId]
                }
            } else {
                if (payload?.location?.pathname != "/") {
                    state.activeType = INITIAL_STATE.activeType
                }
            }

            if (!payload?.location?.pathname?.includes("armor")) {
                state.oldName         = INITIAL_STATE.oldName         // null
                state.menuHasScrolled = INITIAL_STATE.menuHasScrolled // false
            }
        })
}
