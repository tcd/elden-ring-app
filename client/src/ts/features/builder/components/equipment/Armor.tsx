import { useSelector, useDispatch } from "react-redux"

import { Armor as IArmor, ArmorType } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { MouseOverPopover } from "@app/shared"
import { getImageSrc } from "@app/util"

const armorTypeCssClasses = {
    [ArmorType.Head]:  "equipment-slot-armor-head",
    [ArmorType.Chest]: "equipment-slot-armor-chest",
    [ArmorType.Arms]:  "equipment-slot-armor-arms",
    [ArmorType.Legs]:  "equipment-slot-armor-legs",
}

export interface ArmorSlotProps {
    type: ArmorType
    armor?: IArmor
}

export const ArmorSlot = ({ type, armor }: ArmorSlotProps) => {

    const dispatch = useDispatch()

    const elementId = `armor-slot-${type}`
    const classNames = ["equipment-slot", armorTypeCssClasses[type]]
    let titleString = type.toString()
    let armorImage = null
    if (armor) {
        titleString = armor.name
        classNames.push("equipment-slot-filled")
        const src = getImageSrc("Armor", armor.name, "256")
        armorImage = <img className="img-fluid" src={src} alt={armor.name} />
    }

    const handleClick = () => {
        dispatch(Actions.Armor.openArmorMenu({ type: type }))
    }

    return (
        <MouseOverPopover id={elementId} popoverContent={titleString}>
            <li
                id={elementId}
                key={elementId}
                className={classNames.join(" ")}
                onClick={handleClick}
            >
                {armorImage}
            </li>
        </MouseOverPopover>
    )
}

export const Armor = (): JSX.Element => {

    const dispatch = useDispatch()

    const head  = useSelector(Selectors.Armor.equipped.head)
    const chest = useSelector(Selectors.Armor.equipped.chest)
    const arms  = useSelector(Selectors.Armor.equipped.arms)
    const legs  = useSelector(Selectors.Armor.equipped.legs)

    const handleClick = (armorType: ArmorType) => {
        dispatch(Actions.Armor.openArmorMenu({ type: armorType }))
    }

    return (
        <>
            <section className="armor w-100">
                <ArmorSlot type={ArmorType.Head}  armor={head}  />
                <ArmorSlot type={ArmorType.Chest} armor={chest} />
                <ArmorSlot type={ArmorType.Arms}  armor={arms}  />
                <ArmorSlot type={ArmorType.Legs}  armor={legs}  />
            </section>
        </>
    )
}
