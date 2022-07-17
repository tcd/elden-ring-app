import { AmmunitionSlotId, WeaponSlotId } from "@app/constants"
import { weaponSlotDisplayName, ammunitionSlotDisplayName } from "@app/util"
import { RootState } from "@app/state"
import { EquipmentState } from "./state"

const _selectSlice = (rootState: RootState): EquipmentState => rootState?.Equipment

const _selectActiveType   = (rootState: RootState) => _selectSlice(rootState)?.activeType ?? null
const _selectActiveSlotId = (rootState: RootState) => _selectSlice(rootState)?.activeSlotId ?? null
const selectMobileTab     = (rootState: RootState) => _selectSlice(rootState)?.mobileTab

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
        case "Talisman":   return `Talisman ${slotId}`
        case "Ammunition": return ammunitionSlotDisplayName(slotId as AmmunitionSlotId)
        default: return "no title"
    }
}

const selectGridDescription = (rootState: RootState): string => {
    const activeType = selectActiveType(rootState)
    const slotId     = selectActiveSlotId(rootState)
    switch (activeType) {
        case "Armor":      return slotId?.toString()
        case "Weapon":     return weaponSlotDisplayName(slotId as WeaponSlotId)
        case "Talisman":   return `Talisman ${slotId}`
        case "Ammunition": return ammunitionSlotDisplayName(slotId as AmmunitionSlotId)
        default: return "no title"
    }
}

export const EquipmentSelectors = {
    gridTitle: selectGridTitle,
    gridDescription: selectGridDescription,
    activeType: selectActiveType,
    mobileTab: selectMobileTab,
}
