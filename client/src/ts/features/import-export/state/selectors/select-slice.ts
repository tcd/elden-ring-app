import type { RootState } from "@app/state"

import type { ImportExportState } from "../state"

export const selectSlice = (rootState: RootState): ImportExportState => {
    return rootState?.ImportExport
}
