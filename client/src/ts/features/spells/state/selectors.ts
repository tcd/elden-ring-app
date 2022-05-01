import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { BuilderSelectors } from "@app/features/builder"

// const selectSpellsState = (state: RootState) => { return state?.Spells }

const selectAllSpells = BuilderSelectors.api.spells
// const selectAllSpells = (state: RootState) => { return state?.Spells?.spells }

const selectActiveName = (state: RootState) => { return state?.Spells?.activeName }

const selectActiveSpell = (state: RootState) => {
    const spells = selectAllSpells(state)
    const activeName = selectActiveName(state)
    if (isBlank(activeName)) {
        return null
    }
    return spells.find(x => x.name == activeName)
}

// =============================================================================
// Export
// =============================================================================

export const SpellsSelectors = {
    all: selectAllSpells,
    activeSpell: selectActiveSpell,
    activeName: selectActiveName,
}
