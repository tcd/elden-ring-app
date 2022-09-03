import { ErPage } from "@app/shared"
import { TriPage } from "@app/features/common2"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"

export const TalismanPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="talisman">
            <TriPage
                column1={<TalismanMenu />}
                column2={<TalismanDetail />}
            />
        </ErPage>
    )
}
