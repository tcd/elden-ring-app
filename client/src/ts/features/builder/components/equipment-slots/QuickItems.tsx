// import { useSelector, useDispatch } from "react-redux"

import { getImageSrcManual } from "@app/util"
// import { Weapon, WeaponSlotId } from "@app/types"
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

const quickItemSlotSrc = getImageSrcManual("bad/equipment-slots/quick-items", "256")

export const QuickItems = (): JSX.Element => {

    const quickItemSlot = (id: string) => {
        const key = `quick-item-slot-${id}`
        return (
            <li key={key} id={key} className="er__equipmentSlot" >
                <img className="img-fluid" src={quickItemSlotSrc} alt="quick-item" />
            </li>
        )
    }

    const row1 = ["1", "2", "3", "4", "5"].map(id => quickItemSlot(id))
    const row2 = ["6", "7", "8", "9", "10"].map(id => quickItemSlot(id))

    return (
        <>
            <section className="w-100">
                { row1 }
            </section>
            <section className="w-100">
                { row2 }
            </section>
        </>
    )
}
