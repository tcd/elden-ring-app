import { createSlice } from "@reduxjs/toolkit"

import { INotification } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

// =============================================================================

export interface NotificationsState {
    notifications: INotification[]
}

// =============================================================================

export const INITIAL_NOTIFICATIONS_STATE: NotificationsState = {
    notifications: [],
}

// =============================================================================

export const NotificationsSlice = createSlice({
    name: FeatureKeys.Notifications,
    initialState: INITIAL_NOTIFICATIONS_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
