import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { WeaponDetail, WeaponMenuGrid } from "@app/features/weapons/components"

export const WeaponMenu = (): JSX.Element => {

    const weapon    = useSelector(Selectors.Weapons.active.weapon)
    const oldWeapon = useSelector(Selectors.Weapons.old.weapon)
    const newStats  = useSelector(Selectors.Weapons.active.calculatedStats)
    const oldStats  = useSelector(Selectors.Weapons.old.stats)

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <WeaponMenuGrid />
            </div>
            <div>
                <WeaponDetail
                    weapon={weapon}
                    oldWeapon={oldWeapon}
                    newStats={newStats}
                    oldStats={oldStats}
                />
            </div>
        </div>
    )
}

