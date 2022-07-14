import { LEVEL_RUNES_MAP } from "@app/data"
import { AttributeName, Attributes } from "@app/types"
import { RootState } from "@app/state"
import {
    StartingClassSelectors,
    LevelUpSelectors,
    // ArmorSelectors,
    // SpellsSelectors,
    // TalismansSelectors,
    // WeaponsSelectors,
} from "@app/features"

// =============================================================================
// Corrected
// =============================================================================

const selectCorrectedAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    const fromClass      = StartingClassSelectors.baseAttribute(rootState, attribute)
    const fromAttributes = LevelUpSelectors.addedAttribute(rootState, attribute)
    return fromClass + fromAttributes
}

const selectCorrectedVigor        = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "vigor")
const selectCorrectedMind         = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "mind")
const selectCorrectedEndurance    = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "endurance")
const selectCorrectedStrength     = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "strength")
const selectCorrectedDexterity    = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "dexterity")
const selectCorrectedIntelligence = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "intelligence")
const selectCorrectedFaith        = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "faith")
const selectCorrectedArcane       = (rootState: RootState): Integer => selectCorrectedAttribute(rootState, "arcane")

// =============================================================================
// Enhanced
// =============================================================================

// TODO: finish this when we have equipment effects ironed out
const selectEnhancedAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    const corrected = selectCorrectedAttribute(rootState, attribute)
    return null
}

const selectEnhancedVigor        = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "vigor")
const selectEnhancedMind         = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "mind")
const selectEnhancedEndurance    = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "endurance")
const selectEnhancedStrength     = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "strength")
const selectEnhancedDexterity    = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "dexterity")
const selectEnhancedIntelligence = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "intelligence")
const selectEnhancedFaith        = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "faith")
const selectEnhancedArcane       = (rootState: RootState): Integer => selectEnhancedAttribute(rootState, "arcane")

// =============================================================================
// For weapon/spell detail
// =============================================================================

export const selectAllAttributeLevels = (rootState: RootState): Attributes => {
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
// Rune Level
// =============================================================================

const selectRuneLevel = (rootState: RootState): Integer => {
    const fromClass = StartingClassSelectors.baseRuneLevel(rootState)
    const fromAttributes = LevelUpSelectors.addedRuneLevels(rootState)
    return (fromClass + fromAttributes)
}

const selectRunesForNextLevel = (rootState: RootState): Integer => {
    const level = selectRuneLevel(rootState)
    const runes = LEVEL_RUNES_MAP[level.toString()]?.runes ?? "?"
    return runes
}

// =============================================================================
// Exported
// =============================================================================

export const LevelsSelectors = {
    runeLevel: selectRuneLevel,
    runesForNextLevel: selectRunesForNextLevel,
    /** Starting class attribute level + added attribute levels */
    corrected: {
        vigor:        selectCorrectedVigor,
        mind:         selectCorrectedMind,
        endurance:    selectCorrectedEndurance,
        strength:     selectCorrectedStrength,
        dexterity:    selectCorrectedDexterity,
        intelligence: selectCorrectedIntelligence,
        faith:        selectCorrectedFaith,
        arcane:       selectCorrectedArcane,
    },
    allAttributeLevels: selectAllAttributeLevels,
    // /** Accounts for equipment effects */
    // enhanced: {
    //     vigor:        selectEnhancedVigor,
    //     mind:         selectEnhancedMind,
    //     endurance:    selectEnhancedEndurance,
    //     strength:     selectEnhancedStrength,
    //     dexterity:    selectEnhancedDexterity,
    //     intelligence: selectEnhancedIntelligence,
    //     faith:        selectEnhancedFaith,
    //     arcane:       selectEnhancedArcane,
    // },
}
