import { ArmorType } from "@app/constants"
import { isBlank } from "@app/util"
import { BuilderState } from "../state"

// const PATH_PATTERN = /^\/(builder)?(?<tab>#(level|equipment|status))$/

// interface PathParams {
//     tab: "level" | "detail" | "status"
// }

// const matchPath = (path: string): PathParams => {
//     if (!(path.startsWith("/#") || path.startsWith("/builder"))) {
//         return null
//     }
//     const match = PATH_PATTERN.exec(path)
//     const result = { slotId: null, tab: null, ashesOfWar: null }
//     if (match?.groups) {
//         if (match?.groups?.tab) {
//             result.tab = match.groups.tab as ("level" | "equipment" | "status")
//         }
//         return result
//     } else {
//         return null
//     }
// }

export const handleLocationChange =  (state: BuilderState, action): BuilderState => {
    // @ts-ignore: next-line
    const pathname: string = action?.payload?.location?.pathname
    // @ts-ignore: next-line
    const hash: string = action?.payload?.location?.hash

    if (!(pathname.startsWith("/#") || pathname.startsWith("/builder"))) {
        return state
    }
    if (!isBlank(hash)) {
        state.mobileTab = hash.replaceAll("#", "") as ("level" | "equipment" | "status")
    }
    return state
}

