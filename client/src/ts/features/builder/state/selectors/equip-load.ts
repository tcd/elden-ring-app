import { sum } from "lodash"

import {
    Encumbrance,
    Stat,
    EquipmentEffectMethod,
    EquipmentEffectType,
} from "@types"
import { RootState } from "@app/state"
import {
    LEVEL_EQUIP_LOAD_MAP,
} from "@app/data"

import * as Attributes from "./attributes"
import * as Talismans from "./talismans"
import { WeaponsSelectors as Weapons } from "@app/features/weapons"
import { ArmorSelectors as Armor } from "@app/features/armor"

// =============================================================================
// Equip Load
// =============================================================================

export const selectBaseEquipLoad = (state: RootState): number => {
    const level = Attributes.selectEndurance(state)
    return (level > 99) ? LEVEL_EQUIP_LOAD_MAP[-1] : LEVEL_EQUIP_LOAD_MAP[level]
}

export const selectEquipLoadPercentage = (state: RootState) => {
    const maxLoad     = selectMaxEquipLoad(state)
    const currentLoad = selectCurrentEquipLoad(state)

    return (parseFloat(
        (currentLoad / maxLoad).toFixed(3)
    ))
}

export const selectEquipLoadDescription = (state: RootState) => {
    const percentage = selectEquipLoadPercentage(state)

    if (percentage <= 0.299) { return Encumbrance.Light }
    if (percentage <= 0.699) { return Encumbrance.Medium }
    if (percentage <= 0.999) { return Encumbrance.Heavy }

    return Encumbrance.Overloaded
}

export const selectCurrentEquipLoad = (state: RootState) => {
    const talismans      = Talismans.selectCompactTalismans(state)
    const talismanWeight = sum(talismans.map(x => x?.weight ?? 0))

    const weapons      = Weapons.compactArray(state)
    const weaponWeight = sum(weapons.map(x => x?.weight ?? 0))

    const armor       = Armor.compactArray(state)
    const armorWeight = sum(armor.map(x => x?.weight ?? 0))


    return sum([
        armorWeight,
        talismanWeight,
        weaponWeight,
    ].flat())
}

export const selectMaxEquipLoad = (state: RootState): number => {
    const baseEquipLoad = selectBaseEquipLoad(state)

    let equipLoad = baseEquipLoad

    const talismans = Talismans.selectCompactTalismans(state)
    if (talismans.length != 0) {
        for (const talisman of talismans) {
            if (talisman.effects) {
                for (const effect of talisman.effects) {
                    if (effect.affected_stat == Stat.MAX_EQUIP_LOAD) {
                        let adjustment = 0
                        switch (effect.effect_method) {
                            case EquipmentEffectMethod.flat:
                                adjustment = effect.value
                                break
                            case EquipmentEffectMethod.percentage:
                                adjustment = equipLoad * effect.value
                                break
                            default:
                                break
                        }
                        if (effect.effect_type == EquipmentEffectType.decrease) {
                            adjustment  = adjustment * -1
                        }
                        equipLoad += adjustment
                    }
                }
            }
        }
    }

    return equipLoad
}
