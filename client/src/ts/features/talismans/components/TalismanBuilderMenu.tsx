import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"

export const TalismanBuilderMenu = (): JSX.Element => {
    return (
        <div id="variable-menu">
            <TalismanMenu />
            <div>
                <TalismanDetail />
            </div>
        </div>
    )
}
