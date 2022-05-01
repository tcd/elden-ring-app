import { useSelector, useDispatch } from "react-redux"

import { Armor as IArmor, ArmorType } from "@types"
import { Actions, Selectors } from "@app/state"

const armorTypeCssClasses = {
    [ArmorType.Head]:  "equipment-slot-armor-head",
    [ArmorType.Chest]: "equipment-slot-armor-chest",
    [ArmorType.Arms]:  "equipment-slot-armor-arms",
    [ArmorType.Legs]:  "equipment-slot-armor-legs",
}

interface ArmorSlotProps {
    type: ArmorType
    armor?: IArmor
    handleClick: any
}

const ArmorSlot = ({ type, armor, handleClick }: ArmorSlotProps) => {
    const classNames = ["equipment-slot", armorTypeCssClasses[type]]
    let armorImage = null
    if (armor) {
        classNames.push("equipment-slot-filled")
        armorImage = <img className="img-fluid" src={armor.image_url} alt={armor.name} />
    }
    return (
        <li
            id={`armor-${type}`}
            className={classNames.join(" ")}
            key={`armor_slot_${type}`}
            onClick={() => handleClick(type)}
        >
            {armorImage}
        </li>
    )
}

export const Armor = (): JSX.Element => {

    const dispatch = useDispatch()

    const head  = useSelector(Selectors.Builder.armor.head)
    const chest = useSelector(Selectors.Builder.armor.chest)
    const arms  = useSelector(Selectors.Builder.armor.arms)
    const legs  = useSelector(Selectors.Builder.armor.legs)

    const handleClick = (armorType: ArmorType) => {
        dispatch(Actions.Builder.openArmorModal({ type: armorType }))
    }

    return (
        <>
            <section className="armor w-100">
                <ArmorSlot type={ArmorType.Head} armor={head} handleClick={handleClick} />
                <ArmorSlot type={ArmorType.Chest} armor={chest} handleClick={handleClick} />
                <ArmorSlot type={ArmorType.Arms} armor={arms} handleClick={handleClick} />
                <ArmorSlot type={ArmorType.Legs} armor={legs} handleClick={handleClick} />
            </section>
        </>
    )
}
