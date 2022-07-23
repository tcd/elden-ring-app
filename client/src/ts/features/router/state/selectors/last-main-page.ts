import { RootState } from "@app/state"
import { _selectSlice } from "./select-slice"
import { selectPreviousLocations } from "./core"

const mainPagePathnames = [
    "/",
    "/equipment",
    "/builder",
]

export const selectLastMainPage = (rootState: RootState) => {
    const previousStates = selectPreviousLocations(rootState)
    let lastMainPage = "/"
    for (const state of previousStates) {
        if (mainPagePathnames.includes(state.location.pathname)) {
            lastMainPage = state.location.pathname
            break
        }
    }
    // return lastMainPage + "#grid"
    return lastMainPage
}
