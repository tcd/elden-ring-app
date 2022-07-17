import { AmmunitionSlotId, AmmunitionType } from "@app/constants"
import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { AmmunitionState } from "./state"

const _selectSlice = (rootState: RootState): AmmunitionState => rootState?.Ammunition

const selectActiveSlotId = (rootState: RootState): AmmunitionSlotId => {
    return _selectSlice(rootState)?.activeSlotId
}

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
    activeSlotId: selectActiveSlotId,
    activeType: selectActiveType,
}
