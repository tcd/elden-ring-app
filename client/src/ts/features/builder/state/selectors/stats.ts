import { sum } from "lodash"

import { RootState } from "@app/state"
import {
    LEVEL_HP_MAP,
    LEVEL_FP_MAP,
    LEVEL_STAMINA_MAP,
    LEVEL_RUNES_MAP,
} from "@app/data"

import { ArmorSelectors as Armor } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors as Weapons } from "@app/features/weapons"

import * as Attributes from "./attributes"
// import * as Resistance from "./resistance"
// import * as Defense from "./defense"
import * as EquipLoad from "./equip-load"
import * as StartingClass from "./starting-class"

// const selectBuilderState = (state: RootState) => { return state?.Builder }

// don't think this is performant.
const selectLevelAlt = (state: RootState): number => {
    const attributeValues = Attributes.selectAttributes(state)
    return sum(Object.values(attributeValues))
}

export const selectLevel = (state: RootState): number => {
    const addedLevels = Attributes.selectTotalAttributes(state)
    const startingClass = StartingClass.selectStartingClass(state)
    const l = startingClass?.level ?? 0
    const t = startingClass?.total_levels ?? 0
    return addedLevels - t + l
}

export const selectRunesForNextLevel = (state: RootState) => {
    const level = selectLevel(state)
    const runes = LEVEL_RUNES_MAP[level.toString()]?.runes ?? "?"
    return runes
}

const calculateStat = (level: number, map: number[]): number => {
    // return (level > 99) ? map[-1] : map[level]
    if (level > 99) {
        return map[-1]
    } else {
        return map[level]
    }
}

// https://eldenring.wiki.fextralife.com/Discovery
export const selectDiscovery = (state: RootState): string => {
    const level = Attributes.selectArcane(state)
    return ((1.10) * level * 10).toFixed(1)
}

export const selectPoise = (state: RootState): number => {
    const armor       = Armor.compactArray(state)
    const armorPoise = sum(armor.map(x => x?.poise ?? 0))
    return sum([armorPoise].flat())
}

const selectEffects = (state: RootState) => {
    const talismans = Talismans.compactArray(state)
    const talismanEffects = talismans.map(x => x.effects)

    return [talismanEffects]
}

// =============================================================================
// HP
// =============================================================================

const selectBaseHp = (state: RootState): number => {
    const level = Attributes.selectVigor(state)
    return (level > 99) ? LEVEL_HP_MAP[-1] : LEVEL_HP_MAP[level]
}

export const selectHp = (state: RootState): number => {
    const baseHp = selectBaseHp(state)
    return baseHp
}

// =============================================================================
// FP
// =============================================================================

const selectBaseFp = (state: RootState): number => {
    const level = Attributes.selectMind(state)
    return (level > 99) ? LEVEL_FP_MAP[-1] : LEVEL_FP_MAP[level]
}

export const selectFp = (state: RootState): number => {
    const baseFp = selectBaseFp(state)
    return baseFp
}

// =============================================================================
// Stamina
// =============================================================================

const selectBaseStamina = (state: RootState): number => {
    const level = Attributes.selectEndurance(state)
    return (level > 99) ? LEVEL_STAMINA_MAP[-1] : LEVEL_STAMINA_MAP[level]
}

export const selectStamina = (state: RootState): number => {
    const baseStamina = selectBaseStamina(state)
    return baseStamina
}
