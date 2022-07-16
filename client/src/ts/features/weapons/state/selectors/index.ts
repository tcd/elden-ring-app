import * as Core from "./selectors"

export const WeaponsSelectors = {
    /**
    * Returns an array of all equipped weapons.
    *
    * Will not include null values.
    */
    compactArray:      Core.selectCompactWeaponsArray,
    slots:             Core.selectWeaponSlots,
    allWeapons:        Core.selectAllWeapons,
    activeSlotId:      Core.selectActiveSlotId,
    menuHasScrolled:   Core.selectHasMenuScrolled,
    equipmentSlotData: Core.selectEquipmentSlotData,
    mobileTab:         Core.selectMobileTab,
    active: {
        weapon:            Core.selectActiveWeapon,
        weaponName:        Core.selectActiveWeaponName,
        weaponSettings:    Core.selectActiveWeaponSettings,
        calculatedStats:   Core.selectCalculatedWeaponStats,
        weaponDisplayName: Core.selectActiveWeaponDisplayName,
        weaponSkill:       Core.selectActiveWeaponSkill,
    },
    bySlot: {
        R1: Core.selectR1Weapon,
        R2: Core.selectR2Weapon,
        R3: Core.selectR3Weapon,
        L1: Core.selectL1Weapon,
        L2: Core.selectL2Weapon,
        L3: Core.selectL3Weapon,
    },
    old: {
        weapon: Core.selectOldWeapon,
        stats: Core.selectOldWeaponStats,
    },
    smithing: {
        canWeSmith:         Core.selectCanCustomize,
        areWeSmithing:      Core.selectCustomizing,
        activeSkillName:    Core.selectActiveWeaponSkillName,
        skillOptions:       Core.selectAshOfWarOptions,
        activeAffinityName: Core.selectActiveAffinityName,
        choosingAffinity:   Core.selectChoosingAffinity,
        affinityOptions:    Core.selectAffinityOptions,
    },
    calculated: {
        R1: Core.selectCalculatedWeaponStatsForR1,
        R2: Core.selectCalculatedWeaponStatsForR2,
        R3: Core.selectCalculatedWeaponStatsForR3,
        L1: Core.selectCalculatedWeaponStatsForL1,
        L2: Core.selectCalculatedWeaponStatsForL2,
        L3: Core.selectCalculatedWeaponStatsForL3,
    },
    totalDamage: {
        R1: Core.selectTotalDamageForR1,
        R2: Core.selectTotalDamageForR2,
        R3: Core.selectTotalDamageForR3,
        L1: Core.selectTotalDamageForL1,
        L2: Core.selectTotalDamageForL2,
        L3: Core.selectTotalDamageForL3,
    },
}
