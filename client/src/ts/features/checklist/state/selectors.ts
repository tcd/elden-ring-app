import { RootState } from "@app/state"

import {
    FiniteResource,
    FiniteResources,
} from "@app/data"

const selectChecklistState = (state: RootState) => { return state?.Checklist }

const selectResources = (state: RootState): FiniteResource[] => {
    const obtainedState = state.Checklist.obtainedResources
    return FiniteResources.map(r => ({
        ...r,
        obtained: (obtainedState[r.id.toString()] == true),
    }))
}

// =============================================================================
// Export
// =============================================================================

export const ChecklistSelectors = {
    resources: selectResources,
}
