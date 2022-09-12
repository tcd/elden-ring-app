import { createAsyncThunk } from "@reduxjs/toolkit"

import type { RootState } from "@app/state"
import { Selectors } from "@app/state"
import { FeatureKeys } from "@app/constants"
import {
    FirebaseClient,
    isAxiosError,
    logger,
    CONFIG,
    SerializedAxiosError,
    serializeAxiosError,
} from "@app/util"

const actionName = `${FeatureKeys.ImportExport}/buildUrl`

export const buildUrl = createAsyncThunk<string, void, { rejectValue: string | SerializedAxiosError }>(actionName, async (_, thunkApi) => {
    try {
        const rootState = thunkApi.getState() as RootState
        const rawData = Selectors.ImportExport.buildData.compact(rootState)
        const longUrl = `${CONFIG.clientUrl}/import?data=${JSON.stringify(rawData)}`

        const response = await FirebaseClient.shortLink(longUrl)
        return response.shortLink
    } catch (error) {
        logger.error(error)
        if (isAxiosError(error)) {
            return thunkApi.rejectWithValue(serializeAxiosError(error))
        } else {
            return thunkApi.rejectWithValue("unable to generate url")
        }
    }
})
