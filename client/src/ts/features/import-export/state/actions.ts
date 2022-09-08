import { ImportExportSlice } from "./state"
import {
    buildUrl,
    importData,
} from "./thunks"

export const ImportExportActions = {
    ...ImportExportSlice.actions,
    buildUrl,
    importData,
}
