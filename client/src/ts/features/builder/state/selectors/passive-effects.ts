import { RootState } from "@app/state"
import { EquipmentEffect } from "@app/types"

import { ArmorSelectors as Armor } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors as Weapons } from "@app/features/weapons"

/**
 * Returns EquipmentEffects from any equipped Armor.
 */
export const selectArmorEffects = (rootState: RootState): EquipmentEffect[] => {
    const equipped = Armor.compactArray(rootState)
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
export const selectWeaponEffects = (rootState: RootState): EquipmentEffect[] => {
    const equipped = Weapons.compactArray(rootState)
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
export const selectTalismanEffects = (rootState: RootState): EquipmentEffect[] => {
    const equipped = Talismans.compactArray(rootState)
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

export const selectEquipmentEffects = (rootState: RootState): EquipmentEffect[] => {
    return [
        ...selectArmorEffects(rootState),
        ...selectWeaponEffects(rootState),
        ...selectTalismanEffects(rootState),
    ]
}
