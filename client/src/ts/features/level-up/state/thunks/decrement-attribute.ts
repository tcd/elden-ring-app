import { createAsyncThunk } from "@reduxjs/toolkit"

import { AttributeName } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { RootState, Selectors } from "@app/state"

const actionType = `${FEATURE_KEYS.LevelUp}/decrementAttribute`

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
