import type { RootState } from "@app/state"
import type { FiniteResource } from "@app/data"
import { FiniteResources } from "@app/data"

// const selectChecklistState = (state: RootState) => { return state?.Checklist }

const selectResources = (state: RootState): FiniteResource[] => {
    const obtainedState = state.Checklist.obtainedResources
    return FiniteResources.map(resource => ({
        ...resource,
        obtained: (obtainedState[resource.id.toString()] == true),
    }))
}

// =============================================================================
// Export
// =============================================================================

export const ChecklistSelectors = {
    resources: selectResources,
}
