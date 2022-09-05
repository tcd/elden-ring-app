import { ErPage } from "@app/shared"
import { ErGrid } from "@app/features/er-grid"
import { WeaponDetail, WeaponSkillMenu } from "@app/features/weapons/components"

// FIXME: this doesn't need to be a different page.
export const AshesOfWarPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="ashes-of-war">
            <ErGrid
                column1={<WeaponSkillMenu />}
                column2={<WeaponDetail />}
            />
        </ErPage>
    )
}
