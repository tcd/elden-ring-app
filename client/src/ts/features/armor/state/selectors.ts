import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { BuilderSelectors } from "@app/features/builder"

// const selectState = (state: RootState) => { return state?.Armor }

const selectAll = BuilderSelectors.api.armor

const selectActiveName = (state: RootState) => { return state?.Armor?.activeName }
const selectActiveType = (state: RootState) => { return state?.Armor?.activeType }

const selectActiveArmor = (state: RootState) => {
    const activeName = selectActiveName(state)
    if (isBlank(activeName)) {
        return null
    }
    const armor = selectAll(state)
    return armor.find(x => x.name == activeName)
}

const selectAllFiltered = (state: RootState) => {
    const armor = selectAll(state)
    const type = selectActiveType(state)
    if (type == "all") {
        return armor
    }
    const filteredArmor = armor.filter((x) => x.armor_type == `${type}`)
    return filteredArmor
}

// =============================================================================
// Export
// =============================================================================

export const ArmorSelectors = {
    all: selectAll,
    allFiltered: selectAllFiltered,
    active: selectActiveArmor,
    activeName: selectActiveName,
    activeType: selectActiveType,
}

