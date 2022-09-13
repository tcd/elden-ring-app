import type { RootState } from "@app/state"

import type { CoreState } from ".."

/** @private */
export const selectSlice = (rootState: RootState): CoreState => {
    return rootState?.Core
}
