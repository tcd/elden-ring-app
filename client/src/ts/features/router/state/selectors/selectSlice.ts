import { RootState } from "@app/state"

export const _selectSlice = (rootState: RootState) => {
    return rootState?.Router
}
