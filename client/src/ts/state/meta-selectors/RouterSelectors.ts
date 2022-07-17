import { history, RootState } from "@app/state/store"
import { RouterState } from "redux-first-history"

const _selectSlice = (rootState: RootState): RouterState => rootState.router

const selectPreviousLocations = (rootState: RootState) => _selectSlice(rootState)?.previousLocations ?? []

const mainPagePathnames = [
    "/",
    "/equipment",
    "/builder",
]

const selectLastMainPage = (rootState: RootState) => {
    const previousStates = selectPreviousLocations(rootState)
    let lastMainPage = "/"
    for (const state of previousStates) {
        if (mainPagePathnames.includes(state.location.pathname)) {
            lastMainPage = state.location.pathname
            break
        }
    }
    return lastMainPage
}

export const RouterSelectors = {
    routerState: _selectSlice,
    lastMainPage: selectLastMainPage,
}
