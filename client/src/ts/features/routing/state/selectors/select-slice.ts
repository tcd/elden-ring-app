import type { RootState } from "@app/state"

import type { RoutingState } from "../state"

/** @private */
export const _selectSlice = (rootState: RootState): RoutingState => {
    return rootState?.Routing
}
