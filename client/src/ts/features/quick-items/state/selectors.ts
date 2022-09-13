import type { RootState } from "@app/state"

import type { QuickItemsState } from "./state"

/** @private */
const _selectSlice = (rootState: RootState): QuickItemsState => rootState?.QuickItems

const selectActiveSlotId = (rootState: RootState): any => {
    return _selectSlice(rootState)?.activeSlotId
}

export const QuickItemsSelectors = {
    activeSlotId: selectActiveSlotId,
}
