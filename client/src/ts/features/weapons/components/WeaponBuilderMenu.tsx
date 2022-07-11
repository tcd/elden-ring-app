import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { WeaponDetail, WeaponMenuGrid, WeaponSkillMenu } from "@app/features/weapons/components"

export const WeaponBuilderMenu = (): JSX.Element => {

    const customizing = useSelector(Selectors.Weapons.smithing.areWeSmithing)

    const farLeft = customizing ? <WeaponSkillMenu /> : <WeaponMenuGrid />

    return (
        <div id="variable-menu">
            <div className="er__equipmentMenu">
                {farLeft}
            </div>
            <div>
                <WeaponDetail />
            </div>
        </div>
    )
}

