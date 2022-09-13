import type { RootState } from "@app/state"

import type { ImportExportState } from "../state"

/** @private */
export const selectSlice = (rootState: RootState): ImportExportState => {
    return rootState?.ImportExport
}
