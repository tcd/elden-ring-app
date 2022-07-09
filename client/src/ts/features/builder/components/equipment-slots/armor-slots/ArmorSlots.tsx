import { useSelector } from "react-redux"

import { ArmorType } from "@app/types"
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
                <ArmorSlot type={ArmorType.Head}  armor={head}  />
                <ArmorSlot type={ArmorType.Chest} armor={chest} />
                <ArmorSlot type={ArmorType.Arms}  armor={arms}  />
                <ArmorSlot type={ArmorType.Legs}  armor={legs}  />
            </section>
        </>
    )
}
