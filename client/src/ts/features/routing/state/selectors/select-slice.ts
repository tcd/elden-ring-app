import { RootState } from "@app/state"
import { RoutingState } from "../state"

export const _selectSlice = (rootState: RootState): RoutingState => {
    return rootState?.Routing
}
