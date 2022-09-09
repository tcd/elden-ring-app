import type { PayloadAction } from "@reduxjs/toolkit"
// import { v4 as uuidV4 } from "uuid";

import type { INotification, INotificationOptions } from "@app/types"
import { isAxiosSerializedError, isBlank } from "@app/util"

import { NotificationsState } from "./state"

export const createNotification = (options: INotificationOptions): INotification => {
    return {
        // computed; not options
        // id:        uuidV4(),
        id:        new Date().getTime() + Math.random(),
        dismissed: false,
        // required
        message: options.message,
        // optional
        variant:          options?.variant ?? "info",
        autoHideDuration: options?.persist ? null : options?.autoHideDuration ?? 4_000,
    }
}

// const notify = (state: NotificationsState, options: INotificationOptions): NotificationsState => {
//     state.notifications.push(createNotification(options));
//     return state;
// };

export const notifySuccess = (state: NotificationsState, message: string): NotificationsState => {
    state.notifications.push(createNotification({
        variant: "success",
        message: message,
    }))
    return state
}

export const notifyErrorManual = (state: NotificationsState, message: string): NotificationsState => {
    state.notifications.push(createNotification({
        variant: "error",
        message: message,
    }))
    return state
}

// https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/createAsyncThunk.ts
export const notifyError = (state: NotificationsState, _action: any, message: string): NotificationsState => {
    const action: PayloadAction<any, any, { rejectValue: string | any }> = _action
    let _message = ""

    // go with default message if action has no payload
    if (isBlank(action?.payload)) {
        state.notifications.push(createNotification({
            variant: "error",
            message: message,
        }))
        return state
    }

    if (isAxiosSerializedError(action?.payload)) {
        state.notifications.push(createNotification({
            variant: "error",
            message: action?.payload?.message ?? "Axios Error",
        }))
        return state
    }

    // if (action?.payload?.status && [401, 403].includes(action.payload.status)) {
    //     state.notifications.push(createNotification({
    //         variant: "error",
    //         message: "Unauthorized",
    //     }))
    //     return state
    // }
    _message = "Error"
    state.notifications.push(createNotification({
        variant: "error",
        message: (_message == "" ? message : _message),
    }))
    return state
}
