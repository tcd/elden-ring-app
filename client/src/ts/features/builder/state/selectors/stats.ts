import { sum } from "lodash"

import { RootState } from "@app/state"
import {
    LEVEL_HP_MAP,
    LEVEL_FP_MAP,
    LEVEL_STAMINA_MAP,
} from "@app/data"

import { ArmorSelectors as Armor } from "@app/features/armor"
// import { TalismansSelectors as Talismans } from "@app/features/talismans"
// import { WeaponsSelectors as Weapons } from "@app/features/weapons"

import * as Level from "./level"
// import * as EquipLoad from "./equip-load"
// import * as StartingClass from "./starting-class"


// https://eldenring.wiki.fextralife.com/Discovery
export const selectDiscovery = (rootState: RootState): string => {
    const level = Level.selectCorrectedArcane(rootState)
    return ((1.10) * level * 10).toFixed(1)
}

export const selectPoise = (rootState: RootState): number => {
    const armor       = Armor.compactArray(rootState)
    const armorPoise = sum(armor.map(x => x?.poise ?? 0))
    return sum([armorPoise].flat())
}

// const selectEffects = (rootState: RootState) => {
//     const talismans = Talismans.compactArray(rootState)
//     const talismanEffects = talismans.map(x => x.effects)

//     return [talismanEffects]
// }

// =============================================================================
// HP
// =============================================================================

const selectBaseHp = (rootState: RootState): number => {
    const level = Level.selectCorrectedVigor(rootState)
    return (level > 99) ? LEVEL_HP_MAP[-1] : LEVEL_HP_MAP[level]
}

export const selectHp = (rootState: RootState): number => {
    const baseHp = selectBaseHp(rootState)
    return baseHp
}

// =============================================================================
// FP
// =============================================================================

const selectBaseFp = (rootState: RootState): number => {
    const level = Level.selectCorrectedMind(rootState)
    return (level > 99) ? LEVEL_FP_MAP[-1] : LEVEL_FP_MAP[level]
}

export const selectFp = (rootState: RootState): number => {
    const baseFp = selectBaseFp(rootState)
    return baseFp
}

// =============================================================================
// Stamina
// =============================================================================

const selectBaseStamina = (rootState: RootState): number => {
    const level = Level.selectCorrectedEndurance(rootState)
    return (level > 99) ? LEVEL_STAMINA_MAP[-1] : LEVEL_STAMINA_MAP[level]
}

export const selectStamina = (rootState: RootState): number => {
    const baseStamina = selectBaseStamina(rootState)
    return baseStamina
}
