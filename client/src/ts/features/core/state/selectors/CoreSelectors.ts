import {
    PageName,
    PAGE_NAME_TITLES,
    PAGE_NAME_ICONS,
    HEADER_ICONS,
} from "@app/types"
import type { RootState } from "@app/state"
import { selectCustomizing } from "@app/features/weapons/state/selectors/selectors"

import { selectSlice } from "./select-slice"

const selectReduxReady    = (rootState: RootState): boolean  => selectSlice(rootState)?.reduxReady
const selectSideNavOpened = (rootState: RootState): boolean  => selectSlice(rootState)?.sideNavOpened
const selectPageName      = (rootState: RootState): PageName => selectSlice(rootState)?.pageName  ?? null
const selectPageTitle     = (rootState: RootState)           => selectSlice(rootState)?.pageTitle ?? null
const selectPageIcon      = (rootState: RootState)           => selectSlice(rootState)?.pageIcon  ?? null

const selectTitle = (rootState: RootState): string => {
    const pageTitle = selectPageTitle(rootState)
    if (pageTitle) {
        return pageTitle
    }

    const pageName = selectPageName(rootState)
    const ashesOfWar = selectCustomizing(rootState)
    if (ashesOfWar) {
        return "Ashes of War"
    }
    return PAGE_NAME_TITLES?.[pageName] ?? null
}

const selectTitleIconUrl = (rootState: RootState): string => {
    const pageIcon = selectPageIcon(rootState)
    if (pageIcon) {
        return HEADER_ICONS[pageIcon]
    }

    const pageName = selectPageName(rootState)
    const ashesOfWar = selectCustomizing(rootState)
    if (ashesOfWar) {
        return HEADER_ICONS["ashes-of-war"]
    }
    return PAGE_NAME_ICONS?.[pageName] ?? HEADER_ICONS.empty
}

// =============================================================================

export const CoreSelectors = {
    reduxReady: selectReduxReady,
    pageName: selectPageName,
    title: selectTitle,
    titleIconUrl: selectTitleIconUrl,
    sideNavOpened: selectSideNavOpened,
}
