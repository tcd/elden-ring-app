import { RootState } from "@app/state"
import { EquipmentEffect } from "@app/types"

import { ArmorSelectors as Armor } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors as Weapons } from "@app/features/weapons"

/**
 * Returns EquipmentEffects from any equipped Armor.
 */
export const selectArmorEffects = (state: RootState): EquipmentEffect[] => {
    const equipped = Armor.compactArray(state)
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
    const equipped = Weapons.compactArray(state)
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
    const equipped = Talismans.compactArray(state)
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
