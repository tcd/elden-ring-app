import { createAsyncThunk } from "@reduxjs/toolkit"

import type { RootState } from "@app/state"
import { Selectors } from "@app/state"
import { FeatureKeys } from "@app/constants"
import {
    BitlyClient,
    FirebaseClient,
    isAxiosError,
    logger,
    CONFIG,
    sleep,
    SerializedAxiosError,
    serializeAxiosError,
} from "@app/util"

const actionName = `${FeatureKeys.ImportExport}/buildUrl`

export const buildUrl = createAsyncThunk<string, void, { rejectValue: string | SerializedAxiosError }>(actionName, async (_, thunkApi) => {
    try {
        const rootState = thunkApi.getState() as RootState
        const rawData = Selectors.ImportExport.buildData.compact(rootState)
        const longUrl = `${CONFIG.clientUrl}/data?data=${JSON.stringify(rawData)}`

        const response = await BitlyClient.shorten(longUrl)
        return response.link

//         const response = await FirebaseClient.shortLink(longUrl)
//         return response.shortLink
//
//         await sleep(2_000)
//         return "https://links.eldenring.app/link/test-2"

    } catch (error) {
        logger.error(error)
        if (isAxiosError(error)) {
            return thunkApi.rejectWithValue(serializeAxiosError(error))
        } else {
            return thunkApi.rejectWithValue("unable to generate url")
        }
    }
})
