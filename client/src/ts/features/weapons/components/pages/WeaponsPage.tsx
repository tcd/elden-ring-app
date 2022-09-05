import { ErPage } from "@app/shared"
import { ErGrid } from "@app/features/er-grid"
import { WeaponDetail, WeaponMenu } from "@app/features/weapons/components"

export const WeaponsPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="weapon">
            <ErGrid
                column1={<WeaponMenu />}
                column2={<WeaponDetail />}
            />
        </ErPage>
    )
}
