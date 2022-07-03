import { RefObject } from "react"

import { RefMap } from "@app/types"
import { isBlank } from "@app/util"

export const scrollToEquipmentCell = (
    activeName:      string,
    menuHasScrolled: boolean,
    cellRefs:        RefMap,
    menuRef:         RefObject<HTMLDivElement>,
    callback:        () => void,
): void => {
    if (isBlank(activeName))            { return null }
    if (menuHasScrolled)                { return null }
    if (!cellRefs[activeName]?.current) { return null }
    if (!menuRef?.current)              { return null }

    const yOffset = -375
    const y = cellRefs[activeName].current.getBoundingClientRect().top + window.scrollY + yOffset
    menuRef.current.scrollTo({ top: y })

    callback()
}
