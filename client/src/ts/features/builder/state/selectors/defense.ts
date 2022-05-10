import { sum } from "lodash"

import { RootState } from "@app/state"
import { Armor as IArmor } from "@types"

// import * as Attributes from "./attributes"
import * as Armor from "./armor"

// =============================================================================
// Resistance
// =============================================================================

export const selectNegation = (state: RootState, key: keyof(IArmor)) => {
    const armor       = Armor.selectCompactArmor(state)
    const armorPoints = sum(armor.map(x => x[key] ?? 0))
    return sum([armorPoints].flat()).toFixed(1)
}

export const selectPhysicalNegation  = (state: RootState) => { return selectNegation(state, "physical") }
export const selectStrikeNegation    = (state: RootState) => { return selectNegation(state, "strike") }
export const selectSlashNegation     = (state: RootState) => { return selectNegation(state, "slash") }
export const selectPierceNegation    = (state: RootState) => { return selectNegation(state, "pierce") }
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
