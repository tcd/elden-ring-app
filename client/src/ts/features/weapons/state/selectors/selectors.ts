import { Weapon, WeaponSettings } from "@app/types"
import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { BuilderSelectors } from "@app/features/builder"

const selectWeaponsState = (state: RootState) => { return state?.Weapons }

const selectActiveSlotId = (state: RootState) => { return state?.Weapons?.activeSlotId }

const selectWeapon = (state: RootState, name?: string): Weapon => {
    const weapons = BuilderSelectors.api.weapons(state)
    if (isBlank(name)) { return null }
    return weapons.find(x => x.name == name)
}

const selectActiveWeaponSettings = (state: RootState): WeaponSettings => {
    const slotId = selectActiveSlotId(state)
    if (isBlank(slotId)) {
        return null
    }
    return state.Weapons.slots[slotId]
}

const selectActiveWeaponName = (state: RootState) => {
    return selectActiveWeaponSettings(state)?.weapon_name
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

const selectActiveWeapon = (state: RootState) => {
    const slotId = selectActiveSlotId(state)
    if (isBlank(slotId)) {
        return null
    }
    const activeName = state?.Weapons?.slots[slotId]?.weapon_name
    const weapons = BuilderSelectors.api.weapons(state)
    if (isBlank(weapons)) {
        return null
    }
    return weapons.find(x => x?.name == activeName)
}

// =============================================================================
// Export
// =============================================================================

export const WeaponsSelectors = {
    allWeapons: BuilderSelectors.api.weapons,
    activeWeapon: selectActiveWeapon,
    activeWeaponName: selectActiveWeaponName,
    activeWeaponSettings: selectActiveWeaponSettings,
    activeSlotId: selectActiveSlotId,
}
