import { Page } from "@app/shared"
import { StatusPageContent } from "./StatusPageContent"

export const StatusPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="status">
            <StatusPageContent />
        </Page>
    )
}
