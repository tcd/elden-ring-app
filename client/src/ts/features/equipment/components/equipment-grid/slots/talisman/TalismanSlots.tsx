import { useSelector } from "react-redux"

import { TalismanSlotIds } from "@app/constants"
import { Selectors } from "@app/state"
import { TalismanSlotContent } from "./TalismanSlotContent"
import { EquipmentSlotPlaceholder } from "../EquipmentSlotPlaceholder"

export const TalismanSlots = (): JSX.Element => {

    const talismans = useSelector(Selectors.Talismans.array)

    const rows = talismans.map((talisman, index) => {
        const id = TalismanSlotIds[index + 1]
        const key = `talisman-slot-${id}`
        return <TalismanSlotContent key={key} id={id} talisman={talisman} />
    })

    return (
        <section className="er__equipmentGrid__row">
            {rows}
            <EquipmentSlotPlaceholder />
        </section>
    )
}
