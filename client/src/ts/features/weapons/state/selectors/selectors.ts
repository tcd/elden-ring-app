import { sum } from "lodash"
import {
    CalculatedWeaponStats,
    SlimWeaponData,
    WeaponStatsCalculator,
} from "elden-ring-calculator"

import { Unarmed, UnarmedStats } from "@app/data"
import { WeaponSlotId } from "@app/constants"
import {
    Weapon,
    WeaponSlots,
    WeaponSettings,
    WeaponSkill,
    WeaponSlotsData,
} from "@app/types"
import {
    isBlank,
    compactArray,
    getRequirements,
} from "@app/util"
import { RootState } from "@app/state"
import { selectWeapons, selectAttackElementCorrectParams, selectWeaponSkills } from "@app/features/builder/state/selectors/api"
import { selectAllAttributeLevels } from "@app/state/meta-selectors/LevelsSelectors"

import {
    _selectWeaponDisplayName,
    _selectSlimWeaponData,
} from "./helpers"

export const selectAllWeapons = selectWeapons

const selectWeaponsSlice = (rootState: RootState) => {
    return rootState?.Weapons
}

const _selectWeapon = (rootState: RootState, name?: string): Weapon => {
    if (name == "Unarmed") {
        return Unarmed
    }
    const weapons = selectAllWeapons(rootState)
    if (isBlank(name)) { return null }
    return weapons.find(x => x.name == name)
}

export const selectWeaponSlots      = (rootState: RootState): WeaponSlots  => selectWeaponsSlice(rootState)?.slots
export const selectActiveSlotId     = (rootState: RootState): WeaponSlotId => selectWeaponsSlice(rootState)?.activeSlotId
export const selectHasMenuScrolled  = (rootState: RootState): boolean      => selectWeaponsSlice(rootState)?.menuHasScrolled
export const selectCustomizing      = (rootState: RootState): boolean      => selectWeaponsSlice(rootState)?.customizingWeapon
export const selectChoosingAffinity = (rootState: RootState): boolean      => selectWeaponsSlice(rootState)?.choosingAffinity
export const selectMobileTab        = (rootState: RootState)               => selectWeaponsSlice(rootState)?.mobileTab

const selectR1Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.R1?.weapon_name
const selectR2Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.R2?.weapon_name
const selectR3Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.R3?.weapon_name
const selectL1Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.L1?.weapon_name
const selectL2Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.L2?.weapon_name
const selectL3Name = (rootState: RootState): string => selectWeaponSlots(rootState)?.L3?.weapon_name

export const selectR1Weapon = (rootState: RootState): Weapon => _selectWeapon(rootState, selectR1Name(rootState))
export const selectR2Weapon = (rootState: RootState): Weapon => _selectWeapon(rootState, selectR2Name(rootState))
export const selectR3Weapon = (rootState: RootState): Weapon => _selectWeapon(rootState, selectR3Name(rootState))
export const selectL1Weapon = (rootState: RootState): Weapon => _selectWeapon(rootState, selectL1Name(rootState))
export const selectL2Weapon = (rootState: RootState): Weapon => _selectWeapon(rootState, selectL2Name(rootState))
export const selectL3Weapon = (rootState: RootState): Weapon => _selectWeapon(rootState, selectL3Name(rootState))

export const selectActiveWeaponSettings = (rootState: RootState): WeaponSettings => {
    const slotId = selectActiveSlotId(rootState)
    if (isBlank(slotId)) {
        return null
    }
    return selectWeaponSlots(rootState)?.[slotId]
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

export const selectEquipmentSlotData = (rootState: RootState): WeaponSlotsData => {
    const slots = selectWeaponSlots(rootState)
    const results = {} as unknown as WeaponSlotsData
    for (const [id, settings] of Object.entries(slots)) {
        results[id] = {
            name: settings.weapon_name,
            displayName: _selectWeaponDisplayName(settings),
            empty: isBlank(settings?.weapon_name),
        }
    }
    return results
}

export const selectActiveWeapon = (rootState: RootState) => {
    const activeName = selectActiveWeaponName(rootState)
    if (isBlank(activeName)) {
        return null
    }
    const weapons = selectAllWeapons(rootState)
    if (isBlank(weapons)) {
        return null
    }
    return weapons.find(x => x?.name == activeName)
}

export const selectActiveWeaponDisplayName = (rootState: RootState): string => {
    return _selectWeaponDisplayName(selectActiveWeaponSettings(rootState))
}

// =============================================================================
// Stats
// =============================================================================

const selectSlimWeaponStatData = (rootState: RootState): SlimWeaponData => {
    const weapon = selectActiveWeapon(rootState)
    if (isBlank(weapon)) {
        return null
    }
    const weaponSettings = selectActiveWeaponSettings(rootState)
    const result = _selectSlimWeaponData(weapon, weaponSettings)
    return result
}

export const selectCalculatedWeaponStats = (rootState: RootState): CalculatedWeaponStats => {
    const attributes = selectAllAttributeLevels(rootState)
    const weapon = selectActiveWeapon(rootState)
    const stats = selectSlimWeaponStatData(rootState)
    if (isBlank(stats)) {
        return UnarmedStats
    }
    const allAdjustmentParams = selectAttackElementCorrectParams(rootState)

    const adjustmentParams = allAdjustmentParams.find(x => x.id == stats.attack_element_correct_param_id)
    if (isBlank(adjustmentParams)) {
        return UnarmedStats
    }
    const requirements = getRequirements(weapon)
    return new WeaponStatsCalculator({
        slimData:         stats,
        adjustmentParams: adjustmentParams,
        requirements:     requirements,
        attributes:       attributes,
    }).calculate()
}

// =============================================================================
// Old Weapon
// =============================================================================

export const selectOldWeapon = (rootState: RootState): Weapon => {
    const oldWeaponSettings = rootState?.Weapons?.oldWeapon
    if (isBlank(oldWeaponSettings?.weapon_name)) {
        return Unarmed
    }
    if (isBlank(oldWeaponSettings)) {
        return Unarmed
    }
    if (oldWeaponSettings.weapon_name == "Unarmed") {
        return Unarmed
    }
    const allWeapons = selectAllWeapons(rootState)

    const oldWeapon = allWeapons.find(x => x.name == oldWeaponSettings.weapon_name)

    return oldWeapon
}

export const selectOldWeaponStats = (rootState: RootState): CalculatedWeaponStats => {
    const allAdjustmentParams = selectAttackElementCorrectParams(rootState)
    if (isBlank(allAdjustmentParams)) {
        return UnarmedStats
    }

    const oldWeaponSettings = rootState?.Weapons?.oldWeapon
    if (isBlank(oldWeaponSettings)) {
        return UnarmedStats
    }

    const attributes = selectAllAttributeLevels(rootState)
    const allWeapons = selectAllWeapons(rootState)

    const oldWeapon = allWeapons.find(x => x.name == oldWeaponSettings.weapon_name)

    const stats = _selectSlimWeaponData(oldWeapon, oldWeaponSettings)
    if (isBlank(stats)) {
        return UnarmedStats
    }

    const adjustmentParams = allAdjustmentParams.find(x => x.id == stats.attack_element_correct_param_id)
    if (isBlank(adjustmentParams)) {
        return UnarmedStats
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

// =============================================================================
// Ashes of War / Smithing
// =============================================================================

export const selectCanCustomize = (rootState: RootState): boolean => {
    const customizing = selectCustomizing(rootState)
    if (customizing == true) {
        return false
    }
    const smithing = selectChoosingAffinity(rootState)
    if (smithing == true) {
        return false
    }
    const activeWeapon = selectActiveWeapon(rootState)
    if (isBlank(activeWeapon)) {
        return false
    }
    if (activeWeapon?.is_special == true) {
        return false
    }
    return true
}

const _selectWeaponSkillByName = (rootState: RootState, name: string): WeaponSkill => {
    if (isBlank(name)) {
        return null
    }
    const weaponSkills = selectWeaponSkills(rootState)
    return weaponSkills?.find(x => x.name == name) ?? null
}

export const selectActiveWeaponSkillName = (rootState: RootState): string => {
    const configuredName = selectActiveWeaponSettings(rootState)?.weapon_skill_name
    if (!isBlank(configuredName)) {
        return configuredName
    }
    const activeWeapon = selectActiveWeapon(rootState)
    return activeWeapon?.weapon_skill?.name
}

export const selectActiveWeaponSkill = (rootState: RootState): WeaponSkill => {
    const configuredName = selectActiveWeaponSettings(rootState)?.weapon_skill_name
    if (!isBlank(configuredName)) {
        return _selectWeaponSkillByName(rootState, configuredName)
    }
    const activeWeapon = selectActiveWeapon(rootState)
    if (isBlank(activeWeapon)) {
        return null
    }
    return activeWeapon?.weapon_skill
}

export const selectAshOfWarOptions = (rootState: RootState): WeaponSkill[] => {
    const weapon = selectActiveWeapon(rootState)
    if (isBlank(weapon)) {
        return []
    }
    const skills = selectWeaponSkills(rootState)
    if (isBlank(skills)) {
        return []
    }
    // debugger
    return skills.filter(x => x.compatible_weapon_types.includes(weapon.weapon_type))
}

export const selectActiveAffinityName = (rootState: RootState): string => {
    const configuredName = selectActiveWeaponSettings(rootState)?.affinity_name
    if (!isBlank(configuredName)) {
        return configuredName
    }
    const activeWeapon = selectActiveWeapon(rootState)
    return activeWeapon.weapon_skill.default_affinity
}

export const selectAffinityOptions = (rootState: RootState) => {
    const skillName = selectActiveWeaponSkillName(rootState)
    if (isBlank(skillName)) {
        return []
    }
    const skill = _selectWeaponSkillByName(rootState, skillName)
    if (isBlank(skill)) {
        return []
    }
    if (!skill.ash_of_war) {
        return []
    }
    return skill.compatible_weapon_affinities
}

// =============================================================================
// Character Status
// =============================================================================

const _selectWeaponSettingsBySlot = (rootState: RootState, slotId: WeaponSlotId): WeaponSettings => {
    return selectWeaponSlots(rootState)?.[slotId]
}

const _selectCalculatedWeaponStatsBySlot = (rootState: RootState, slotId: WeaponSlotId): CalculatedWeaponStats => {
    const attributes = selectAllAttributeLevels(rootState)
    const weaponSettings = _selectWeaponSettingsBySlot(rootState, slotId)
    if (isBlank(weaponSettings?.weapon_name)) {
        return UnarmedStats
    }
    const allWeapons = selectAllWeapons(rootState)
    if (isBlank(allWeapons)) {
        return UnarmedStats
    }
    const weapon = allWeapons.find(x => x?.name == weaponSettings.weapon_name)
    const slimData = _selectSlimWeaponData(weapon, weaponSettings)
    if (isBlank(slimData)) {
        return UnarmedStats
    }
    const allAdjustmentParams = selectAttackElementCorrectParams(rootState)

    const adjustmentParams = allAdjustmentParams.find(x => x.id == slimData.attack_element_correct_param_id)
    if (isBlank(adjustmentParams)) {
        return UnarmedStats
    }
    const requirements = getRequirements(weapon)
    return new WeaponStatsCalculator({
        slimData:         slimData,
        adjustmentParams: adjustmentParams,
        requirements:     requirements,
        attributes:       attributes,
    }).calculate()
}

export const selectCalculatedWeaponStatsForR1 = (rootState: RootState): CalculatedWeaponStats => _selectCalculatedWeaponStatsBySlot(rootState, "R1")
export const selectCalculatedWeaponStatsForR2 = (rootState: RootState): CalculatedWeaponStats => _selectCalculatedWeaponStatsBySlot(rootState, "R2")
export const selectCalculatedWeaponStatsForR3 = (rootState: RootState): CalculatedWeaponStats => _selectCalculatedWeaponStatsBySlot(rootState, "R3")
export const selectCalculatedWeaponStatsForL1 = (rootState: RootState): CalculatedWeaponStats => _selectCalculatedWeaponStatsBySlot(rootState, "L1")
export const selectCalculatedWeaponStatsForL2 = (rootState: RootState): CalculatedWeaponStats => _selectCalculatedWeaponStatsBySlot(rootState, "L2")
export const selectCalculatedWeaponStatsForL3 = (rootState: RootState): CalculatedWeaponStats => _selectCalculatedWeaponStatsBySlot(rootState, "L3")

const _selectTotalDamageBySlot = (rootState: RootState, slotId: WeaponSlotId): Decimal => {
    const stats = _selectCalculatedWeaponStatsBySlot(rootState, slotId)?.attack?.total
    if (isBlank(stats)) {
        return sum(Object.values(UnarmedStats.attack.total))
    }
    return sum(Object.values(stats))
}

export const selectTotalDamageForR1 = (rootState: RootState): Decimal => _selectTotalDamageBySlot(rootState, "R1")
export const selectTotalDamageForR2 = (rootState: RootState): Decimal => _selectTotalDamageBySlot(rootState, "R2")
export const selectTotalDamageForR3 = (rootState: RootState): Decimal => _selectTotalDamageBySlot(rootState, "R3")
export const selectTotalDamageForL1 = (rootState: RootState): Decimal => _selectTotalDamageBySlot(rootState, "L1")
export const selectTotalDamageForL2 = (rootState: RootState): Decimal => _selectTotalDamageBySlot(rootState, "L2")
export const selectTotalDamageForL3 = (rootState: RootState): Decimal => _selectTotalDamageBySlot(rootState, "L3")
