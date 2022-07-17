import { IconNamesKey, IconNames } from "@app/constants"
import { getImageSrcManual } from "./get-image-src"

type IIconUrls = Record<IconNamesKey, string>

export const IconUrls: IIconUrls = Object.entries(IconNames).reduce((result, [key, value]) => {
    result[key] = getImageSrcManual(`icons/${value}`, "public")
    return result
}, {} as unknown as IIconUrls)
