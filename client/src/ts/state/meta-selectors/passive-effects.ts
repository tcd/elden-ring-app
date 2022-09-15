import { RootState } from "@app/state"
import { EquipmentEffect } from "@app/types"

import { ArmorSelectors as Armor } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors as Weapons } from "@app/features/weapons"

/** Returns EquipmentEffects from any equipped Armor. */
const selectArmorEffects = (rootState: RootState): EquipmentEffect[] => {
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

/** Returns EquipmentEffects from any equipped Weapons. */
const selectWeaponEffects = (rootState: RootState): EquipmentEffect[] => {
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

/** Returns EquipmentEffects from any equipped Talismans. */
const selectTalismanEffects = (rootState: RootState): EquipmentEffect[] => {
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

const selectEquipmentEffects = (rootState: RootState): EquipmentEffect[] => {
    return [
        ...selectArmorEffects(rootState),
        ...selectWeaponEffects(rootState),
        ...selectTalismanEffects(rootState),
    ]
}

export const PassiveEffectSelectors = {
    armor: selectArmorEffects,
    weapons: selectWeaponEffects,
    talismans: selectTalismanEffects,
    allEffects: selectEquipmentEffects,
}
