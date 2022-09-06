import { useSelector } from "react-redux"

import { TalismanSlotIds } from "@app/constants"
import { Selectors } from "@app/state"

import { TalismanSlot } from "./TalismanSlot"

export const TalismanSlots = (_props: unknown): JSX.Element => {

    const talismans = useSelector(Selectors.Talismans.array)

    const rows = talismans.map((talisman, index) => {
        const id = TalismanSlotIds[index + 1]
        return <TalismanSlot key={`talisman-slot-${id}`} id={id} talisman={talisman} />
    })

    return (
        <section className="er__equipmentSlotsRow">
            {rows}
        </section>
    )

    // const effectElements = () => {
    //     const elements = []
    //     talismans.map((talisman, i) => {
    //         if (talisman != null) {
    //             elements.push(
    //                 <li key={`talisman_${i + 1}_effect`}>
    //                     <span>{talisman?.description}</span>
    //                 </li>,
    //             )
    //         }
    //     })
    //     return elements
    // }

    // return (
    //     <>
    //         <section className="talismans w-100">
    //             {/* <ul className="d-flex flex-row"> */}
    //                 {rows}
    //             {/* </ul> */}
    //         </section>
    //         {/* <section className="talismans w-100">
    //             <ul>
    //                 {effectElements()}
    //             </ul>
    //         </section> */}
    //     </>
    // )
}
