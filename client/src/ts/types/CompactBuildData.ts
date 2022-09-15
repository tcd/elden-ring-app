import type {
    TalismanSlotId,
    WeaponSlotId,
} from "@app/types"

// -----------------------------------------------------------------------------

export type StartingClassId = 1|2|3|4|5|6|7|8|9|10

// -----------------------------------------------------------------------------

export type CompactArmorSlotId =
    | "h"
    | "c"
    | "a"
    | "l"

export type CompactArmor = Record<CompactArmorSlotId, string>
// -----------------------------------------------------------------------------

export type CompactAttributeName =
    | "vig" // vigor
    | "min" // mind
    | "end" // endurance
    | "str" // strength
    | "dex" // dexterity
    | "int" // intelligence
    | "fai" // faith
    | "arc" // arcane

export type CompactAttributes = Record<CompactAttributeName, Integer>

// -----------------------------------------------------------------------------

export type CompactWeaponSettings = {
    /** weapon_name */
    n: string
    /** level */
    l: Integer
    /** affinity_name */
    a: string
    /** weapon_skill_name */
    s: string
}

export type CompactWeapons = Record<WeaponSlotId, CompactWeaponSettings>

// -----------------------------------------------------------------------------

export type CompactBuildData =
    CompactAttributes &
    CompactArmor &
    Record<TalismanSlotId, string> &
    CompactWeapons &
    {
        /** Starting Class Id */
        sc: StartingClassId
    }
