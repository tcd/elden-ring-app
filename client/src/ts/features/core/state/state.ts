import { createSlice } from "@reduxjs/toolkit"

import { PageName } from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers, extraReducers } from "./reducers"
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
    name: FEATURE_KEYS.Core,
    initialState: INITIAL_CORE_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
