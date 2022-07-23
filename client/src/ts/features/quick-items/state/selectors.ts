import { RootState } from "@app/state"
import { QuickItemsState } from "./state"

const _selectSlice = (rootState: RootState): QuickItemsState => rootState?.QuickItems

const selectMobileTab = (rootState: RootState) => _selectSlice(rootState)?.mobileTab

const selectActiveSlotId = (rootState: RootState): any => {
    return _selectSlice(rootState)?.activeSlotId
}

export const QuickItemsSelectors = {
    activeSlotId: selectActiveSlotId,
    mobileTab: selectMobileTab,
}
