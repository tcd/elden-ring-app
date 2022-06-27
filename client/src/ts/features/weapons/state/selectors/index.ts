import * as Core from "./selectors"

export const WeaponsSelectors = {
    /**
    * Returns an array of all equipped weapons.
    *
    * Will not include null values.
    */
    compactArray:    Core.selectCompactWeaponsArray,
    slots:           Core.selectWeaponSlots,
    allWeapons:      Core.selectAllWeapons,
    activeSlotId:    Core.selectActiveSlotId,
    menuHasScrolled: Core.selectHasMenuScrolled,
    active: {
        weapon:          Core.selectActiveWeapon,
        weaponName:      Core.selectActiveWeaponName,
        weaponSettings:  Core.selectActiveWeaponSettings,
        calculatedStats: Core.selectCalculatedWeaponStats,
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
    },
}
