import { createAsyncThunk } from "@reduxjs/toolkit"

import type { BuildData } from "@app/types"
// import type { RootState } from "@app/state"
// import { Selectors } from "@app/state"
import { FeatureKeys } from "@app/constants"
import { logger } from "@app/util"

const actionName = `${FeatureKeys.Core}/importData`

export const importData = createAsyncThunk<BuildData, string>(actionName, async (encodedData: string, thunkApi) => {
    try {
        const data: BuildData = JSON.parse(encodedData)
        return data
    } catch (error) {
        logger.warn(error)
        return thunkApi.rejectWithValue("unable to import data")
    }
})
