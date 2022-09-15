import type { RootState } from "@app/state"

import type { EquipmentState } from "../state"

/** @private */
export const _selectSlice = (rootState: RootState): EquipmentState => {
    return rootState?.Equipment
}

