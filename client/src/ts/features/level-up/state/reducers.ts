import type { ActionReducerMapBuilder } from "@reduxjs/toolkit"

// import { STARTING_CLASSES } from "@app/data"
// import { AttributeName } from "@app/types"
import { CoreActions } from "@app/features/core"
import { ImportExportActions } from "@app/features/import-export"

import type { LevelUpState } from "./state"
import { INITIAL_LEVEL_UP_STATE as INITIAL_STATE } from "./state"
import { decrementAttribute, incrementAttribute } from "./thunks"

export const reducers = { }

export const extraReducers = (builder: ActionReducerMapBuilder<LevelUpState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(ImportExportActions.importData.fulfilled, (_, { payload: { attributes = {} } }): LevelUpState => ({
            ...INITIAL_STATE,
            // @ts-ignore: next-line
            attributes: { ...attributes },
            importComplete: true,
        }))
        .addCase(incrementAttribute.fulfilled, (state: LevelUpState, { payload: { attribute }}) => {
            state.attributes[attribute]++
        })
        .addCase(decrementAttribute.fulfilled, (state: LevelUpState, { payload: { attribute }}) => {
            state.attributes[attribute]--
        })
}
