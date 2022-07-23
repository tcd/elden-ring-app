import { Action, Location } from "history"

import { RootState } from "@app/state"
import { _selectSlice } from "./selectSlice"

/**
 * An entry in the history stack. A location contains information about the
 * URL path, as well as possibly some arbitrary state and a key.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location
 */
export const selectLocation = (rootState: RootState): Location => {
    return _selectSlice(rootState)?.location
}

/**
 * Previous entries in the history stack.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location
 */
export const selectPreviousLocations = (rootState: RootState) => {
    return _selectSlice(rootState)?.previousLocations
}

/**
 * How we got to the current *Location*.
 *
 * *"Actions represent the type of change to a location value."*
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
export const selectAction = (rootState: RootState): Action => {
    return _selectSlice(rootState)?.action
}
