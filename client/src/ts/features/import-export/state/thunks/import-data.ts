import { createAsyncThunk } from "@reduxjs/toolkit"

import type { BuildData } from "@app/types"
import { FeatureKeys } from "@app/constants"
import { logger, isBuildData } from "@app/util"

const actionName = `${FeatureKeys.ImportExport}/importData`

export const importData = createAsyncThunk<BuildData, BuildData, { rejectValue: string }>(actionName, async (data: BuildData, thunkApi) => {
    try {
        if (isBuildData(data)) {
            return data
        } else {
            logger.warn({
                message: "invalid build data for import",
                data,
            })
            return thunkApi.rejectWithValue("invalid data")
        }
    } catch (error) {
        logger.warn(error)
        return thunkApi.rejectWithValue("unable to import data")
    }
})
