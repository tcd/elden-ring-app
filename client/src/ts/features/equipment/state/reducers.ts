import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type {
    EquipmentType,
    EquipmentSlotId,
} from "@app/types"
import { CoreActions } from "@app/features/core"

import {
    EquipmentState,
    INITIAL_EQUIPMENT_STATE as INITIAL_STATE,
} from "./state"

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
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
}
