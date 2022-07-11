
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { WeaponMenuGrid } from "@app/features/weapons/components"

export const WeaponMenu = (): JSX.Element => {

    const activeSlot = useSelector(Selectors.Weapons.activeSlotId)

    if (isBlank(activeSlot)) {
        return null
    } else {
        return (<WeaponMenuGrid />)
    }
}

