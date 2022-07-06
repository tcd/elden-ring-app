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

import * as Attributes from "./attributes"
import * as Stats from "./stats"
import { ArmorSelectors as Armor } from "@app/features/armor"

// =============================================================================
// Defense
// =============================================================================

const selectDefenseFromRuneLevel = (rootState: RootState): number => {
    const runeLevel = Stats.selectLevel(rootState)
    const defense = defenseFromRuneLevel(runeLevel)
    return defense
}

export const selectPhysicalDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const strengthLevel = Attributes.selectStrength(rootState)
    const attributeDefense = physicalDefenseFromStrength(strengthLevel)
    return sum([baseDefense, attributeDefense])
}
// export const selectStrikeDefense = (state: RootState) => { return selectNegation(state, "strike") }
// export const selectSlashDefense  = (state: RootState) => { return selectNegation(state, "slash") }
// export const selectPierceDefense = (state: RootState) => { return selectNegation(state, "pierce") }
export const selectMagicDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const intelligenceLevel = Attributes.selectIntelligence(rootState)
    const attributeDefense = magicDefenseFromIntelligence(intelligenceLevel)
    return sum([baseDefense, attributeDefense])
}
export const selectFireDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const vigorLevel = Attributes.selectVigor(rootState)
    const attributeDefense = fireDefenseFromVigor(vigorLevel)
    return sum([baseDefense, attributeDefense])
}
export const selectLightningDefense = (rootState: RootState): number => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    return sum([baseDefense])
}
export const selectHolyDefense = (rootState: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(rootState)
    const arcaneLevel = Attributes.selectArcane(rootState)
    const attributeDefense = holyDefenseFromArcane(arcaneLevel)
    return sum([baseDefense, attributeDefense])
}

// =============================================================================
// Damage Negation
// =============================================================================

export const selectNegation = (state: RootState, key: keyof(IArmor)) => {
    const armor       = Armor.compactArray(state)
    const armorPoints = sum(armor.map(x => x[key] ?? 0))
    return sum([armorPoints].flat()).toFixed(1)
}

export const selectPhysicalNegation  = (state: RootState) => { return selectNegation(state, "physical") }
export const selectStrikeNegation    = (state: RootState) => { return selectNegation(state, "vs_strike") }
export const selectSlashNegation     = (state: RootState) => { return selectNegation(state, "vs_slash") }
export const selectPierceNegation    = (state: RootState) => { return selectNegation(state, "vs_pierce") }
export const selectMagicNegation     = (state: RootState) => { return selectNegation(state, "magic") }
export const selectFireNegation      = (state: RootState) => { return selectNegation(state, "fire") }
export const selectLightningNegation = (state: RootState) => { return selectNegation(state, "lightning") }
export const selectHolyNegation      = (state: RootState) => { return selectNegation(state, "holy") }

// export const selectResistance = (state: RootState) => {
//     const immunity = selectImmunity(state)
//     const robustness = selectRobustness(state)
//     const focus = selectFocus(state)
//     const vitality = selectVitality(state)
//     return {
//         immunity,
//         robustness,
//         focus,
//         vitality,
//     }
// }
