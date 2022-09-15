import type { QuickItemSlotId } from "@app/types"

import { QuickItemSlotContent } from "./QuickItemSlotContent"

const row1Ids: QuickItemSlotId[] = ["Q1", "Q2", "Q3", "Q4", "Q5"]
const row2Ids: QuickItemSlotId[] = ["Q6", "Q7", "Q8", "Q9", "Q10"]

export const QuickItemSlots = (_props: unknown): JSX.Element => {

    const quickItemSlot = (id: QuickItemSlotId) => {
        const key = `quick-item-slot-${id}`
        return (
            <QuickItemSlotContent key={key} id={id} item={null} />
        )
    }

    const row1 = row1Ids.map(id => quickItemSlot(id))
    const row2 = row2Ids.map(id => quickItemSlot(id))

    return (
        <>
            {row1}
            {row2}
        </>
    )
}
