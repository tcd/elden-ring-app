import { getImageSrcManual } from "./get-image-src"

// =============================================================================
// Old
// =============================================================================

const emptySlotSrc = getImageSrcManual("bad/equipment-slots/empty", "256")

const headSlotSrc  = getImageSrcManual("bad/equipment-slots/armor-head",  "256")
const chestSlotSrc = getImageSrcManual("bad/equipment-slots/armor-chest", "256")
const armsSlotSrc  = getImageSrcManual("bad/equipment-slots/armor-arms",  "256")
const legsSlotSrc  = getImageSrcManual("bad/equipment-slots/armor-legs",  "256")

const weaponSlotSrcRight = getImageSrcManual("bad/equipment-slots/weapon-slot-right",  "256")
const weaponSlotSrcLeft  = getImageSrcManual("bad/equipment-slots/weapon-slot-left",   "256")
const arrowSlotSrc       = getImageSrcManual("bad/equipment-slots/weapon-slot-arrows", "256")
const boltSlotSrc        = getImageSrcManual("bad/equipment-slots/weapon-slot-bolts",  "256")

const talismanSlotSrc  = getImageSrcManual("bad/equipment-slots/talisman-slot", "256")
const quickItemSlotSrc = getImageSrcManual("bad/equipment-slots/quick-items", "256")
const spellSlotSrc     = getImageSrcManual("bad/equipment-slots/empty", "256")

// =============================================================================
// New
// =============================================================================

// const emptySlotSrc = getImageSrcManual("ui/equipment-menu/empty", "256")

// const headSlotSrc  = getImageSrcManual("ui/equipment-menu/head",  "256")
// const chestSlotSrc = getImageSrcManual("ui/equipment-menu/chest", "256")
// const armsSlotSrc  = getImageSrcManual("ui/equipment-menu/arms",  "256")
// const legsSlotSrc  = getImageSrcManual("ui/equipment-menu/legs",  "256")

// const weaponSlotSrcRight = getImageSrcManual("ui/equipment-menu/weapon-right",  "256")
// const weaponSlotSrcLeft  = getImageSrcManual("ui/equipment-menu/weapon-left",   "256")
// const arrowSlotSrc       = getImageSrcManual("ui/equipment-menu/arrows", "256")
// const boltSlotSrc        = getImageSrcManual("ui/equipment-menu/bolts",  "256")

// const talismanSlotSrc  = getImageSrcManual("ui/equipment-menu/talisman", "256")
// const quickItemSlotSrc = getImageSrcManual("ui/equipment-menu/quick-item", "256")
// const spellSlotSrc     = getImageSrcManual("ui/equipment-menu/spell", "256")

// =============================================================================

export interface IEquipmentSlotImageUrls {
    Empty:       string
    Head:        string
    Chest:       string
    Arms:        string
    Legs:        string
    WeaponLeft:  string
    WeaponRight: string
    Arrow:       string
    Bolt:        string
    Talisman:    string
    QuickItem:   string
    Spell:       string
}

export const EquipmentSlotImageUrls: IEquipmentSlotImageUrls = {
    Empty:       emptySlotSrc,
    Head:        headSlotSrc,
    Chest:       chestSlotSrc,
    Arms:        armsSlotSrc,
    Legs:        legsSlotSrc,
    WeaponLeft:  weaponSlotSrcLeft,
    WeaponRight: weaponSlotSrcRight,
    Arrow:       arrowSlotSrc,
    Bolt:        boltSlotSrc,
    Talisman:    talismanSlotSrc,
    QuickItem:   quickItemSlotSrc,
    Spell:       spellSlotSrc,
}
