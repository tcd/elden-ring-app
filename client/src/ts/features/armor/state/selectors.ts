import { Armor, ArmorSet } from "@app/types"
import { compactArray, isBlank } from "@app/util"
import { RootState } from "@app/state"
import { selectArmor } from "@app/features/builder/state/selectors/api"

const selectArmorByName = (name: string, data: Armor[]) => {
    if (isBlank(name)) { return null }
    if (isBlank(data)) { return null }
    return data.find(x => x.name == name)
}

const selectAll = selectArmor

const selectArmorSlice = (rootState: RootState) => {
    return rootState?.Armor
}

const selectActiveType = (rootState: RootState) => selectArmorSlice(rootState)?.activeType
const selectOldName    = (rootState: RootState) => selectArmorSlice(rootState)?.oldName
export const selectArmorNames = (rootState: RootState): ArmorSet => selectArmorSlice(rootState)?.armorNames

const selectActiveName = (rootState: RootState) => {
    const activeType = selectActiveType(rootState)
    const equipped   = selectArmorNames(rootState)
    return equipped[activeType]
}

const selectActiveArmor = (rootState: RootState) => {
    return selectArmorByName(selectActiveName(rootState), selectAll(rootState))
}

/** For use with Armor Table */
const selectAllFiltered = (rootState: RootState) => {
    const armor = selectAll(rootState)
    const type = selectActiveType(rootState)
    if (type == "all") {
        return armor
    }
    const filteredArmor = armor.filter((x) => x.armor_type == `${type}`)
    return filteredArmor
}

export const selectHeadName  = (rootState: RootState): string => selectArmorNames(rootState)?.Head
export const selectChestName = (rootState: RootState): string => selectArmorNames(rootState)?.Chest
export const selectArmsName  = (rootState: RootState): string => selectArmorNames(rootState)?.Arms
export const selectLegsName  = (rootState: RootState): string => selectArmorNames(rootState)?.Legs

/** Returns equipped Head armor. */
export const selectHead  = (rootState: RootState): Armor => selectArmorByName(selectHeadName(rootState), selectAll(rootState))
/** Returns equipped Chest armor. */
export const selectChest = (rootState: RootState): Armor => selectArmorByName(selectChestName(rootState), selectAll(rootState))
/** Returns equipped Arms armor. */
export const selectArms  = (rootState: RootState): Armor => selectArmorByName(selectArmsName(rootState), selectAll(rootState))
/** Returns equipped Legs armor. */
export const selectLegs  = (rootState: RootState): Armor => selectArmorByName(selectLegsName(rootState), selectAll(rootState))

/** Returns previously equipped armor for comparison. */
export const selectOldArmor  = (rootState: RootState): Armor => {
    return selectArmorByName(selectOldName(rootState), selectAll(rootState))
}

/**
 * Returns an array of all equipped armor.
 *
 * Will not include null values.
 */
export const selectCompactArmor = (state: RootState): Armor[] => {
    const allArmor = [
        selectHead(state),
        selectChest(state),
        selectArms(state),
        selectLegs(state),
    ]
    return compactArray(allArmor)
}

export const selectArmorOptions = (state: RootState): Armor[] => {
    const activeType = selectActiveType(state)
    if (isBlank(activeType)) {
        return []
    }
    const armor = selectAll(state)
    if (isBlank(armor)) {
        return []
    }
    return armor.filter(x => x.armor_type == activeType)
}

// =============================================================================
// Export
// =============================================================================

export const ArmorSelectors = {
    slots: selectArmorNames,
    all: selectAll,
    allFiltered: selectAllFiltered,
    active: selectActiveArmor,
    activeName: selectActiveName,
    activeType: selectActiveType,
    compactArray: selectCompactArmor,
    options: selectArmorOptions,
    equipped: {
        head: selectHead,
        chest: selectChest,
        arms: selectArms,
        legs: selectLegs,
    },
    equippedNames: {
        head: selectHeadName,
        chest: selectChestName,
        arms: selectArmsName,
        legs: selectLegsName,
    },
}

