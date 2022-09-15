import { createAsyncThunk } from "@reduxjs/toolkit"

import type { BuildData } from "@app/types"
import { FeatureKeys } from "@app/constants"
import { logger, isBuildData, isBlank } from "@app/util"

const actionName = `${FeatureKeys.ImportExport}/importData`

export const importData = createAsyncThunk<BuildData, any, { rejectValue: string }>(actionName, async (queryParams: any, thunkApi) => {
    try {

        if (isBlank(queryParams?.data)) {
            return thunkApi.rejectWithValue("invalid query params")
        }
        let buildData: BuildData

        try {
            buildData = JSON.parse(queryParams.data)
        } catch (error) {
            return thunkApi.rejectWithValue("invalid data param")
        }

        if (isBuildData(buildData)) {
            return buildData
        } else {
            return thunkApi.rejectWithValue("invalid build data")
        }
    } catch (error) {
        logger.warn(error)
        return thunkApi.rejectWithValue("unable to import data")
    }
})
