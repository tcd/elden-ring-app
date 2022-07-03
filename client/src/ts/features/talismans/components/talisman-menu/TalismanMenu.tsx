import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { TalismanDetail, TalismanMenuGrid } from "@app/features/talismans/components"

export const TalismanMenu = (): JSX.Element => {

    const talisman = useSelector(Selectors.Talismans.active)

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <TalismanMenuGrid />
            </div>
            <div>
                <TalismanDetail talisman={talisman} />
            </div>
        </div>
    )
}
