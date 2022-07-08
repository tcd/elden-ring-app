import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { WeaponDetail, WeaponMenuGrid, WeaponSkillMenuGrid } from "@app/features/weapons/components"

export const WeaponMenu = (): JSX.Element => {

    const customizing = useSelector(Selectors.Weapons.smithing.areWeSmithing)

    const farLeft = customizing ? <WeaponSkillMenuGrid /> : <WeaponMenuGrid />

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

