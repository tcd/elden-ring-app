import { Armor, ArmorType } from "@types"
import { isBlank, compactArray } from "@app/util"
import { RootState } from "@app/state"
import * as Api from "./api"

export const selectHeadName  = (state: RootState): string => { return state?.Builder?.armor_names.Head  }
export const selectChestName = (state: RootState): string => { return state?.Builder?.armor_names.Chest }
export const selectArmsName  = (state: RootState): string => { return state?.Builder?.armor_names.Arms  }
export const selectLegsName  = (state: RootState): string => { return state?.Builder?.armor_names.Legs  }

const selectArmorByName = (name: string, data: Armor[]) => {
    if (isBlank(name)) { return null }
    return data.find(x => x.name == name)
}

/** Returns equipped Head armor. */
export const selectHead  = (state: RootState): Armor => {
    const armor = Api.selectArmor(state)
    if (isBlank(armor)) {
        return null
    }
    return selectArmorByName(selectHeadName(state), armor)
}
/** Returns equipped Chest armor. */
export const selectChest = (state: RootState): Armor => {
    const armor = Api.selectArmor(state)
    if (isBlank(armor)) {
        return null
    }
    return selectArmorByName(selectChestName(state), armor)
}
/** Returns equipped Arms armor. */
export const selectArms  = (state: RootState): Armor => {
    const armor = Api.selectArmor(state)
    if (isBlank(armor)) {
        return null
    }
    return selectArmorByName(selectArmsName(state), armor)
}
/** Returns equipped Legs armor. */
export const selectLegs  = (state: RootState): Armor => {
    const armor = Api.selectArmor(state)
    if (isBlank(armor)) {
        return null
    }
    return selectArmorByName(selectLegsName(state), armor)
}

/**
 * Returns an array of armor for each slot.
 *
 * **May contain null values.**
 */
export const selectArmorArray = (state: RootState): Armor[] => {
    return [
        selectHead(state),
        selectChest(state),
        selectArms(state),
        selectLegs(state),
    ]
}

/**
 * Returns an array of all equipped armor.
 *
 * Will not include null values.
 */
export const selectCompactArmor = (state: RootState): Armor[] => {
    return compactArray(selectArmorArray(state))
}

export const selectArmorModalOpen = (state: RootState): boolean => { return state.Builder.armor.modal_open }

export const selectActiveArmorType = (state: RootState): ArmorType => { return state.Builder.armor.active_type }

export const selectActiveArmorName = (state: RootState): string => {
    const activeType = selectActiveArmorType(state)
    if (isBlank(activeType)) {
        return null
    }
    const active = state.Builder.armor_names[activeType]
    return active
}

export const selectArmorOptions = (state: RootState): Armor[] => {
    const armor = Api.selectArmor(state)
    if (isBlank(armor)) {
        return []
    }
    const activeType = selectActiveArmorType(state)
    switch (activeType) {
        case ArmorType.Head:
            return armor.filter(x => x.armor_type == ArmorType.Head)
        case ArmorType.Chest:
            return armor.filter(x => x.armor_type == ArmorType.Chest)
        case ArmorType.Arms:
            return armor.filter(x => x.armor_type == ArmorType.Arms)
        case ArmorType.Legs:
            return armor.filter(x => x.armor_type == ArmorType.Legs)
        default:
            return []
    }
}
