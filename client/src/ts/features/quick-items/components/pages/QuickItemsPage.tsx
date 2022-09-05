import { ErPage } from "@app/features/common"
import { ErGrid } from "@app/features/er-grid"

import { QuickItemDetail } from "../quick-item-detail"

export const QuickItemsPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="quick-items">
            <ErGrid
                column1={<span>TODO: quick items page</span>}
                column2={<QuickItemDetail />}
            />
        </ErPage>
    )
}
