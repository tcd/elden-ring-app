import sum from "lodash/sum"

import type { AttributeName } from "@app/types"
import type { RootState } from "@app/state"

import type { LevelUpState } from "./state"

// =============================================================================
// Helpers
// =============================================================================

/** @private */
const _selectSlice = (rootState: RootState): LevelUpState => rootState?.LevelUp
const selectAttributes = (rootState: RootState) => _selectSlice(rootState)?.attributes

/** Select a value from `LevelUpState.attributes` (levels on top of the base attribute level) */
const selectAddedAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    return selectAttributes(rootState)?.[attribute] ?? 0
}

// =============================================================================
// Relevant Selectors
// =============================================================================

const selectAddedVigor        = (rootState: RootState): Integer => selectAddedAttribute(rootState, "vigor")
const selectAddedMind         = (rootState: RootState): Integer => selectAddedAttribute(rootState, "mind")
const selectAddedEndurance    = (rootState: RootState): Integer => selectAddedAttribute(rootState, "endurance")
const selectAddedStrength     = (rootState: RootState): Integer => selectAddedAttribute(rootState, "strength")
const selectAddedDexterity    = (rootState: RootState): Integer => selectAddedAttribute(rootState, "dexterity")
const selectAddedIntelligence = (rootState: RootState): Integer => selectAddedAttribute(rootState, "intelligence")
const selectAddedFaith        = (rootState: RootState): Integer => selectAddedAttribute(rootState, "faith")
const selectAddedArcane       = (rootState: RootState): Integer => selectAddedAttribute(rootState, "arcane")

const selectLevelFromAttributes = (rootState: RootState): Integer => {
    const attributes = selectAttributes(rootState)
    const attributeValues = Object.values(attributes)
    return sum(attributeValues)
}

export const LevelUpSelectors = {
    /** for use by other selectors */
    addedAttribute: selectAddedAttribute,
    allAddedAttributes: selectAttributes,
    /** for use by other selectors */
    addedRuneLevels: selectLevelFromAttributes,
    addedAttributes: {
        vigor:        selectAddedVigor,
        mind:         selectAddedMind,
        endurance:    selectAddedEndurance,
        strength:     selectAddedStrength,
        dexterity:    selectAddedDexterity,
        intelligence: selectAddedIntelligence,
        faith:        selectAddedFaith,
        arcane:       selectAddedArcane,
    },
}
