import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { ArmorMenuGrid } from "@app/features/armor/components"

export const ArmorMenu = (_props: unknown): JSX.Element => {
    const activeType = useSelector(Selectors.Armor.activeType)

    if (isBlank(activeType)) {
        return null
    } else {
        return (
            <div className="er__equipmentMenu">
                <ArmorMenuGrid />
            </div>
        )
    }
}
