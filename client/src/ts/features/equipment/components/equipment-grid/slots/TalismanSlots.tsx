import { useSelector } from "react-redux"

import { TalismanSlotIds } from "@app/types"
import { Selectors } from "@app/state"
import { TalismanSlotContent } from "./TalismanSlotContent"

export const TalismanSlots = (): JSX.Element => {

    const talismans = useSelector(Selectors.Talismans.array)

    const rows = talismans.map((talisman, index) => {
        const id = TalismanSlotIds[index]
        const key = `talisman-slot-${id}`
        return <TalismanSlotContent key={key} id={id} talisman={talisman} />
    })

    return (
        <section className="er__equipmentSlotsRow">
            {rows}
        </section>
    )
}
