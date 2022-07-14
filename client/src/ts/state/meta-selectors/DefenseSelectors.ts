import { sum } from "lodash"

import { Armor as IArmor } from "@app/types"
import { RootState } from "@app/state"
import {
    defenseFromRuneLevel,
    physicalDefenseFromStrength,
    magicDefenseFromIntelligence,
    fireDefenseFromVigor,
    holyDefenseFromArcane,
} from "@app/util"

import { LevelsSelectors as Level } from "./LevelsSelectors"
import { ArmorSelectors as Armor } from "@app/features/armor"

// =============================================================================
// Defense
// =============================================================================

const selectDefenseFromRuneLevel = (rootState: RootState): number => {
    const runeLevel = Level.runeLevel(rootState)
    const defense = defenseFromRuneLevel(runeLevel)
    return defense
}

const selectPhysicalDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const strengthLevel = Level.corrected.strength(rootState)
    const attributeDefense = physicalDefenseFromStrength(strengthLevel)
    return sum([baseDefense, attributeDefense])
}
// export const selectStrikeDefense = (state: RootState) => { return selectNegation(state, "strike") }
// export const selectSlashDefense  = (state: RootState) => { return selectNegation(state, "slash") }
// export const selectPierceDefense = (state: RootState) => { return selectNegation(state, "pierce") }
const selectMagicDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const intelligenceLevel = Level.corrected.intelligence(rootState)
    const attributeDefense = magicDefenseFromIntelligence(intelligenceLevel)
    return sum([baseDefense, attributeDefense])
}
const selectFireDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const vigorLevel = Level.corrected.vigor(rootState)
    const attributeDefense = fireDefenseFromVigor(vigorLevel)
    return sum([baseDefense, attributeDefense])
}
const selectLightningDefense = (rootState: RootState): number => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    return sum([baseDefense])
}
const selectHolyDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const arcaneLevel = Level.corrected.arcane(rootState)
    const attributeDefense = holyDefenseFromArcane(arcaneLevel)
    return sum([baseDefense, attributeDefense])
}

// =============================================================================
// Damage Negation
// =============================================================================

const selectNegation = (state: RootState, key: keyof(IArmor)) => {
    const armor       = Armor.compactArray(state)
    const armorPoints = sum(armor.map(x => x[key] ?? 0))
    return sum([armorPoints].flat()).toFixed(1)
}

const selectPhysicalNegation  = (state: RootState) => selectNegation(state, "physical")
const selectStrikeNegation    = (state: RootState) => selectNegation(state, "vs_strike")
const selectSlashNegation     = (state: RootState) => selectNegation(state, "vs_slash")
const selectPierceNegation    = (state: RootState) => selectNegation(state, "vs_pierce")
const selectMagicNegation     = (state: RootState) => selectNegation(state, "magic")
const selectFireNegation      = (state: RootState) => selectNegation(state, "fire")
const selectLightningNegation = (state: RootState) => selectNegation(state, "lightning")
const selectHolyNegation      = (state: RootState) => selectNegation(state, "holy")

export const DefenseSelectors = {
    defense: {
        physical: selectPhysicalDefense,
        magic: selectMagicDefense,
        fire: selectFireDefense,
        lightning: selectLightningDefense,
        holy: selectHolyDefense,
    },
    damageNegation: {
        physical:  selectPhysicalNegation,
        strike:    selectStrikeNegation,
        slash:     selectSlashNegation,
        pierce:    selectPierceNegation,
        magic:     selectMagicNegation,
        fire:      selectFireNegation,
        lightning: selectLightningNegation,
        holy:      selectHolyNegation,
    },
}
