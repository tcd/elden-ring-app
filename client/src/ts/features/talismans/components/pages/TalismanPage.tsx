import { ErPage } from "@app/features/common"
import { ErGrid } from "@app/features/er-grid"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"

export const TalismanPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="talisman">
            <ErGrid
                column1={<TalismanMenu />}
                column2={<TalismanDetail />}
            />
        </ErPage>
    )
}
