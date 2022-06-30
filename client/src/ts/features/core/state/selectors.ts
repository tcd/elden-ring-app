import { CONFIG, CloudflareVariant } from "@app/util"
import { RootState } from "@app/state"
import { selectCurrentMenu } from "@app/features/builder/state/selectors/misc"
import { selectCustomizing } from "@app/features/weapons/state/selectors/selectors"

const selectCoreSlice = (rootState: RootState) => {
    return rootState?.Core
}

const selectDarkModeEnabled  = (rootState: RootState): boolean => selectCoreSlice(rootState)?.darkModeEnabled
const selectUserMenuOpened   = (rootState: RootState): boolean => selectCoreSlice(rootState)?.userMenuOpened
const selectSideNavOpened    = (rootState: RootState): boolean => selectCoreSlice(rootState)?.sideNavOpened
const selectExpandedSections = (rootState: RootState): string[] => selectCoreSlice(rootState)?.expandedSections ?? []

export type TitleString = "Equipment" | "Ashes of War" | "Memorize Spells"

const selectTitle = (rootState: RootState): TitleString => {
    const ashesOfWar = selectCustomizing(rootState)
    if (ashesOfWar) {
        return "Ashes of War"
    }
    const currentMenu = selectCurrentMenu(rootState)
    switch (currentMenu) {
        // case "armor":
        //     return "Armor"
        case "spell":
            return "Memorize Spells"
        // case "talisman":
        //     return "Talismans"
        // case "weapon":
        //     return "Weapons"
        default:
            return "Equipment"
    }
}

const selectTitleIconUrl = (rootState: RootState): string => {
    const size: CloudflareVariant = "128"
    const titleString = selectTitle(rootState)
    switch (titleString) {
        case "Ashes of War":
            return `https://imagedelivery.net/${CONFIG.cloudflareHash}/ui/title-icons/ashes-of-war/${size}`
        case "Memorize Spells":
            return `https://imagedelivery.net/${CONFIG.cloudflareHash}/ui/title-icons/spells/${size}`
        case "Equipment":
            return `https://imagedelivery.net/${CONFIG.cloudflareHash}/ui/title-icons/equipment/${size}`
        default:
            return `https://imagedelivery.net/${CONFIG.cloudflareHash}/ui/title-icons/equipment/${size}`
    }
}

// =============================================================================
// Export
// =============================================================================

export const CoreSelectors = {
    darkModeEnabled: selectDarkModeEnabled,
    userMenuOpened: selectUserMenuOpened,
    sideNavOpened: selectSideNavOpened,
    expandedSections: selectExpandedSections,
    title: selectTitle,
    titleIconUrl: selectTitleIconUrl,
}
