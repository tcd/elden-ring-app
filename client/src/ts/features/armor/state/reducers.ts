import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { startingClassByName } from "@app/data"
import { ArmorType } from "@app/constants"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { StartingClassActions } from "@app/features/starting-class"
import { ArmorState, INITIAL_ARMOR_STATE } from "./state"

export const reducers = {
    scrollMenu(state: ArmorState) {
        state.menuHasScrolled = true
    },
    openArmorMenu(state: ArmorState, action: PayloadAction<{ type: ArmorType }>) {
        state.activeType = action.payload.type
        state.oldName = state.armorNames[action.payload.type]
        state.menuHasScrolled = false
    },
    closeArmorMenu(state: ArmorState) {
        state.activeType = null
        state.oldName = null
        state.menuHasScrolled = true
    },
    setActiveType(state: ArmorState, action: PayloadAction<{ type: "all" | ArmorType }>) {
        state.activeType = action.payload.type
    },
    equipArmor(state: ArmorState, action: PayloadAction<{ name: string }>) {
        state.oldName = state.armorNames[state.activeType]
        state.armorNames[state.activeType] = action.payload.name
    },
    removeArmor(state: ArmorState) {
        if (!isBlank(state.activeType)) {
            state.armorNames[state.activeType] = null
        }
    },
    removeArmorByType(state: ArmorState, action: PayloadAction<{ type: ArmorType }>) {
        state.armorNames[action.payload.type] = null
    },
    // equipArmor(state: ArmorState, action: PayloadAction<{ type: ArmorType, name: string }>) {
    //     state.armorNames[action.payload.type] = action.payload.name
    // },
    // removeArmorByType(state: ArmorState, action: PayloadAction<{ type: ArmorType }>) {
    //     state.armorNames[action.payload.type] = null
    // },
}

const noArmorSelected = (slice: ArmorState): boolean => {
    const armorNames = slice?.armorNames
    if (armorNames?.Arms  != null) { return false }
    if (armorNames?.Chest != null) { return false }
    if (armorNames?.Head  != null) { return false }
    if (armorNames?.Legs  != null) { return false }
    return true
}

export const extraReducers = (builder: ActionReducerMapBuilder<ArmorState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_ARMOR_STATE)
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
}
