
import { ErPage } from "@app/shared"
import { TriPage } from "@app/features/common2"
import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"

export const ArmorPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="armor">
            <TriPage
                column1={<ArmorMenu />}
                column2={<ArmorDetail />}
            />
        </ErPage>
    )
}
