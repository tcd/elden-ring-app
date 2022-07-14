import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import { STARTING_CLASSES } from "@app/data"
import { AttributeName } from "@app/types"
import { CoreActions } from "@app/features/core"
import { LevelUpState, INITIAL_LEVEL_UP_STATE } from "./state"
import { decrementAttribute, incrementAttribute } from "./thunks"

export const reducers = { }

export const extraReducers = (builder: ActionReducerMapBuilder<LevelUpState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_LEVEL_UP_STATE)
        .addCase(incrementAttribute.fulfilled, (state: LevelUpState, { payload: { attribute }}) => {
            state.attributes[attribute]++
        })
        .addCase(decrementAttribute.fulfilled, (state: LevelUpState, { payload: { attribute }}) => {
            state.attributes[attribute]--
        })
}
