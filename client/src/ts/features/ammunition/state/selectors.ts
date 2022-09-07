import type { AmmunitionSlotId, AmmunitionType } from "@app/types"
import type { RootState } from "@app/state"
import { isBlank } from "@app/util"

import type { AmmunitionState } from "./state"

const selectSlice = (rootState: RootState): AmmunitionState => rootState?.Ammunition

const selectSlots = (rootState: RootState) => selectSlice(rootState)?.slots
const selectActiveSlotId = (rootState: RootState): AmmunitionSlotId => selectSlice(rootState)?.activeSlotId

const selectActiveType = (rootState: RootState): AmmunitionType => {
    const activeSlotId = selectActiveSlotId(rootState)
    if (isBlank(activeSlotId)) {
        return null
    }
    if (activeSlotId.startsWith("A")) {
        return "Arrow"
    } else {
        return "Bolt"
    }
}

export const AmmunitionSelectors = {
    slots: selectSlots,
    activeSlotId: selectActiveSlotId,
    activeType: selectActiveType,
}
