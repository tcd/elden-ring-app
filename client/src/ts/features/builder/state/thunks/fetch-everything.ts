import { createAsyncThunk } from "@reduxjs/toolkit"

import {
    FEATURE_KEYS,
    ApiClient,
    LocalStorage,
} from "@util"

const actionName = `${FEATURE_KEYS.Core}/fetch/everything`

export const fetchEverything = createAsyncThunk(actionName, async (_, thunkApi) => {
    try {
        const response = await ApiClient.getEverything()
        const result = response?.data
        // if (result == undefined) {
        //     debugger
        // } else {
        //     LocalStorage.set("KitchenSink", result)
        // }
        return result
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
})
