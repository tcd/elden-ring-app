import { createAsyncThunk } from "@reduxjs/toolkit"

import type { RootState } from "@app/state"
import { Selectors } from "@app/state"
import { FeatureKeys } from "@app/constants"

const actionName = `${FeatureKeys.ImportExport}/buildUrl`

export const buildUrl = createAsyncThunk<string, void>(actionName, async (_, thunkApi) => {
    try {
        const rootState = thunkApi.getState() as RootState
        const rawData = Selectors.ImportExport.buildData.raw(rootState)
        return `localhost:8000/data?data=${JSON.stringify(rawData)}`
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
})
