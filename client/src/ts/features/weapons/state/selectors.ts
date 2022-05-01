import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { BuilderSelectors } from "@app/features/builder"

// const selectWeaponsState = (state: RootState) => { return state?.Weapons }

const selectAllWeapons = BuilderSelectors.api.weapons

const selectActiveWeaponName = (state: RootState) => { return state?.Weapons?.activeName }

const selectActiveWeapon = (state: RootState) => {
    const activeName = state?.Weapons?.activeName
    if (isBlank(activeName)) {
        return null
    }
    const weapons = selectAllWeapons(state)
    if (isBlank(weapons)) {
        return null
    }
    return weapons.find(x => x?.name == activeName)
}

// =============================================================================
// Export
// =============================================================================

export const WeaponsSelectors = {
    allWeapons: selectAllWeapons,
    activeWeapon: selectActiveWeapon,
    activeWeaponName: selectActiveWeaponName,
}
