import type { IconNamesKey } from "@app/types"
import { IconNames } from "@app/constants"

import { getImageSrcManual } from "./get-image-src"

export const IconUrls: Record<IconNamesKey, string> = Object.entries(IconNames).reduce((result, [key, value]) => {
    result[key] = getImageSrcManual(`icons/${value}`, "public")
    return result
}, {} as unknown as Record<IconNamesKey, string>)
