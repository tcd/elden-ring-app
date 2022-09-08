import type { RootState } from "@app/state"

import { selectBuilderSlice } from "./select-slice"

const _selectRequests = (rootState: RootState) => selectBuilderSlice(rootState)?.requests

const _selectBuildUrl = (rootState: RootState) => _selectRequests(rootState)?.buildUrl
const _selectImportData = (rootState: RootState) => _selectRequests(rootState)?.importData

// =============================================================================
// Build Url
// =============================================================================

const selectBuildUrlPending  = (rootState: RootState) => _selectBuildUrl(rootState)?.status === "pending"
const selectBuildUrlComplete = (rootState: RootState) => ["fulfilled", "rejected"].includes(_selectBuildUrl(rootState)?.status)
const selectBuildUrlResponse = (rootState: RootState) => _selectBuildUrl(rootState)?.response

// =============================================================================
// Build Url
// =============================================================================

const selectImportDataPending  = (rootState: RootState) => _selectImportData(rootState)?.status === "pending"
const selectImportDataComplete = (rootState: RootState) => ["fulfilled", "rejected"].includes(_selectImportData(rootState)?.status)
const selectImportDataResponse = (rootState: RootState) => _selectImportData(rootState)?.response

export const RequestsSelectors = {
    buildUrl: {
        pending:  selectBuildUrlPending,
        complete: selectBuildUrlComplete,
        response: selectBuildUrlResponse,
    },
    importData: {
        pending:  selectImportDataPending,
        complete: selectImportDataComplete,
        response: selectImportDataResponse,
    },
}
