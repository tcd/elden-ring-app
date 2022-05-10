import { sum } from "lodash"

import { EquipmentEffect } from "@types"
import { RootState } from "@app/state"
import { isBlank } from "@app/util"
import {
    LEVEL_HP_MAP,
    LEVEL_FP_MAP,
    LEVEL_STAMINA_MAP,
    STARTING_CLASSES,
    LEVEL_RUNES_MAP,
} from "@app/data"

import * as Weapons from "./weapons"
import * as Talismans from "./talismans"
import * as Armor from "./armor"

import * as Attributes from "./attributes"
import * as Resistance from "./resistance"
import * as Defense from "./defense"
import * as EquipLoad from "./equip-load"

const selectBuilderState = (state: RootState) => { return state?.Builder }

export const selectStartingClassName = (state: RootState) => { return state?.Builder?.startingClassName }

export const selectStartingClass = (state: RootState) => {
    const startingClassName = state?.Builder?.startingClassName
    if (isBlank(startingClassName)) {
        return null
    }
    const startingClass = STARTING_CLASSES.find(x => x.name == startingClassName)
    return startingClass
}

// don't think this is performant.
const selectLevelAlt = (state: RootState): number => {
    const attributeValues = Attributes.selectAttributes(state)
    return sum(Object.values(attributeValues))
}

export const selectLevel = (state: RootState): number => {
    const addedLevels = Attributes.selectTotalAttributes(state)
    const startingClass = selectStartingClass(state)
    const l = startingClass?.attributes?.level ?? 0
    const t = startingClass?.attributes?.total ?? 0
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

export const selectStats = (state: RootState) => {
    return {
        "HP": selectHp(state),
        "FP": selectFp(state),
        "Stamina": selectStamina(state),
        "Current Equip Load": EquipLoad.selectCurrentEquipLoad(state),
        "Max Equip Load": EquipLoad.selectMaxEquipLoad(state),
        "Poise": selectPoise(state),
        "Discovery": selectDiscovery(state),
    }
}

// https://eldenring.wiki.fextralife.com/Discovery
export const selectDiscovery = (state: RootState): string => {
    const level = Attributes.selectArcane(state)
    return ((1.10) * level * 10).toFixed(1)
}

export const selectPoise = (state: RootState): number => {
    const armor       = Armor.selectCompactArmor(state)
    const armorPoise = sum(armor.map(x => x?.poise ?? 0))
    return sum([armorPoise].flat())
}

const selectEffects = (state: RootState) => {
    const talismans = Talismans.selectCompactTalismans(state)
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
