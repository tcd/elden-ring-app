import { useSelector } from "react-redux"

import { ArmorTypes } from "@app/types"
import { Selectors } from "@app/state"
import { ArmorSlotContent } from "./ArmorSlotContent"
import { EquipmentSlotPlaceholder } from "../EquipmentSlotPlaceholder"

export const ArmorSlots = (): JSX.Element => {

    const head  = useSelector(Selectors.Armor.equipped.head)
    const chest = useSelector(Selectors.Armor.equipped.chest)
    const arms  = useSelector(Selectors.Armor.equipped.arms)
    const legs  = useSelector(Selectors.Armor.equipped.legs)

    return (
        <>
            <ArmorSlotContent type={ArmorTypes.Head}  armor={head}  />
            <ArmorSlotContent type={ArmorTypes.Chest} armor={chest} />
            <ArmorSlotContent type={ArmorTypes.Arms}  armor={arms}  />
            <ArmorSlotContent type={ArmorTypes.Legs}  armor={legs}  />
            <EquipmentSlotPlaceholder />
        </>
    )
}
