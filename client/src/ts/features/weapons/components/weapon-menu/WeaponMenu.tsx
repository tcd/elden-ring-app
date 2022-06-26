import { WeaponDetail, WeaponMenuGrid } from "@app/features/weapons/components"

export const WeaponMenu = (): JSX.Element => {
    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <WeaponMenuGrid />
            </div>
            <div>
                <WeaponDetail />
            </div>
        </div>
    )
}

