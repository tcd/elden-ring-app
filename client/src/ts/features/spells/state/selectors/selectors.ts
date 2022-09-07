import type { RootState } from "@app/state"
import { isBlank } from "@app/util"
import { BuilderSelectors } from "@app/features/builder"

import type { SpellsState } from "../state"

const selectAllSpells = BuilderSelectors.api.spells

const selectSlice = (rootState: RootState): SpellsState => rootState.Spells

const selectSlots = (rootState: RootState) => selectSlice(rootState)?.slots
const selectActiveSlotId = (rootState: RootState) => selectSlice(rootState)?.activeSlotId

const selectActiveName = (rootState: RootState) => {
    return selectSlots(rootState)[selectActiveSlotId(rootState)] ?? null
}

const selectActiveSpell = (rootState: RootState) => {
    const activeName = selectActiveName(rootState)
    if (isBlank(activeName)) {
        return null
    }
    const spells = selectAllSpells(rootState)
    return spells.find(x => x.name == activeName) ?? null
}

// =============================================================================
// Export
// =============================================================================

export const SpellsSelectors = {
    slots: selectSlots,
    activeSlotId: selectActiveSlotId,
    all: selectAllSpells,
    activeSpell: selectActiveSpell,
    activeName: selectActiveName,
}
