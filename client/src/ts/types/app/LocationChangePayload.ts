import type { Location } from "react-router-dom"

export const PathParamValues = <const>{
    variantId: "variantId",
    imageId:   "imageId",
}

export type PathParamValue = typeof PathParamValues[keyof typeof PathParamValues]

export type IPathParams = Partial<Record<PathParamValue, string>>;

export interface LocationChangePayload {
    pathParams: IPathParams
    location: Location
    previousLocation?: Location
}
