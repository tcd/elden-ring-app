import { ArmorDetail, ArmorMenu } from "@app/features/armor/components"

export const ArmorBuilderMenu = (): JSX.Element => {
    return (
        <div id="variable-menu">
            <ArmorMenu />
            <div>
                <ArmorDetail />
            </div>
        </div>
    )
}

