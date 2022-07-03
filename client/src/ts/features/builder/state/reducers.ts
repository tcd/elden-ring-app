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
import { TalismansActions } from "@app/features/talismans"

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
    setPendingStartingClass(state: BuilderState, action: PayloadAction<{ name: string }>) {
        const className = action.payload.name as StartingClassName
        state.pendingStartingClassName = className
        state.confirmingStartingClass = true
    },
    openStartingClassConfirmation(state: BuilderState) {
        state.confirmingStartingClass = true
    },
    cancelStartingClassConfirmation(state: BuilderState) {
        state.confirmingStartingClass = false
    },
    confirmStartingClassName(state: BuilderState) {
        state.startingClassName = state.pendingStartingClassName
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
        .addCase(ArmorActions.openArmorMenu,          (state) => { state.currentMenu = "armor"    })
        .addCase(ArmorActions.closeArmorMenu,         (state) => { state.currentMenu = null       })
        .addCase(WeaponsActions.openWeaponsMenu,      (state) => { state.currentMenu = "weapon"   })
        .addCase(WeaponsActions.closeWeaponsMenu,     (state) => { state.currentMenu = null       })
        .addCase(TalismansActions.openTalismansMenu,  (state) => { state.currentMenu = "talisman" })
        .addCase(TalismansActions.closeTalismansMenu, (state) => { state.currentMenu = null       })
}
