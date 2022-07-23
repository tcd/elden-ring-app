import { RootState } from "@app/state"
import { RouterState } from "redux-first-history"

export const _selectSlice = (rootState: RootState): RouterState => {
    return rootState?.Router
}
