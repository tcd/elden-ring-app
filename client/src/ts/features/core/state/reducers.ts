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
}
