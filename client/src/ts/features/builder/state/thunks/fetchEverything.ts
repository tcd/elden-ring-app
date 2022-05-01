import { createAsyncThunk } from "@reduxjs/toolkit"

import { FEATURE_KEYS, ApiClient } from "@util"

const actionName = `${FEATURE_KEYS.Core}/fetch/everything`

export const fetchEverything = createAsyncThunk(actionName, async (_, thunkApi) => {
    try {
        const response = await ApiClient.getEverything()
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
})
