import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { CoreState } from "./state"

export const reducers = {
    toggleDarkMode: (state: CoreState)  => { state.darkModeEnabled = (!state.darkModeEnabled) },
    enableDarkMode: (state: CoreState)  => { state.darkModeEnabled = true },
    disableDarkMode: (state: CoreState) => { state.darkModeEnabled = false },
    // -------------------------------------------------------------------------
    // User Menu
    // -------------------------------------------------------------------------
    openUserMenu: (state: CoreState)         => { state.userMenuOpened = true },
    closeUserMenu: (state: CoreState)        => { state.userMenuOpened = false },
    toggleUserMenuOpened: (state: CoreState) => { state.userMenuOpened = (!state.userMenuOpened) },
    // -------------------------------------------------------------------------
    // SideNav
    // -------------------------------------------------------------------------
    openSideNav: (state: CoreState)         => { state.sideNavOpened = true },
    closeSideNav: (state: CoreState)        => { state.sideNavOpened = false },
    toggleSideNavOpened: (state: CoreState) => { state.sideNavOpened = (!state.sideNavOpened) },
    expandSection: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.expandedSections.push(payload)
    },
    collapseSection: (state: CoreState, { payload }: PayloadAction<string>) => {
        state.expandedSections = state.expandedSections.filter(x => x != payload)
    },
    toggleSection: (state: CoreState, action: PayloadAction<string>) => {
        if (state.expandedSections.includes(action.payload)) {
            state.expandedSections = state.expandedSections.filter(x => x != action.payload)
        } else {

            state.expandedSections = [...state.expandedSections, action.payload]
        }
    },
}
