import { useSelector } from "react-redux"

import { ArmorTypes } from "@app/constants"
import { Selectors } from "@app/state"
import { ArmorSlot } from "./ArmorSlot"

export const ArmorSlots = (): JSX.Element => {

    const head  = useSelector(Selectors.Armor.equipped.head)
    const chest = useSelector(Selectors.Armor.equipped.chest)
    const arms  = useSelector(Selectors.Armor.equipped.arms)
    const legs  = useSelector(Selectors.Armor.equipped.legs)

    return (
        <>
            <section className="er__equipmentSlotsRow">
                <ArmorSlot type={ArmorTypes.Head}  armor={head}  />
                <ArmorSlot type={ArmorTypes.Chest} armor={chest} />
                <ArmorSlot type={ArmorTypes.Arms}  armor={arms}  />
                <ArmorSlot type={ArmorTypes.Legs}  armor={legs}  />
            </section>
        </>
    )
}
