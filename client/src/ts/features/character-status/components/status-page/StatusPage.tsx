import { ErPage } from "@app/features/common"

import { StatusPageContent } from "./StatusPageContent"

export const StatusPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="status">
            <StatusPageContent />
        </ErPage>
    )
}
