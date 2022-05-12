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
import * as Armor from "./armor"

// =============================================================================
// Defense
// =============================================================================

const selectDefenseFromRuneLevel = (state: RootState): number => {
    const runeLevel = Stats.selectLevel(state)
    const defense = defenseFromRuneLevel(runeLevel)
    return defense
}

export const selectPhysicalDefense = (state: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(state)
    const strengthLevel = Attributes.selectStrength(state)
    const attributeDefense = physicalDefenseFromStrength(strengthLevel)
    return sum([baseDefense, attributeDefense])
}
// export const selectStrikeDefense = (state: RootState) => { return selectNegation(state, "strike") }
// export const selectSlashDefense  = (state: RootState) => { return selectNegation(state, "slash") }
// export const selectPierceDefense = (state: RootState) => { return selectNegation(state, "pierce") }
export const selectMagicDefense = (state: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(state)
    const intelligenceLevel = Attributes.selectIntelligence(state)
    const attributeDefense = magicDefenseFromIntelligence(intelligenceLevel)
    return sum([baseDefense, attributeDefense])
}
export const selectFireDefense = (state: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(state)
    const vigorLevel = Attributes.selectVigor(state)
    const attributeDefense = fireDefenseFromVigor(vigorLevel)
    return sum([baseDefense, attributeDefense])
}
export const selectLightningDefense = (state: RootState): number => {
    const baseDefense = selectDefenseFromRuneLevel(state)
    return sum([baseDefense])
}
export const selectHolyDefense = (state: RootState) => {
    const baseDefense = selectDefenseFromRuneLevel(state)
    const arcaneLevel = Attributes.selectArcane(state)
    const attributeDefense = holyDefenseFromArcane(arcaneLevel)
    return sum([baseDefense, attributeDefense])
}

// =============================================================================
// Damage Negation
// =============================================================================

export const selectNegation = (state: RootState, key: keyof(IArmor)) => {
    const armor       = Armor.selectCompactArmor(state)
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
