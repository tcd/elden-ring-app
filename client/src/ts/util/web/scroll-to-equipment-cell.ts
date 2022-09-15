import type { RefObject } from "react"

import type { RefMap } from "@app/types"
import { isBlank } from "@app/util"

export const scrollToEquipmentCell = (
    activeName:      string,
    menuHasScrolled: boolean,
    cellRefs:        RefMap,
    menuRef:         RefObject<HTMLDivElement>,
    callback:        () => void,
): void => {
    // if (isBlank(activeName))            { return null }
    if (menuHasScrolled)                { return null }
    if (!cellRefs[activeName]?.current) { return null }
    if (!menuRef?.current)              { return null }

    if (isBlank(activeName)) {
        callback()
        return
    }

    const yOffset = -375
    const y = cellRefs[activeName].current.getBoundingClientRect().top + window.scrollY + yOffset
    menuRef.current.scrollTo({ top: y })

    callback()
}
