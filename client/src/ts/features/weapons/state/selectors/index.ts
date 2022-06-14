import * as Core from "./selectors"
// import { BuilderSelectors } from "@app/features/builder"
// import { selectWeapons } from "@app/features/builder/state/selectors/api"

export const WeaponsSelectors = {
    // allWeapons: BuilderSelectors.api.weapons,
    activeSlotId: Core.selectActiveSlotId,
    active: {
        weapon: Core.selectActiveWeapon,
        weaponName: Core.selectActiveWeaponName,
        weaponSettings: Core.selectActiveWeaponSettings,
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
    /**
    * Returns an array of all equipped weapons.
    *
    * Will not include null values.
    */
    compactArray: Core.selectCompactWeaponsArray,
}
