import { BuilderSlice } from "./state"
import {
    fetchEverything,
} from "./thunks"

export const BuilderActions = {
    ...BuilderSlice.actions,
    fetchEverything,
}
