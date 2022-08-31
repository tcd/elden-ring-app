import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { WeaponSkillMenuGrid } from "@app/features/weapons/components"

export const WeaponSkillMenu = (): JSX.Element => {

    const activeName = useSelector(Selectors.Weapons.smithing.activeSkillName)

    if (isBlank(activeName)) {
        return null
    } else {
        return (
            <WeaponSkillMenuGrid />
        )
    }

}

