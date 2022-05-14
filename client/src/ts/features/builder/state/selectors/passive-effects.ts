import { RootState } from "@app/state"
import { EquipmentEffect } from "@app/types"

import * as Weapons from "./weapons"
import * as Talismans from "./talismans"
import * as Armor from "./armor"

/**
 * Returns EquipmentEffects from any equipped Armor.
 */
export const selectArmorEffects = (state: RootState): EquipmentEffect[] => {
    const equipped = Armor.selectCompactArmor(state)
    if (equipped.length == 0) {
        return []
    }
    const effects: EquipmentEffect[] = []
    for (const equipment of equipped) {
        if (equipment?.effects?.length ?? 0 > 0) {
            effects.push(...equipment.effects)
        }
    }
    return effects
}

/**
 * Returns EquipmentEffects from any equipped Weapons.
 */
export const selectWeaponEffects = (state: RootState): EquipmentEffect[] => {
    const equipped = Weapons.selectCompactWeaponsArray(state)
    if (equipped.length == 0) {
        return []
    }
    const effects: EquipmentEffect[] = []
    for (const equipment of equipped) {
        if (equipment?.effects?.length ?? 0 > 0) {
            effects.push(...equipment.effects)
        }
    }
    return effects
}

/**
 * Returns EquipmentEffects from any equipped Talismans.
 */
export const selectTalismanEffects = (state: RootState): EquipmentEffect[] => {
    const equipped = Talismans.selectCompactTalismans(state)
    if (equipped.length == 0) {
        return []
    }
    const effects: EquipmentEffect[] = []
    for (const equipment of equipped) {
        if (equipment?.effects?.length ?? 0 > 0) {
            effects.push(...equipment.effects)
        }
    }
    return effects
}

export const selectEquipmentEffects = (state: RootState): EquipmentEffect[] => {
    return [
        ...selectArmorEffects(state),
        ...selectWeaponEffects(state),
        ...selectTalismanEffects(state),
    ]
}
