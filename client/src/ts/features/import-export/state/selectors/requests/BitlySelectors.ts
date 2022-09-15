import type { RootState } from "@app/state"

import { selectSlice } from "../select-slice"

const _selectRequest = (rootState: RootState) => selectSlice(rootState)?.requests?.buildUrl

const selectBuildUrlPending  = (rootState: RootState) => _selectRequest(rootState)?.status === "pending"
const selectBuildUrlComplete = (rootState: RootState) => ["fulfilled", "rejected"].includes(_selectRequest(rootState)?.status)
const selectBuildUrlResponse = (rootState: RootState) => _selectRequest(rootState)?.response

export const BitlySelectors = {
    pending:  selectBuildUrlPending,
    complete: selectBuildUrlComplete,
    response: selectBuildUrlResponse,
}
