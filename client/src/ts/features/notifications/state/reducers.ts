import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { INotificationOptions } from "@app/types"
import { updateArray } from "@app/util"
import {
    CoreActions,
    ImportExportActions,
} from "@app/features"

import type { NotificationsState } from "./state"
import { INITIAL_NOTIFICATIONS_STATE as INITIAL_STATE } from "./state"
import {
    createNotification,
    // notifySuccess,
    notifyError,
    notifyErrorManual,
} from "./helpers"

export const reducers = {
    /** Remove all notifications from state. */
    clearAllNotifications: (state: NotificationsState) => {
        state.notifications = INITIAL_STATE.notifications
    },
    /** Add a notification to state. */
    addNotification: (state: NotificationsState, { payload }: PayloadAction<INotificationOptions>) => {
        state.notifications.push(createNotification(payload))
    },
    /** Remove a notification from state. */
    removeNotification: (state: NotificationsState, { payload: { id } }: PayloadAction<{ id: any }>) => {
        state.notifications = state.notifications.filter(x => x.id != id)
    },
    /** This exists so we can animate notifications out before removing them from state. */
    dismissNotification: (state: NotificationsState, { payload: { id } }: PayloadAction<{ id: any }>) => {
        state.notifications = updateArray({
            array: state.notifications,
            finder: (x) => x.id == id,
            changer: (_) => ({ dismissed: true }),
        })
        return state
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<NotificationsState>) => {
    builder
        // ---------------------------------------------------------------------
        // Core
        // ---------------------------------------------------------------------
        .addCase(CoreActions.resetState, () => {
            return {
                ...INITIAL_STATE,
                // notifications: [
                //     createNotification({
                //         variant: "success",
                //         message: "State Reset",
                //     }),
                // ],
            }
        })
        // ---------------------------------------------------------------------
        // Import/Export
        // ---------------------------------------------------------------------
        .addCase(ImportExportActions.buildUrl.rejected,   (state, action) => notifyError(state, action, "Unable to build url"))
        .addCase(ImportExportActions.importData.rejected, (state, action) => notifyErrorManual(state, action.payload))
}
