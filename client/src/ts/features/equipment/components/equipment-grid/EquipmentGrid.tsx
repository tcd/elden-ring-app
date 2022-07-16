import { useDispatch, useSelector } from "react-redux"


import {
    ArmorSlots,
    WeaponSlots,
    QuickItemSlots,
    TalismanSlots,
} from "./slots"
import { Actions, Selectors } from "@app/state"

export const EquipmentGrid = (_props: unknown): JSX.Element => {

    // const dispatch = useDispatch()

    const title = useSelector(Selectors.Equipment.gridTitle)
    const description = useSelector(Selectors.Equipment.gridDescription)

    return (
        <div id="er__equipmentGrid">
            <header className="er__equipmentGrid__header">
                <span className="er__equipmentGrid__headerTitle er__title">{title}</span>
                <span className="er__equipmentGrid__headerDescription">{description}</span>
            </header>
            <section className="er__equipmentGrid__grid">
                <WeaponSlots />
                <ArmorSlots />
                <TalismanSlots />
                <QuickItemSlots />
            </section>
        </div>
    )
}
