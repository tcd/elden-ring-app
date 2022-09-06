import type { QuickItemSlotId } from "@app/types"

import { QuickItemSlotContent } from "./QuickItemSlotContent"

export const QuickItemSlots = (_props: unknown): JSX.Element => {

    const quickItemSlot = (id: QuickItemSlotId) => {
        const key = `quick-item-slot-${id}`
        return (
            <QuickItemSlotContent key={key} id={id} item={null} />
        )
    }

    const row1 = ["Q1", "Q2", "Q3", "Q4", "Q5"].map(id => quickItemSlot(id))
    const row2 = ["Q6", "Q7", "Q8", "Q9", "Q10"].map(id => quickItemSlot(id))

    return (
        <>
            {row1}
            {row2}
        </>
    )
}
