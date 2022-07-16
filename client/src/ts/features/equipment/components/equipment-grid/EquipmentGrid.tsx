import { useDispatch } from "react-redux"

import {
    ArmorSlots,
    WeaponSlots,
    QuickItemSlots,
    TalismanSlots,
} from "./slots"

export const EquipmentGrid = (_props: unknown): JSX.Element => {

    // const dispatch = useDispatch()

    return (
        <div id="er__equipmentGrid">
            <WeaponSlots />
            <ArmorSlots />
            <TalismanSlots />
            {/* <QuickItemSlots /> */}
        </div>
    )
}
