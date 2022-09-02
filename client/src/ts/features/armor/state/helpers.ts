import type { ArmorState } from "./state"

export const noArmorSelected = (slice: ArmorState): boolean => {
    const armorNames = slice?.armorNames
    if (armorNames?.Arms  != null) { return false }
    if (armorNames?.Chest != null) { return false }
    if (armorNames?.Head  != null) { return false }
    if (armorNames?.Legs  != null) { return false }
    return true
}
