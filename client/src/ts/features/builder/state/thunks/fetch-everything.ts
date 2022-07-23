import { createAsyncThunk } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import {
    ApiClient,
} from "@app/util"

const actionName = `${FeatureKeys.Builder}/fetch/everything`

export const fetchEverything = createAsyncThunk(actionName, async (_, thunkApi) => {
    try {
        const response = await ApiClient.getEverything()
        const result = response?.data
        return result
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
})
