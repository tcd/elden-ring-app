import {
    BuildData,
    CompactBuildData,
    StartingClassName,
    WeaponSettings,
} from "@app/types"

import { isBlank } from "./is-blank"

const STARTING_CLASS_NAME_IDS: Record<StartingClassName, CompactBuildData.StartingClassId> = {
    "Vagabond":   1,
    "Warrior":    2,
    "Hero":       3,
    "Bandit":     4,
    "Astrologer": 5,
    "Prophet":    6,
    "Samurai":    7,
    "Prisoner":   8,
    "Confessor":  9,
    "Wretch":     10,
}

const minifyWeaponSettings = (settings: WeaponSettings): CompactBuildData.CompactWeaponSettings => {
    if (isBlank(settings)) {
        return null
    }
    return {
        n: settings?.weapon_name,
        l: settings?.level,
        a: settings?.affinity_name,
        s: settings?.weapon_skill_name,
    }
}

export const minifyBuildData = (input: BuildData): CompactBuildData.CompactBuildData => ({
    sc: STARTING_CLASS_NAME_IDS[input.startingClass],

    vig: input?.attributes?.vigor,
    min: input?.attributes?.mind,
    end: input?.attributes?.endurance,
    str: input?.attributes?.strength,
    dex: input?.attributes?.dexterity,
    int: input?.attributes?.intelligence,
    fai: input?.attributes?.faith,
    arc: input?.attributes?.arcane,

    h: input?.armor?.Head,
    c: input?.armor?.Chest,
    a: input?.armor?.Arms,
    l: input?.armor?.Legs,

    T1: input?.talismans?.T1,
    T2: input?.talismans?.T2,
    T3: input?.talismans?.T3,
    T4: input?.talismans?.T4,

    R1: minifyWeaponSettings(input?.weapons?.R1),
    R2: minifyWeaponSettings(input?.weapons?.R2),
    R3: minifyWeaponSettings(input?.weapons?.R3),
    L1: minifyWeaponSettings(input?.weapons?.L1),
    L2: minifyWeaponSettings(input?.weapons?.L2),
    L3: minifyWeaponSettings(input?.weapons?.L3),
})
