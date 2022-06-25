import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { ArmorDetail, ArmorMenuGrid } from "@app/features/armor/components"

export const ArmorMenu = (_props: unknown): JSX.Element => {

    const activeArmor = useSelector(Selectors.Armor.active)

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <ArmorMenuGrid />
            </div>
            <div>
                <ArmorDetail armor={activeArmor} />
            </div>
        </div>
    )
}
