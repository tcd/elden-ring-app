import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { PageName } from "@app/types"
import { CoreState } from "./state"

import { ArmorActions } from "@app/features/armor"
import { WeaponsActions } from "@app/features/weapons"
import { TalismansActions } from "@app/features/talismans"
import { BuilderActions } from "@app/features/builder"


export const reducers = {
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
        .addCase(BuilderActions.confirmStartingClassName, (state) => { state.pageName = "equipment" })
        .addCase(ArmorActions.openArmorMenu,              (state) => { state.pageName = "armor"     })
        .addCase(ArmorActions.closeArmorMenu,             (state) => { state.pageName = "equipment" })
        .addCase(TalismansActions.openTalismansMenu,      (state) => { state.pageName = "talisman"  })
        .addCase(TalismansActions.closeTalismansMenu,     (state) => { state.pageName = "equipment" })
        .addCase(WeaponsActions.openWeaponsMenu,          (state) => { state.pageName = "weapon"    })
        .addCase(WeaponsActions.closeWeaponsMenu,         (state) => { state.pageName = "equipment" })
        // .addCase(WeaponsActions.startChoosingAffinity,    (state) => { state.pageName = "equipment" })
}
