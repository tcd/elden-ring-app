import type { Location } from "react-router-dom"

import type {
    ArmorType,
    TalismanSlotId,
    SpellSlotId,
    WeaponSlotId,
} from "../constants"

// export const PathParamValues = <const>{
//     armorSlotId:    "armorSlotId",
//     spellSlotId:    "spellSlotId",
//     talismanSlotId: "talismanSlotId",
//     weaponSlotId:   "weaponSlotId",
// }
//
// export type PathParamValue = typeof PathParamValues[keyof typeof PathParamValues]
//
// export type IPathParams = Partial<Record<PathParamValue, string>>;

export type PathParams = {
    armorSlotId?: ArmorType
    spellSlotId: SpellSlotId
    talismanSlotId: TalismanSlotId
    weaponSlotId: WeaponSlotId
}

export interface LocationChangePayload {
    pathParams: PathParams
    location: Location
    previousLocation?: Location
    hash: string
}
