import type { WeaponsState } from "../state"

export const noWeaponsSelected = (slice: WeaponsState): boolean => {
    const slots = slice?.slots
    if (slots?.R1?.weapon_name != null) { return false }
    if (slots?.R2?.weapon_name != null) { return false }
    if (slots?.R3?.weapon_name != null) { return false }
    if (slots?.L1?.weapon_name != null) { return false }
    if (slots?.L2?.weapon_name != null) { return false }
    if (slots?.L3?.weapon_name != null) { return false }
    return true
}
