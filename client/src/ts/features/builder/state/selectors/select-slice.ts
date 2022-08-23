import { RootState } from "@app/state"
import { BuilderState } from "@app/features/builder"

export const selectBuilderSlice = (rootState: RootState): BuilderState => {
    return rootState?.Builder
}
