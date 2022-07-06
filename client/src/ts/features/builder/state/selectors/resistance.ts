import { sum } from "lodash"

import { RootState } from "@app/state"

import { ArmorSelectors as Armor } from "@app/features/armor"

// =============================================================================
// Resistance
// =============================================================================

export const selectImmunity = (rootState: RootState): number => {
    const armor       = Armor.compactArray(rootState)
    const armorPoints = sum(armor.map(x => x?.immunity ?? 0))
    return sum([armorPoints].flat())
}

export const selectRobustness = (rootState: RootState): number => {
    const armor       = Armor.compactArray(rootState)
    const armorPoints = sum(armor.map(x => x?.robustness ?? 0))
    return sum([armorPoints].flat())
}

export const selectFocus = (rootState: RootState): number => {
    const armor       = Armor.compactArray(rootState)
    const armorPoints = sum(armor.map(x => x?.focus ?? 0))
    return sum([armorPoints].flat())
}

export const selectVitality = (rootState: RootState): number => {
    const armor       = Armor.compactArray(rootState)
    const armorPoints = sum(armor.map(x => x?.vitality ?? 0))
    return sum([armorPoints].flat())
}

export const selectResistance = (rootState: RootState) => {
    const immunity   = selectImmunity(rootState)
    const robustness = selectRobustness(rootState)
    const focus      = selectFocus(rootState)
    const vitality   = selectVitality(rootState)
    return {
        immunity,
        robustness,
        focus,
        vitality,
    }
}
