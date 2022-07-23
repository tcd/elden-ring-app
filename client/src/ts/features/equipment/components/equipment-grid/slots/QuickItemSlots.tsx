// import { useSelector, useDispatch } from "react-redux"

import { getImageSrcManual } from "@app/util"
// import { Weapon, WeaponSlotId } from "@app/types"
// import { BuilderActions, BuilderSelectors } from "@app/features"

const quickItemSlotSrc = getImageSrcManual("bad/equipment-slots/quick-items", "256")

export const QuickItemSlots = (): JSX.Element => {

    const quickItemSlot = (id: string) => {
        const key = `quick-item-slot-${id}`
        return (
            <li key={key} id={key} className="er__equipmentGrid__cell" >
                <img className="img-fluid" src={quickItemSlotSrc} alt="quick-item" />
            </li>
        )
    }

    const row1 = ["1", "2", "3", "4", "5"].map(id => quickItemSlot(id))
    const row2 = ["6", "7", "8", "9", "10"].map(id => quickItemSlot(id))

    return (
        <>
            <section className="er__equipmentGrid__row">
                {row1}
            </section>
            <section className="er__equipmentGrid__row">
                {row2}
            </section>
        </>
    )
}
