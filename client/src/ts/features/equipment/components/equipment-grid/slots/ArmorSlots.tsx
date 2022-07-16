import { useSelector } from "react-redux"

import { ArmorType } from "@app/types"
import { Selectors } from "@app/state"
import { ArmorSlotContent } from "./ArmorSlotContent"

export const ArmorSlots = (): JSX.Element => {

    const head  = useSelector(Selectors.Armor.equipped.head)
    const chest = useSelector(Selectors.Armor.equipped.chest)
    const arms  = useSelector(Selectors.Armor.equipped.arms)
    const legs  = useSelector(Selectors.Armor.equipped.legs)

    return (
        <section className="er__equipmentGrid__row">
            <ArmorSlotContent type={ArmorType.Head}  armor={head}  />
            <ArmorSlotContent type={ArmorType.Chest} armor={chest} />
            <ArmorSlotContent type={ArmorType.Arms}  armor={arms}  />
            <ArmorSlotContent type={ArmorType.Legs}  armor={legs}  />
        </section>
    )
}
