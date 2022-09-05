import { ErPage, YouDied } from "@app/features/common"

export const NotFoundPage = (_props: unknown): JSX.Element => {
    return (
        <ErPage pageName="not-found">
            <YouDied
                to="/"
                title="404 - Not Found"
            />
        </ErPage>
    )
}
