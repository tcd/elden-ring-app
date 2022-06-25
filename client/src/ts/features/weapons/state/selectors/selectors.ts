import {
    CalculatedWeaponStats,
    SlimWeaponStatData,
    WeaponStatsCalculator,
} from "elden-ring-calculator"

import {
    Weapon,
    WeaponSettings,
} from "@app/types"
import {
    isBlank,
    compactArray,
    getSlimWeaponStatData,
    getRequirements,
} from "@app/util"
import { RootState } from "@app/state"
import { selectWeapons, selectAttackElementCorrectParams } from "@app/features/builder/state/selectors/api"
import { selectAttributes } from "@app/features/builder/state/selectors/attributes"
import { WEAPON_AFFINITIES } from "@app/data"

const selectWeaponsSlice = (rootState: RootState) => {
    return rootState?.Weapons
}

const selectWeapon = (rootState: RootState, name?: string): Weapon => {
    const weapons = selectWeapons(rootState)
    if (isBlank(name)) { return null }
    return weapons.find(x => x.name == name)
}

export const selectWeaponSlots = (rootState: RootState) => {
    return selectWeaponsSlice(rootState)?.slots
}

const selectR1Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.R1?.weapon_name
const selectR2Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.R2?.weapon_name
const selectR3Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.R3?.weapon_name
const selectL1Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.L1?.weapon_name
const selectL2Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.L2?.weapon_name
const selectL3Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.L3?.weapon_name

export const selectR1Weapon = (rootState: RootState): Weapon => selectWeapon(rootState, selectR1Name(rootState))
export const selectR2Weapon = (rootState: RootState): Weapon => selectWeapon(rootState, selectR2Name(rootState))
export const selectR3Weapon = (rootState: RootState): Weapon => selectWeapon(rootState, selectR3Name(rootState))
export const selectL1Weapon = (rootState: RootState): Weapon => selectWeapon(rootState, selectL1Name(rootState))
export const selectL2Weapon = (rootState: RootState): Weapon => selectWeapon(rootState, selectL2Name(rootState))
export const selectL3Weapon = (rootState: RootState): Weapon => selectWeapon(rootState, selectL3Name(rootState))

export const selectActiveSlotId = (rootState: RootState) => selectWeaponsSlice(rootState)?.activeSlotId

export const selectActiveWeaponSettings = (rootState: RootState): WeaponSettings => {
    const slotId = selectActiveSlotId(rootState)
    if (isBlank(slotId)) {
        return null
    }
    return rootState.Weapons.slots[slotId]
}

export const selectActiveWeaponName = (rootState: RootState) => {
    return selectActiveWeaponSettings(rootState)?.weapon_name
}

/**
 * Returns an array of all equipped weapons.
 *
 * Will not include null values.
 */
export const selectCompactWeaponsArray = (rootState: RootState): Weapon[] => {
    return compactArray([
        selectR1Weapon(rootState),
        selectR2Weapon(rootState),
        selectR3Weapon(rootState),
        selectL1Weapon(rootState),
        selectL2Weapon(rootState),
        selectL3Weapon(rootState),
    ])
}

export const selectActiveWeapon = (rootState: RootState) => {
    const activeName = selectActiveWeaponName(rootState)
    if (isBlank(activeName)) {
        return null
    }
    const weapons = selectWeapons(rootState)
    if (isBlank(weapons)) {
        return null
    }
    return weapons.find(x => x?.name == activeName)
}

// =============================================================================
// Stats
// =============================================================================

const _selectSlimWeaponStatData = (weapon: Weapon, weaponSettings: WeaponSettings): SlimWeaponStatData => {
    const affinityId = WEAPON_AFFINITIES.find(x => x.name == weaponSettings.affinity_name)?.id
    const stat = weapon.stats.find(x => x.weapon_affinity_id == affinityId)
    if (isBlank(stat)) {
        return null
    }
    const result = getSlimWeaponStatData(stat, weaponSettings?.level)
    return result
}

const selectSlimWeaponStatData = (rootState: RootState): SlimWeaponStatData => {
    const weapon = selectActiveWeapon(rootState)
    if (isBlank(weapon)) {
        return null
    }
    const weaponSettings = selectActiveWeaponSettings(rootState)
    const result = _selectSlimWeaponStatData(weapon, weaponSettings)
    return result
}

export const selectCalculatedWeaponStats = (rootState: RootState): CalculatedWeaponStats => {
    const attributes = selectAttributes(rootState)
    const weapon = selectActiveWeapon(rootState)
    const stats = selectSlimWeaponStatData(rootState)
    if (isBlank(stats)) {
        return null
    }
    const allAdjustmentParams = selectAttackElementCorrectParams(rootState)

    const adjustmentParams = allAdjustmentParams.find(x => x.id == stats.attack_element_correct_param_id)
    if (isBlank(adjustmentParams)) {
        return null
    }
    const requirements = getRequirements(weapon)
    return new WeaponStatsCalculator({
        slimData: stats,
        adjustmentParams: adjustmentParams,
        requirements: requirements,
        attributes: attributes,
    }).calculate()
}

// -----------------------------------------------------------------------------
// Old Weapon
// -----------------------------------------------------------------------------

export const selectOldWeapon = (rootState: RootState): Weapon => {
    const oldWeaponSettings = rootState?.Weapons?.oldWeapon
    if (isBlank(oldWeaponSettings)) {
        return null
    }
    const allWeapons = selectWeapons(rootState)

    const oldWeapon = allWeapons.find(x => x.name == oldWeaponSettings.weapon_name)

    return oldWeapon
}

export const selectOldWeaponStats = (rootState: RootState): CalculatedWeaponStats => {
    const allAdjustmentParams = selectAttackElementCorrectParams(rootState)
    if (isBlank(allAdjustmentParams)) {
        return null
    }

    const oldWeaponSettings = rootState?.Weapons?.oldWeapon
    if (isBlank(oldWeaponSettings)) {
        return null
    }

    const attributes = selectAttributes(rootState)
    const allWeapons = selectWeapons(rootState)

    const oldWeapon = allWeapons.find(x => x.name == oldWeaponSettings.weapon_name)

    const stats = _selectSlimWeaponStatData(oldWeapon, oldWeaponSettings)
    if (isBlank(stats)) {
        return null
    }

    const adjustmentParams = allAdjustmentParams.find(x => x.id == stats.attack_element_correct_param_id)
    if (isBlank(adjustmentParams)) {
        return null
    }

    const requirements = getRequirements(oldWeapon)

    const result = new WeaponStatsCalculator({
        slimData: stats,
        adjustmentParams: adjustmentParams,
        requirements: requirements,
        attributes: attributes,
    }).calculate()

    return result
}

