import { QuickItemSlotContent } from "./QuickItemSlotContent"

export const QuickItemSlots = (_props: unknown): JSX.Element => {

    const quickItemSlot = (id: string) => {
        const key = `quick-item-slot-${id}`
        return (
            <QuickItemSlotContent key={key} id={id} item={null} />
        )
    }

    const row1 = ["1", "2", "3", "4", "5"].map(id => quickItemSlot(id))
    const row2 = ["6", "7", "8", "9", "10"].map(id => quickItemSlot(id))

    return (
        <>
            {row1}
            {row2}
        </>
    )
}
