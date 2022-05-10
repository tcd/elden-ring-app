import { sum } from "lodash"

import { RootState } from "@app/state"

import * as Attributes from "./attributes"
import * as Armor from "./armor"

// =============================================================================
// Resistance
// =============================================================================

export const selectImmunity = (state: RootState): number => {
    const armor       = Armor.selectCompactArmor(state)
    const armorPoints = sum(armor.map(x => x?.immunity ?? 0))
    return sum([armorPoints].flat())
}

export const selectRobustness = (state: RootState): number => {
    const armor       = Armor.selectCompactArmor(state)
    const armorPoints = sum(armor.map(x => x?.robustness ?? 0))
    return sum([armorPoints].flat())
}

export const selectFocus = (state: RootState): number => {
    const armor       = Armor.selectCompactArmor(state)
    const armorPoints = sum(armor.map(x => x?.focus ?? 0))
    return sum([armorPoints].flat())
}

export const selectVitality = (state: RootState): number => {
    const armor       = Armor.selectCompactArmor(state)
    const armorPoints = sum(armor.map(x => x?.vitality ?? 0))
    return sum([armorPoints].flat())
}

export const selectResistance = (state: RootState) => {
    const immunity = selectImmunity(state)
    const robustness = selectRobustness(state)
    const focus = selectFocus(state)
    const vitality = selectVitality(state)
    return {
        immunity,
        robustness,
        focus,
        vitality,
    }
}
