import { RootState } from "@app/state"
import { BuilderState } from "@app/features/builder"

export const selectBuilderState = (rootState: RootState): BuilderState => rootState?.Builder
