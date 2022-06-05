import { Weapon, WeaponSettings } from "@app/types"
import { isBlank, compactArray } from "@app/util"
import { RootState } from "@app/state"
import { selectWeapons } from "@app/features/builder/state/selectors/api"

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

// const selectActiveWeapon = (state: RootState) => {
//     const activeName = state?.Weapons?.activeName
//     if (isBlank(activeName)) {
//         return null
//     }
//     const weapons = selectAllWeapons(state)
//     if (isBlank(weapons)) {
//         return null
//     }
//     return weapons.find(x => x?.name == activeName)
// }

export const selectActiveWeapon = (state: RootState) => {
    const slotId = selectActiveSlotId(state)
    if (isBlank(slotId)) {
        return null
    }
    const activeName = state?.Weapons?.slots[slotId]?.weapon_name
    const weapons = selectWeapons(state)
    if (isBlank(weapons)) {
        return null
    }
    return weapons.find(x => x?.name == activeName)
}
