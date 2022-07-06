import { sum } from "lodash"

import { LEVEL_RUNES_MAP } from "@app/data"
import { Attributes, AttributeName, StartingClass } from "@app/types"
import { RootState } from "@app/state"
import { selectBuilderSlice } from "./select-builder-slice"
import { selectStartingClass } from "./starting-class"

// =============================================================================
// Helpers
// =============================================================================

/** Select the starting level of a given attribute for a specific class. */
const _selectBaseAttribute = (sClass: StartingClass, attribute: AttributeName): Integer => {
    return sClass?.[attribute] ?? 0
}

// /**
//  * Used this to get state to develop against.
//  */
// const determineAttributes = (sClass: StartingClass, levels: Attributes): Attributes => {
//     const result: Attributes = {} as Attributes
//     for (const [attr, level] of Object.entries(levels)) {
//         const baseAttr = _selectBaseAttribute(sClass, attr as AttributeName)
//         const correctedAttr = level - baseAttr
//         if (correctedAttr < 0) {
//             result[attr] = 0
//         } else {
//             result[attr] = correctedAttr
//         }
//     }
//     return result
// }

// =============================================================================
// From Starting Class
// =============================================================================

const selectBaseAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    return _selectBaseAttribute(selectStartingClass(rootState), attribute)
}

// const selectBaseVigor        = (rootState: RootState): Integer => selectStartingClass(rootState)?.vigor
// const selectBaseMind         = (rootState: RootState): Integer => selectStartingClass(rootState)?.mind
// const selectBaseEndurance    = (rootState: RootState): Integer => selectStartingClass(rootState)?.endurance
// const selectBaseStrength     = (rootState: RootState): Integer => selectStartingClass(rootState)?.strength
// const selectBaseDexterity    = (rootState: RootState): Integer => selectStartingClass(rootState)?.dexterity
// const selectBaseIntelligence = (rootState: RootState): Integer => selectStartingClass(rootState)?.intelligence
// const selectBaseFaith        = (rootState: RootState): Integer => selectStartingClass(rootState)?.faith
// const selectBaseArcane       = (rootState: RootState): Integer => selectStartingClass(rootState)?.arcane

// =============================================================================
// From Leveling Up
// =============================================================================

export const selectAttributes = (rootState: RootState) => selectBuilderSlice(rootState)?.attributes

const selectAddedAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    return selectAttributes(rootState)?.[attribute] ?? 0
}

export const selectAddedVigor        = (rootState: RootState): Integer => selectAddedAttribute(rootState, "vigor")
export const selectAddedMind         = (rootState: RootState): Integer => selectAddedAttribute(rootState, "mind")
export const selectAddedEndurance    = (rootState: RootState): Integer => selectAddedAttribute(rootState, "endurance")
export const selectAddedStrength     = (rootState: RootState): Integer => selectAddedAttribute(rootState, "strength")
export const selectAddedDexterity    = (rootState: RootState): Integer => selectAddedAttribute(rootState, "dexterity")
export const selectAddedIntelligence = (rootState: RootState): Integer => selectAddedAttribute(rootState, "intelligence")
export const selectAddedFaith        = (rootState: RootState): Integer => selectAddedAttribute(rootState, "faith")
export const selectAddedArcane       = (rootState: RootState): Integer => selectAddedAttribute(rootState, "arcane")

// =============================================================================
// All Together
// =============================================================================

// TODO: account for effects
const selectCorrectedAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    const fromClass      = selectBaseAttribute(rootState, attribute)
    const fromAttributes = selectAddedAttribute(rootState, attribute)
    return fromClass + fromAttributes
}

export const selectCorrectedVigor        = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "vigor")
export const selectCorrectedMind         = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "mind")
export const selectCorrectedEndurance    = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "endurance")
export const selectCorrectedStrength     = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "strength")
export const selectCorrectedDexterity    = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "dexterity")
export const selectCorrectedIntelligence = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "intelligence")
export const selectCorrectedFaith        = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "faith")
export const selectCorrectedArcane       = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "arcane")

export const selectCorrectedAttributes = (rootState: RootState): Attributes => {
    return {
        vigor:        selectCorrectedVigor(rootState),
        mind:         selectCorrectedMind(rootState),
        endurance:    selectCorrectedEndurance(rootState),
        strength:     selectCorrectedStrength(rootState),
        dexterity:    selectCorrectedDexterity(rootState),
        intelligence: selectCorrectedIntelligence(rootState),
        faith:        selectCorrectedFaith(rootState),
        arcane:       selectCorrectedArcane(rootState),
    }
}

// =============================================================================
// Level
// =============================================================================

const selectLevelFromStartingClass = (rootState: RootState): Integer => {
    return selectStartingClass(rootState)?.level ?? 0
}

const selectLevelFromAttributes = (rootState: RootState): Integer => {
    const attributes = selectAttributes(rootState)
    const attributeValues = Object.values(attributes)
    return sum(attributeValues)
}

export const selectCorrectedLevel = (rootState: RootState): Integer => {
    const fromClass      = selectLevelFromStartingClass(rootState)
    const fromAttributes = selectLevelFromAttributes(rootState)
    return fromClass + fromAttributes
}

// =============================================================================
// Old
// =============================================================================

export const selectRunesForNextLevel = (rootState: RootState): Integer => {
    const level = selectCorrectedLevel(rootState)
    const runes = LEVEL_RUNES_MAP[level.toString()]?.runes ?? "?"
    return runes
}
