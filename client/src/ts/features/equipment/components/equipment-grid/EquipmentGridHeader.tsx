import { useDispatch, useSelector } from "react-redux"

import { ArmorSlots } from "./slots"
import { Actions, Selectors } from "@app/state"

export const EquipmentGridHeader = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    return (
        <div id="er__equipmentGrid">
            <ArmorSlots />
        </div>
    )
}
