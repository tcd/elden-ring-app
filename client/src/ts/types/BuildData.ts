import type { FiniteResourceId } from "@app/data"
import type {
    StartingClassName,
    ArmorSet,
    Attributes,
    TalismanSlotId,
    WeaponSlots,
    AmmunitionSlotId,
    SpellSlotId,
    QuickItemSlotId,
} from "@app/types"

export interface BuildData {
    ammunition?: Record<AmmunitionSlotId, string>
    armor: ArmorSet
    attributes: Attributes
    checklist?: Record<FiniteResourceId, boolean>
    quickItems?: Record<QuickItemSlotId, string>
    spells?: Record<SpellSlotId, string>
    startingClass: StartingClassName
    talismans: Record<TalismanSlotId, string>
    weapons: WeaponSlots
}
