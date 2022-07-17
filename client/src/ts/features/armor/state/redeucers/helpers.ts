import { ArmorType } from "@app/constants"
import { isBlank } from "@app/util"
import { ArmorState } from "../state"

export const noArmorSelected = (slice: ArmorState): boolean => {
    const armorNames = slice?.armorNames
    if (armorNames?.Arms  != null) { return false }
    if (armorNames?.Chest != null) { return false }
    if (armorNames?.Head  != null) { return false }
    if (armorNames?.Legs  != null) { return false }
    return true
}

const PATH_PATTERN = /^\/armor\/(?<slotId>(Head|Chest|Arms|Legs))(?<tab>#(grid|detail|status)?)?$/

interface PathParams {
    slotId: ArmorType
    tab: "grid" | "detail" | "status"
}

const matchPath = (path: string): PathParams => {
    if (!path.startsWith("/armor")) {
        return null
    }
    const match = PATH_PATTERN.exec(path)
    const result = { slotId: null, tab: null, ashesOfWar: null }
    if (match?.groups) {
        if (match?.groups?.slotId) {
            result.slotId = match.groups.slotId as ArmorType
        }
        if (match?.groups?.tab) {
            result.tab = match.groups.tab as "grid" | "detail" | "status"
        }
        return result
    } else {
        return null
    }
}

export const handleLocationChange =  (state: ArmorState, action): ArmorState => {
    // @ts-ignore: next-line
    const pathname: string = action?.payload?.location?.pathname
    // @ts-ignore: next-line
    const hash: string = action?.payload?.location?.hash

    if (!pathname?.startsWith("/armor")) {
        return state
    }
    if (!isBlank(hash)) {
        state.mobileTab = hash.replaceAll("#", "") as ("grid" | "detail" | "status")
    }

    const pathParams = matchPath(pathname)
    if (pathParams == null) {
        return state
    }
    const { slotId, tab } = pathParams
    if (tab != null) {
        state.mobileTab = tab
    }
    if (isBlank(state.activeType)) {
        if (slotId != null) {
            state.oldName         = state.armorNames[slotId]
            state.activeType      = slotId
            state.menuHasScrolled = false
        } else {
            state.activeType      = null
            state.oldName         = null
            state.menuHasScrolled = true
        }
    }
    return state
}
