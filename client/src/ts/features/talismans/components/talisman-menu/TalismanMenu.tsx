import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { TalismanMenuGrid } from "@app/features/talismans/components"

export const TalismanMenu = (): JSX.Element => {

    const activeSlot = useSelector(Selectors.Talismans.activeSlotId)

    if (isBlank(activeSlot)) {
        return null
    }

    return <TalismanMenuGrid />
}
