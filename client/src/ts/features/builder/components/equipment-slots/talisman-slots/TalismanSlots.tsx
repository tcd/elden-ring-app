import { useSelector } from "react-redux"

import { TalismanSlotIds } from "@app/types"
import { Selectors } from "@app/state"
import { TalismanSlot } from "./TalismanSlot"

export const TalismanSlots = (): JSX.Element => {

    const talismans = useSelector(Selectors.Talismans.array)

    const rows = talismans.map((talisman, index) => {
        const id = TalismanSlotIds[index]
        return <TalismanSlot key={`talisman_${id}`} id={id} talisman={talisman} />
    })

    return (
        <section className="talismans w-100">
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
