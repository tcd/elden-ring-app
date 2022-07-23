import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import { PageName } from "@app/types"
import { reducers, extraReducers } from "./reducers"
// FIXME: import error
import { AppFooterActionProps } from "../components/layout/app-footer"

export interface CoreState {
    /**
     * Always true.
     *
     * Can be used to determine if redux initialization is complete.
     */
    reduxReady: boolean
    sideNavOpened: boolean
    pageName: PageName
    footerActions: AppFooterActionProps[]
}

export const INITIAL_CORE_STATE: CoreState = {
    reduxReady: true,
    sideNavOpened: false,
    pageName: null,
    footerActions: [],
}

export const CoreSlice = createSlice({
    name: FeatureKeys.Core,
    initialState: INITIAL_CORE_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
