import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { TalismanDetail, TalismanMenu } from "@app/features/talismans/components"

export const TalismanBuilderMenu = (): JSX.Element => {

    const talisman = useSelector(Selectors.Talismans.active)

    return (
        <div id="variable-menu">
            <TalismanMenu />
            <div>
                <TalismanDetail talisman={talisman} />
            </div>
        </div>
    )
}
