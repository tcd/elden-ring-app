import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { LocationChangePayload } from "@app/types"
import { RoutingState, INITIAL_ROUTING_STATE as INITIAL_STATE } from "./state"
import { CoreActions } from "@app/features/core"

export const reducers = {
    locationChange: (state: RoutingState, { payload }: PayloadAction<LocationChangePayload>) => {
        state.previousLocationChanges.push(payload)
        state.previousLocations.push(state.location)
        state.location = payload.location
        return state
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<RoutingState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
}
