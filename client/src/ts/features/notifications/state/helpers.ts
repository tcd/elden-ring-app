import type { PayloadAction } from "@reduxjs/toolkit"
// import { v4 as uuidV4 } from "uuid";

import type { INotification, INotificationOptions } from "@app/types"
import { isBlank } from "@app/util"

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
//
// // https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/createAsyncThunk.ts
// export const notifyError = (state: NotificationsState, _action: any, message: string): NotificationsState => {
//     const action: PayloadAction<IApiResponse, any, { rejectValue: IApiResponse }> = _action
//     let _message = ""
//     if (isBlank(action?.payload)) {
//         state.notifications.push(createNotification({
//             variant: "error",
//             message: message,
//         }))
//         return state
//     }
//     if (action?.payload?.status && [401, 403].includes(action.payload.status)) {
//         state.notifications.push(createNotification({
//             variant: "error",
//             message: "Unauthorized",
//         }))
//         return state
//     }
//     if (action.payload?.properlyFormatted) {
//         if (action.payload?.status) {
//             _message += `${action.payload.status}: `
//         }
//         if (!isBlank(action.payload?.errorResponse?.message)) {
//             _message += action.payload?.errorResponse?.message
//         }
//     }
//     state.notifications.push(createNotification({
//         variant: "error",
//         message: (_message == "" ? message : _message),
//     }))
//     return state
// }
