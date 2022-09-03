import { ErPage } from "@app/shared"
import { TriPage } from "@app/features/common2"
import { WeaponDetail, WeaponMenu } from "@app/features/weapons/components"

export const WeaponsPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="weapon">
            <TriPage
                column1={<WeaponMenu />}
                column2={<WeaponDetail />}
            />
        </ErPage>
    )
}
