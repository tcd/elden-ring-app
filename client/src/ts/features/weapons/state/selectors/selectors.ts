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

// const selectWeaponsState = (state: RootState) => { return state?.Weapons }

const selectWeapon = (state: RootState, name?: string): Weapon => {
    const weapons = selectWeapons(state)
    if (isBlank(name)) { return null }
    return weapons.find(x => x.name == name)
}

const selectR1Name = (state: RootState): string => { return state?.Weapons?.slots?.R1?.weapon_name }
const selectR2Name = (state: RootState): string => { return state?.Weapons?.slots?.R2?.weapon_name }
const selectR3Name = (state: RootState): string => { return state?.Weapons?.slots?.R3?.weapon_name }
const selectL1Name = (state: RootState): string => { return state?.Weapons?.slots?.L1?.weapon_name }
const selectL2Name = (state: RootState): string => { return state?.Weapons?.slots?.L2?.weapon_name }
const selectL3Name = (state: RootState): string => { return state?.Weapons?.slots?.L3?.weapon_name }

export const selectR1Weapon = (state: RootState): Weapon => { return selectWeapon(state, selectR1Name(state)) }
export const selectR2Weapon = (state: RootState): Weapon => { return selectWeapon(state, selectR2Name(state)) }
export const selectR3Weapon = (state: RootState): Weapon => { return selectWeapon(state, selectR3Name(state)) }
export const selectL1Weapon = (state: RootState): Weapon => { return selectWeapon(state, selectL1Name(state)) }
export const selectL2Weapon = (state: RootState): Weapon => { return selectWeapon(state, selectL2Name(state)) }
export const selectL3Weapon = (state: RootState): Weapon => { return selectWeapon(state, selectL3Name(state)) }

export const selectActiveSlotId = (state: RootState) => { return state?.Weapons?.activeSlotId }

export const selectActiveWeaponSettings = (state: RootState): WeaponSettings => {
    const slotId = selectActiveSlotId(state)
    if (isBlank(slotId)) {
        return null
    }
    return state.Weapons.slots[slotId]
}

export const selectActiveWeaponName = (state: RootState) => {
    return selectActiveWeaponSettings(state)?.weapon_name
}

/**
 * Returns an array of all equipped weapons.
 *
 * Will not include null values.
 */
export const selectCompactWeaponsArray = (state: RootState): Weapon[] => {
    return compactArray([
        selectR1Weapon(state),
        selectR2Weapon(state),
        selectR3Weapon(state),
        selectL1Weapon(state),
        selectL2Weapon(state),
        selectL3Weapon(state),
    ])
}

export const selectActiveWeapon = (state: RootState) => {
    const slotId = selectActiveSlotId(state)
    if (isBlank(slotId)) {
        return null
    }
    const activeName = state?.Weapons?.slots[slotId]?.weapon_name
    if (isBlank(activeName)) {
        return null
    }
    const weapons = selectWeapons(state)
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

const selectSlimWeaponStatData = (state: RootState): SlimWeaponStatData => {
    const weapon = selectActiveWeapon(state)
    if (isBlank(weapon)) {
        return null
    }
    const weaponSettings = selectActiveWeaponSettings(state)
    const result = _selectSlimWeaponStatData(weapon, weaponSettings)
    return result
}

export const selectCalculatedWeaponStats = (state: RootState): CalculatedWeaponStats => {
    const attributes = selectAttributes(state)
    const weapon = selectActiveWeapon(state)
    const stats = selectSlimWeaponStatData(state)
    if (isBlank(stats)) {
        return null
    }
    const allAdjustmentParams = selectAttackElementCorrectParams(state)

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

export const selectOldWeapon = (state: RootState): Weapon => {
    const oldWeaponSettings = state?.Weapons?.oldWeapon
    if (isBlank(oldWeaponSettings)) {
        return null
    }
    const allWeapons = selectWeapons(state)

    const oldWeapon = allWeapons.find(x => x.name == oldWeaponSettings.weapon_name)

    return oldWeapon
}

export const selectOldWeaponStats = (state: RootState): CalculatedWeaponStats => {
    const allAdjustmentParams = selectAttackElementCorrectParams(state)
    if (isBlank(allAdjustmentParams)) {
        return null
    }

    const oldWeaponSettings = state?.Weapons?.oldWeapon
    if (isBlank(oldWeaponSettings)) {
        return null
    }

    const attributes = selectAttributes(state)
    const allWeapons = selectWeapons(state)

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

