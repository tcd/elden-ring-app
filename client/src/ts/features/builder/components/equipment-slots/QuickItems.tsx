// import { useSelector, useDispatch } from "react-redux"

// import { Weapon, WeaponSlotId } from "@types"
// import { BuilderActions, BuilderSelectors } from "@app/features"

const _QUICK_ITEM_SLOTS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
]

export const QuickItems = (): JSX.Element => {

    const quickItemSlot = (id: string) => {
        const imagePath = `/public/images/menu/quick-items.png`
        return (
            <li id={`quick-item-${id}`} className="equipment-slot" key={`quick_item_slot_${id}`}>
                <img className="img-fluid" src={imagePath} alt="quick-item" />
            </li>
        )
    }

    const row1 = ["1", "2", "3", "4", "5"].map(id => quickItemSlot(id))
    const row2 = ["6", "7", "8", "9", "10"].map(id => quickItemSlot(id))

    return (
        <>
            <section className="quick-items w-100">
                { row1 }
            </section>
            <section className="quick-items w-100">
                { row2 }
            </section>
        </>
    )
}
