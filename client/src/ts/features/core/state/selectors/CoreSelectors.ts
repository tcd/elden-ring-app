import {
    PageName,
    PageTitle,
    PAGE_NAME_TITLES,
    PAGE_NAME_ICONS,
    DEFAULT_PAGE_ICON,
    HEADER_ICONS,
} from "@app/types"
import type { RootState } from "@app/state"
import { selectCustomizing } from "@app/features/weapons/state/selectors/selectors"

import { selectSlice } from "./select-slice"

const selectReduxReady       = (rootState: RootState): boolean  => selectSlice(rootState)?.reduxReady
const selectPageName         = (rootState: RootState): PageName => selectSlice(rootState)?.pageName ?? null
const selectSideNavOpened    = (rootState: RootState): boolean  => selectSlice(rootState)?.sideNavOpened

const selectTitle = (rootState: RootState): PageTitle => {
    const pageName = selectPageName(rootState)
    const ashesOfWar = selectCustomizing(rootState)
    if (ashesOfWar) {
        return "Ashes of War"
    }
    return PAGE_NAME_TITLES?.[pageName] ?? null
}

const selectTitleIconUrl = (rootState: RootState): string => {
    const pageName = selectPageName(rootState)
    const ashesOfWar = selectCustomizing(rootState)
    if (ashesOfWar) {
        return HEADER_ICONS["ashes-of-war"]
    }
    return PAGE_NAME_ICONS?.[pageName] ?? DEFAULT_PAGE_ICON
}

// =============================================================================

export const CoreSelectors = {
    reduxReady: selectReduxReady,
    pageName: selectPageName,
    title: selectTitle,
    titleIconUrl: selectTitleIconUrl,
    sideNavOpened: selectSideNavOpened,
}
