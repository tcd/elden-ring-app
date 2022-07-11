import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { WeaponDetail, WeaponMenu, WeaponSkillMenu } from "@app/features/weapons/components"

export const WeaponBuilderMenu = (): JSX.Element => {

    const customizing = useSelector(Selectors.Weapons.smithing.areWeSmithing)

    const farLeft = customizing ? <WeaponSkillMenu /> : <WeaponMenu />

    return (
        <div id="variable-menu">
            {farLeft}
            <div>
                <WeaponDetail />
            </div>
        </div>
    )
}

