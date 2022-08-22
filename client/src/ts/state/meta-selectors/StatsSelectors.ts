import sum from "lodash/sum"

import {
    LEVEL_HP_MAP,
    LEVEL_FP_MAP,
    LEVEL_STAMINA_MAP,
} from "@app/data"
import { ResistanceStatName } from "@app/constants"
import { RootState } from "@app/state"
import { ArmorSelectors as Armor } from "@app/features/armor"
import { LevelsSelectors as Level } from "./LevelsSelectors"

// https://eldenring.wiki.fextralife.com/Discovery
const selectDiscovery = (rootState: RootState): string => {
    const level = Level.corrected.arcane(rootState)
    return ((1.10) * level * 10).toFixed(1)
}

const selectPoise = (rootState: RootState): number => {
    const armor       = Armor.compactArray(rootState)
    const armorPoise = sum(armor.map(x => x?.poise ?? 0))
    return sum([armorPoise].flat())
}

// =============================================================================
// HP
// =============================================================================

const selectBaseHp = (rootState: RootState): number => {
    const level = Level.corrected.vigor(rootState)
    return (level > 99) ? LEVEL_HP_MAP[-1] : LEVEL_HP_MAP[level]
}

const selectHp = (rootState: RootState): number => {
    const baseHp = selectBaseHp(rootState)
    return baseHp
}

// =============================================================================
// FP
// =============================================================================

const selectBaseFp = (rootState: RootState): number => {
    const level = Level.corrected.mind(rootState)
    return (level > 99) ? LEVEL_FP_MAP[-1] : LEVEL_FP_MAP[level]
}

const selectFp = (rootState: RootState): number => {
    const baseFp = selectBaseFp(rootState)
    return baseFp
}

// =============================================================================
// Stamina
// =============================================================================

const selectBaseStamina = (rootState: RootState): number => {
    const level = Level.corrected.endurance(rootState)
    return (level > 99) ? LEVEL_STAMINA_MAP[-1] : LEVEL_STAMINA_MAP[level]
}

const selectStamina = (rootState: RootState): number => {
    const baseStamina = selectBaseStamina(rootState)
    return baseStamina
}

// =============================================================================
// Resistance
// =============================================================================

const _selectResistanceFromArmor = (rootState: RootState, type: ResistanceStatName): number => {
    const armor = Armor.compactArray(rootState)
    const armorPoints = sum(armor.map(x => x?.[type] ?? 0))
    return sum([armorPoints].flat())
}

const selectImmunityFromArmor   = (rootState: RootState) => _selectResistanceFromArmor(rootState, "immunity")
const selectRobustnessFromArmor = (rootState: RootState) => _selectResistanceFromArmor(rootState, "robustness")
const selectFocusFromArmor      = (rootState: RootState) => _selectResistanceFromArmor(rootState, "focus")
const selectVitalityFromArmor   = (rootState: RootState) => _selectResistanceFromArmor(rootState, "vitality")

export const StatsSelectors = {
    hp:         selectHp,
    fp:         selectFp,
    stamina:    selectStamina,
    poise:      selectPoise,
    discovery:  selectDiscovery,
    immunity:   selectImmunityFromArmor,
    robustness: selectRobustnessFromArmor,
    focus:      selectFocusFromArmor,
    vitality:   selectVitalityFromArmor,
}
