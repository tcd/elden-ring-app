import { ArmorType, TalismanSlotId } from "@app/constants"
import { isBlank } from "@app/util"
import { TalismansState } from "../state"

const PATH_PATTERN = /^\/talismans\/(?<slotId>(1|2|3|4))(?<tab>#(grid|detail|status)?)?$/

interface PathParams {
    slotId: TalismanSlotId
    tab: "grid" | "detail" | "status"
}

const matchPath = (path: string): PathParams => {
    if (!path.startsWith("/talismans")) {
        return null
    }
    const match = PATH_PATTERN.exec(path)
    const result = { slotId: null, tab: null, ashesOfWar: null }
    if (match?.groups) {
        if (match?.groups?.slotId) {
            result.slotId = match.groups.slotId as TalismanSlotId
        }
        if (match?.groups?.tab) {
            result.tab = match.groups.tab as "grid" | "detail" | "status"
        }
        return result
    } else {
        return null
    }
}

export const handleLocationChange =  (state: TalismansState, action): TalismansState => {
    // @ts-ignore: next-line
    const pathname: string = action?.payload?.location?.pathname
    // @ts-ignore: next-line
    const hash: string = action?.payload?.location?.hash

    if (!pathname?.startsWith("/talismans")) {
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
    if (isBlank(state.activeSlotId)) {
        if (slotId != null) {
            state.oldTalismanName = state.talismanNames[slotId]
            state.activeSlotId    = slotId
            state.menuHasScrolled = false
        } else {
            state.oldTalismanName = null
            state.activeSlotId    = null
            state.menuHasScrolled = true
        }
    }
    return state
}
