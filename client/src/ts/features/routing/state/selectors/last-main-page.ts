import { RootState } from "@app/state"
import { _selectSlice } from "./select-slice"
import { CoreSelectors } from "./core"

const mainPagePathnames = [
    // "/",
    "/equipment",
    "/builder",
    "/status",
]

export const selectLastMainPage = (rootState: RootState) => {
    const previousStates = CoreSelectors.previousLocations(rootState)
    let lastMainPage = "/"
    for (const location of previousStates) {
        if (mainPagePathnames.includes(location.pathname)) {
            lastMainPage = location.pathname
            break
        }
    }
    // return lastMainPage + "#grid"
    return lastMainPage
}
