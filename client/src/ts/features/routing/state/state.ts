import type { Location } from "react-router-dom"
import { createSlice } from "@reduxjs/toolkit"

import type { LocationChangePayload } from "@app/types"
import { FeatureKeys } from "@app/constants"

import { reducers, extraReducers } from "./reducers"

export interface RoutingState {
    location?: Location
    previousLocations: Location[]
    previousLocationChanges: LocationChangePayload[]
}

export const INITIAL_ROUTING_STATE: RoutingState = {
    location: null,
    previousLocations: [],
    previousLocationChanges: [],
}

export const RoutingSlice = createSlice({
    name: FeatureKeys.Routing,
    initialState: INITIAL_ROUTING_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
