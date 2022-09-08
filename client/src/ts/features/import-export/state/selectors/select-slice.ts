import type { RootState } from "@app/state"

import type { ImportExportState } from "../state"

export const selectBuilderSlice = (rootState: RootState): ImportExportState => {
    return rootState?.ImportExport
}
