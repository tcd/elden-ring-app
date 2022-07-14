import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    EquipmentType,
} from "@app/types"
import { CoreActions } from "@app/features/core"
import { EquipmentState, INITIAL_EQUIPMENT_STATE } from "./state"

export const reducers = {
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
}
