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
    startingClass: StartingClassName
    attributes: Attributes
    armor: ArmorSet
    talismans: TalismanSet
    weapons: WeaponSlots
    ammunition: Record<AmmunitionSlotId, string>
    spells: Record<SpellSlotId, string>
}
