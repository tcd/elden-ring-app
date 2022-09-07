import { CoreSlice } from "./state"
import { importData } from "./thunks"

export const CoreActions = {
    ...CoreSlice.actions,
    importData,
}
