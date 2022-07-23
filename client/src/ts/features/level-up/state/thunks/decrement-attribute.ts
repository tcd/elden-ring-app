import { createAsyncThunk } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { AttributeName } from "@app/types"
import { RootState, Selectors } from "@app/state"

const actionType = `${FeatureKeys.LevelUp}/decrementAttribute`

export interface DecrementAttributePayload {
    attribute: AttributeName
}

export const decrementAttribute = createAsyncThunk<DecrementAttributePayload, DecrementAttributePayload>(actionType, ({ attribute }, thunkApi) => {
    return new Promise<DecrementAttributePayload>((resolve, reject) => {
        const rootState: RootState = thunkApi.getState() as RootState
        const startingClass = Selectors.StartingClass.startingClass(rootState)
        const baseLevel = startingClass[attribute]
        const addedLevels = rootState.LevelUp.attributes[attribute]
        const correctedLevel = (baseLevel + addedLevels)
        if (correctedLevel <= baseLevel) {
            reject({ attribute })
        } else {
            resolve({ attribute })
        }
    })
})
