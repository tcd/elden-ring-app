
import { ErPage } from "@app/shared"
import { ErGrid } from "@app/features/er-grid"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"

export const ArmorPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="armor">
            <ErGrid
                column1={<ArmorMenu />}
                column2={<ArmorDetail />}
            />
        </ErPage>
    )
}
