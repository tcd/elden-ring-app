
import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { WeaponMenuGrid } from "@app/features/weapons/components"
import { ErScroll } from "@app/shared"

export const WeaponMenu = (_props: unknown): JSX.Element => {

    const activeSlot = useSelector(Selectors.Weapons.activeSlotId)

    if (isBlank(activeSlot)) {
        return null
    } else {
        return (
            <div className="er__equipmentMenu">
                {/* <ErScroll> */}
                    <WeaponMenuGrid />
                {/* </ErScroll> */}
            </div>
        )
    }
}

