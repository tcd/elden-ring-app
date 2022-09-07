import type { Location } from "react-router-dom"

import type {
    ArmorType,
    TalismanSlotId,
    SpellSlotId,
    WeaponSlotId,
    AmmunitionSlotId,
    QuickItemSlotId,
} from "@app/types"

export type PathParams = {
    armorSlotId?: ArmorType
    spellSlotId?: SpellSlotId
    talismanSlotId?: TalismanSlotId
    weaponSlotId?: WeaponSlotId
    ammunitionSlotId?: AmmunitionSlotId,
    quickItemSlotId?: QuickItemSlotId,
}

export interface LocationChangePayload {
    pathParams: PathParams
    location: Location
    previousLocation?: Location
    hash: string
}
