import { Page, YouDied } from "@app/shared"

export const NotFoundPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="not-found">
            <YouDied
                to="/"
                title="404 - Not Found"
            />
        </Page>
    )
}
