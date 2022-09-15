import { createAsyncThunk } from "@reduxjs/toolkit"

import type { AttributeName } from "@app/types"
import { FeatureKeys } from "@app/constants"
import { RootState, Selectors } from "@app/state"

const actionType = `${FeatureKeys.LevelUp}/incrementAttribute`

export interface IncrementAttributePayload {
    attribute: AttributeName
}

export const incrementAttribute = createAsyncThunk<IncrementAttributePayload, IncrementAttributePayload>(actionType, ({ attribute }, thunkApi) => {
    return new Promise<IncrementAttributePayload>((resolve, reject) => {
        const rootState: RootState = thunkApi.getState() as RootState
        const startingClass = Selectors.StartingClass.startingClass(rootState)
        const baseLevel = startingClass[attribute]
        const addedLevels = rootState.LevelUp.attributes[attribute]
        const correctedLevel = (baseLevel + addedLevels)
        if (correctedLevel < 99) {
            resolve({ attribute })
        } else {
            reject({ attribute })
        }
    })
})
