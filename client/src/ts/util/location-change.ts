import { AnyAction } from "@reduxjs/toolkit"
import { LOCATION_CHANGE } from "redux-first-history"
import { locationChangeAction } from "redux-first-history/build/es6/actions"

type TLocationChangeAction = typeof locationChangeAction

// @ts-ignore: next-line
export const isLocationChange = (action: AnyAction): action is TLocationChangeAction => {
    return action.type == LOCATION_CHANGE
}
