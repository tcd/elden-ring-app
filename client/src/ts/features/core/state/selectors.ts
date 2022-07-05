import { CloudflareVariant, getImageSrcManual } from "@app/util"
import { RootState } from "@app/state"
import { selectCurrentMenu } from "@app/features/builder/state/selectors/misc"
import { selectCustomizing } from "@app/features/weapons/state/selectors/selectors"
import { CoreState } from "."

const selectCoreSlice = (rootState: RootState): CoreState => {
    return rootState?.Core
}

const selectReduxReady       = (rootState: RootState): boolean  => selectCoreSlice(rootState)?.reduxReady
const selectDarkModeEnabled  = (rootState: RootState): boolean  => selectCoreSlice(rootState)?.darkModeEnabled
const selectUserMenuOpened   = (rootState: RootState): boolean  => selectCoreSlice(rootState)?.userMenuOpened
const selectSideNavOpened    = (rootState: RootState): boolean  => selectCoreSlice(rootState)?.sideNavOpened
const selectExpandedSections = (rootState: RootState): string[] => selectCoreSlice(rootState)?.expandedSections ?? []

export type TitleString = "Equipment" | "Ashes of War" | "Memorize Spells" | "Select Character Base"

const selectTitle = (rootState: RootState): TitleString => {
    const ashesOfWar = selectCustomizing(rootState)
    if (ashesOfWar) {
        return "Ashes of War"
    }
    const currentMenu = selectCurrentMenu(rootState)
    switch (currentMenu) {
        // case "armor":          return "Armor"
        case "spell":          return "Memorize Spells"
        // case "talisman":       return "Talismans"
        // case "weapon":         return "Weapons"
        case "starting-class": return "Select Character Base"
        default:               return "Equipment"
    }
}

const titleImageSize: CloudflareVariant = "128"
const titleStringImages: Record<TitleString, string> = {
    "Ashes of War":          getImageSrcManual("/ui/title-icons/ashes-of-war", titleImageSize),
    "Memorize Spells":       getImageSrcManual("/ui/title-icons/spells", titleImageSize),
    "Equipment":             getImageSrcManual("/ui/title-icons/equipment", titleImageSize),
    "Select Character Base": getImageSrcManual("/ui/title-icons/starting-class", titleImageSize),
}

const selectTitleIconUrl = (rootState: RootState): string => {
    return titleStringImages[selectTitle(rootState)] ?? getImageSrcManual("/ui/title-icons/equipment", titleImageSize)
}

// =============================================================================
// Export
// =============================================================================

export const CoreSelectors = {
    reduxReady: selectReduxReady,
    darkModeEnabled: selectDarkModeEnabled,
    userMenuOpened: selectUserMenuOpened,
    sideNavOpened: selectSideNavOpened,
    expandedSections: selectExpandedSections,
    title: selectTitle,
    titleIconUrl: selectTitleIconUrl,
}
