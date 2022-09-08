import type {
    StartingClassName,
    ArmorSet,
    Attributes,
    TalismanSet,
    WeaponSlots,
    AmmunitionSlotId,
    SpellSlotId,
} from "@app/types"

export interface BuildData {
    ammunition?: Record<AmmunitionSlotId, string>
    armor: ArmorSet
    attributes: Attributes
    spells?: Record<SpellSlotId, string>
    startingClass: StartingClassName
    talismans: TalismanSet
    weapons: WeaponSlots
}
