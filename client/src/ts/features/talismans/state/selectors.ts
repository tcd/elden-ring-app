import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { BuilderSelectors } from "@app/features/builder"

// const selectTalismansState = (state: RootState) => { return state?.Talismans }

const selectAll = BuilderSelectors.api.talismans

const selectActiveName = (state: RootState) => { return state?.Talismans?.activeName }

const selectActiveWeapon = (state: RootState) => {
    const talismans = selectAll(state)
    const activeName = selectActiveName(state)
    if (isBlank(activeName)) {
        return null
    }
    return talismans.find(x => x.name == activeName)
}

// =============================================================================
// Export
// =============================================================================

export const TalismansSelectors = {
    all: selectAll,
    active: selectActiveWeapon,
    activeName: selectActiveName,
}
