import { createAsyncThunk } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { AttributeName } from "@app/types"
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
