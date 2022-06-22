import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    KitchenSink,
    StartingClassName,
    TalismanSlotId,
} from "@app/types"
import {
    BuilderState,
    BuilderMenu,
} from "./state"
import {
    fetchEverything,
} from "./thunks"
import { ArmorActions } from "@app/features/armor"
import { WeaponsActions } from "@app/features/weapons"

export const reducers = {
    incrementAttribute(state: BuilderState, action: PayloadAction<{ name: string }>) {
        if (state.attributes[action.payload.name] < 99) {
            state.attributes[action.payload.name]++
        }
    },
    decrementAttribute(state: BuilderState, action: PayloadAction<{ name: string }>) {
        if (state.attributes[action.payload.name] > 0) {
            state.attributes[action.payload.name]--
        }
    },
    cycleCharacterStatus(state: BuilderState, action?: PayloadAction<"A" | "B">) {
        switch (state.whichCharacterStatus) {
            case null:
                state.whichCharacterStatus = "A"
                break
            case "A":
                state.whichCharacterStatus = "B"
                break
            case "B":
                state.whichCharacterStatus = "A"
                break
            default:
                state.whichCharacterStatus = "A"
                break
        }
        // state.whichCharacterStatus = action.payload
    },
    setCurrentMenu(state: BuilderState, action: PayloadAction<BuilderMenu>) {
        state.currentMenu = action.payload
    },
    clearCurrentMenu(state: BuilderState) {
        state.currentMenu = null
    },
    // =========================================================================
    // Starting Class
    // =========================================================================
    setStartingClass(state: BuilderState, action: PayloadAction<{ name: string }>) {
        const className = action.payload.name as StartingClassName
        state.startingClassName = className
        // state.startingClass = STARTING_CLASSES.find(x => x.name == className)
    },
    // =========================================================================
    // Talisman
    // =========================================================================
    setTalisman(state: BuilderState, action: PayloadAction<{ name: string }>) {
        state.talisman_names[state.talisman.active_number?.toString()] = action.payload.name
    },
    removeTalisman(state: BuilderState) {
        state.talisman_names[state.talisman.active_number?.toString()] = null
    },
    openTalismanModal(state: BuilderState, action: PayloadAction<{ id: TalismanSlotId }>) {
        state.talisman.active_number = action.payload.id
        state.talisman.modal_open = true
        state.currentMenu = "talisman"
    },
    closeTalismanModal(state: BuilderState) {
        state.talisman.active_number = null
        state.talisman.modal_open = false
        state.currentMenu = null
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<BuilderState>) => {
    builder
        // ---------------------------------------------------------------------
        // Fetch Everything
        // ---------------------------------------------------------------------
        .addCase(fetchEverything.pending, (state) => {
            state.everythingRequest.status = "pending"
        })
        .addCase(fetchEverything.rejected, (state, action) => {
            state.everythingRequest.status = "rejected"
            state.errors.push(action.error.message)
        })
        .addCase(fetchEverything.fulfilled, (state, action: PayloadAction<KitchenSink>) => {
            state.everythingRequest.status = "fulfilled"
            state.everythingRequest.response = action.payload
        })
        // ---------------------------------------------------------------------
        // From Other Slices
        // ---------------------------------------------------------------------
        .addCase(ArmorActions.openArmorMenu,      (state) => { state.currentMenu = "armor"  })
        .addCase(ArmorActions.closeArmorMenu,     (state) => { state.currentMenu = null     })
        .addCase(WeaponsActions.openWeaponsMenu,  (state) => { state.currentMenu = "weapon" })
        .addCase(WeaponsActions.closeWeaponsMenu, (state) => { state.currentMenu = null     })
}
