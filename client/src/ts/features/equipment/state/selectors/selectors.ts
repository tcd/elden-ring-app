import type { AmmunitionSlotId, QuickItemSlotId, TalismanSlotId, WeaponSlotId } from "@app/types"
import { weaponSlotDisplayName, ammunitionSlotDisplayName, quickItemSlotDisplayName, talismanSlotDisplayName } from "@app/util"
import { RootState } from "@app/state"
import { ArmorSelectors } from "@app/features/armor"
import { TalismansSelectors } from "@app/features/talismans"
import { WeaponsSelectors } from "@app/features/weapons"

import { _selectSlice } from "./select-slice"

const _selectActiveType   = (rootState: RootState) => _selectSlice(rootState)?.activeType ?? null
const _selectActiveSlotId = (rootState: RootState) => _selectSlice(rootState)?.activeSlotId ?? null

const selectActiveType = (rootState: RootState) => {
    return _selectActiveType(rootState) ?? "Weapon"
}

const selectActiveSlotId = (rootState: RootState) => {
    const slotId = _selectActiveSlotId(rootState)
    if (slotId) {
        return slotId
    }
    return "R1"
}

const selectGridTitle = (rootState: RootState): string => {
    const activeType = selectActiveType(rootState)
    const slotId     = selectActiveSlotId(rootState)
    switch (activeType) {
        case "Armor":      return slotId?.toString()
        case "Weapon":     return weaponSlotDisplayName(slotId as WeaponSlotId)
        case "Talisman":   return talismanSlotDisplayName(slotId as TalismanSlotId)
        case "Ammunition": return ammunitionSlotDisplayName(slotId as AmmunitionSlotId)
        case "QuickItem":  return quickItemSlotDisplayName(slotId as QuickItemSlotId)
        default: return "no title"
    }
}

const selectGridDescription = (rootState: RootState): string => {
    const activeType = selectActiveType(rootState)
    const slotId     = selectActiveSlotId(rootState)
    switch (activeType) {
        case "Armor":      return _selectArmorDescription(rootState)
        case "Weapon":     return WeaponsSelectors.active.weaponDisplayName(rootState) ?? "Unarmed"
        case "Talisman":   return _selectTalismanDescription(rootState)
        case "Ammunition": return ammunitionSlotDisplayName(slotId as AmmunitionSlotId)
        case "QuickItem":  return `-`
        default: return "no title"
    }
}

// =============================================================================
// Description
// =============================================================================

const _selectWeaponDescription = (rootState: RootState): string => {
    const slotId      = selectActiveSlotId(rootState)
    const armorNames  = ArmorSelectors.slots(rootState)
    const description = armorNames?.[slotId] ?? slotId?.toString()
    return description
}

const _selectArmorDescription = (rootState: RootState): string => {
    const slotId      = selectActiveSlotId(rootState)
    const armorNames  = ArmorSelectors.slots(rootState)
    const description = armorNames?.[slotId] ?? slotId?.toString()
    return description
}

const _selectTalismanDescription = (rootState: RootState): string => {
    const slotId        = selectActiveSlotId(rootState)
    const talismanNames = TalismansSelectors.slots(rootState)
    const description   = talismanNames?.[slotId] ?? "-"
    return description
}

export const EquipmentSelectors = {
    gridTitle: selectGridTitle,
    gridDescription: selectGridDescription,
    activeType: selectActiveType,
    activeSlotId: selectActiveSlotId,
}
