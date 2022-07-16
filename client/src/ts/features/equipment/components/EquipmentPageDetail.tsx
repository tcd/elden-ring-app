import { useSelector } from "react-redux"

import { Selectors } from "@app/state"

export const EquipmentPageDetail = (_props: unknown): JSX.Element => {

    const activeType = useSelector(Selectors.Equipment.activeType)

    return (
        <div id="er__equipmentPageDetail">
            {activeType}
        </div>
    )
}
