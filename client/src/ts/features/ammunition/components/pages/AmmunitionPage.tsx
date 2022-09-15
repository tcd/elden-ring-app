import { ErPage } from "@app/features/common"
import { ErGrid } from "@app/features/er-grid"

import { AmmunitionDetail } from "../ammunition-detail/AmmunitionDetail"

export const AmmunitionPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="ammunition">
            <ErGrid
                column1={<span>TODO: ammo grid</span>}
                column2={<AmmunitionDetail />}
            />
        </ErPage>
    )
}
