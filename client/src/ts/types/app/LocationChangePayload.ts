import type { Location } from "react-router-dom"

export const PathParamValues = <const>{
    armorSlotId:   "armorSlotId",
    spellSlotId: "spellSlotId",
    talismanSlotId: "talismanSlotId",
    weaponSlotId: "weaponSlotId",
}

export type PathParamValue = typeof PathParamValues[keyof typeof PathParamValues]

export type IPathParams = Partial<Record<PathParamValue, string>>;

export interface LocationChangePayload {
    pathParams: IPathParams
    location: Location
    previousLocation?: Location
}
