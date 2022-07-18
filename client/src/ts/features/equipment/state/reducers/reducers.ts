import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    EquipmentType,
    EquipmentSlotId,
} from "@app/types"
import { isLocationChange } from "@app/util"
import { CoreActions } from "@app/features/core"
import { EquipmentState, INITIAL_EQUIPMENT_STATE } from "../state"
import { handleLocationChange } from "./helpers"

interface SetActiveSlotPayload {
    type: EquipmentType
    id: EquipmentSlotId
}

export const reducers = {
    clickSlot(state: EquipmentState, { payload: { type, id } }: PayloadAction<SetActiveSlotPayload>) {
        state.activeType   = type
        state.activeSlotId = id
    },
    setActiveSlot(state: EquipmentState, { payload: { type, id } }: PayloadAction<SetActiveSlotPayload>) {
        state.activeType   = type
        state.activeSlotId = id
    },
    // incrementAttribute(state: BuilderState, { payload: { name } }: PayloadAction<{ name: AttributeName }>) {
    //     const correctedLevel = selectCorrectedAttributeLevel(state, name)
    //     if (correctedLevel < 99) {
    //         state.attributes[name]++
    //     }
    // },
}

export const extraReducers = (builder: ActionReducerMapBuilder<EquipmentState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_EQUIPMENT_STATE)
        .addMatcher(isLocationChange, (state, action) => handleLocationChange(state, action))
}
