import { createAsyncThunk } from "@reduxjs/toolkit"

import { AttributeName } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { RootState, Selectors } from "@app/state"

const actionType = `${FEATURE_KEYS.LevelUp}/incrementAttribute`

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
