import { RootState } from "@app/state"

const selectCoreState = (state: RootState) => { return state?.Core }
const selectDarkModeEnabled = (state: RootState) => { return state?.Core?.darkModeEnabled }
const selectUserMenuOpened = (state: RootState): boolean => { return state.Core.userMenuOpened }
const selectSideNavOpened = (state: RootState): boolean => { return state.Core.sideNavOpened }

// =============================================================================
// Export
// =============================================================================

export const CoreSelectors = {
    darkModeEnabled: selectDarkModeEnabled,
    userMenuOpened: selectUserMenuOpened,
    sideNavOpened: selectSideNavOpened,
}
