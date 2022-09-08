import { createAsyncThunk } from "@reduxjs/toolkit"

import type { RootState } from "@app/state"
import { Selectors } from "@app/state"
import { FeatureKeys } from "@app/constants"
import { BitlyClient, isAxiosError, logger, CONFIG } from "@app/util"

const actionName = `${FeatureKeys.ImportExport}/buildUrl`

export const buildUrl = createAsyncThunk<string, void, { rejectValue: any }>(actionName, async (_, thunkApi) => {
    try {
        const rootState = thunkApi.getState() as RootState
        const rawData = Selectors.ImportExport.buildData.compact(rootState)
        const longUrl = `${CONFIG.clientUrl}/data?data=${JSON.stringify(rawData)}`
        const response = await BitlyClient.shorten(longUrl)
        return response.link
    } catch (error) {
        logger.error(error)
        if (isAxiosError(error)) {
            return thunkApi.rejectWithValue(error.response.data)
        } else {
            return thunkApi.rejectWithValue("unable to generate url")
        }
    }
})
