import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { PageName } from "@app/types"
import { CoreState, INITIAL_CORE_STATE } from "./state"

import { StartingClassActions } from "@app/features/starting-class"
import { ArmorActions } from "@app/features/armor"
import { TalismansActions } from "@app/features/talismans"
import { WeaponsActions } from "@app/features/weapons"

export const reducers = {
    // -------------------------------------------------------------------------
    // Reset State
    // -------------------------------------------------------------------------
    resetState: () => INITIAL_CORE_STATE,
    // -------------------------------------------------------------------------
    // Page Name
    // -------------------------------------------------------------------------
    setPageName: (state: CoreState, { payload }: PayloadAction<PageName>) => {
        state.pageName = payload
    },
    clearPageName: (state: CoreState) => {
        state.pageName = null
    },
    // -------------------------------------------------------------------------
    // SideNav
    // -------------------------------------------------------------------------
    openSideNav:         (state: CoreState) => { state.sideNavOpened = true                   },
    closeSideNav:        (state: CoreState) => { state.sideNavOpened = false                  },
    toggleSideNavOpened: (state: CoreState) => { state.sideNavOpened = (!state.sideNavOpened) },
}

export const extraReducers = (builder: ActionReducerMapBuilder<CoreState>) => {
    builder
        // ---------------------------------------------------------------------
        // From Other Slices
        // ---------------------------------------------------------------------
        // TODO: remove all this. These pages should set their own titles.
        .addCase(StartingClassActions.confirmStartingClassName, (state) => { state.pageName = "equipment" })
        .addCase(ArmorActions.openArmorMenu,                    (state) => { state.pageName = "armor"     })
        .addCase(ArmorActions.closeArmorMenu,                   (state) => { state.pageName = "equipment" })
        .addCase(TalismansActions.openTalismansMenu,            (state) => { state.pageName = "talisman"  })
        .addCase(TalismansActions.closeTalismansMenu,           (state) => { state.pageName = "equipment" })
        .addCase(WeaponsActions.openWeaponsMenu,                (state) => { state.pageName = "weapon"    })
        .addCase(WeaponsActions.closeWeaponsMenu,               (state) => { state.pageName = "equipment" })
        // .addCase(WeaponsActions.startChoosingAffinity,    (state) => { state.pageName = "equipment" })
}
