import { useSelector, useDispatch } from "react-redux"

import { Weapon, WeaponSlotId } from "@types"
import { Actions, Selectors } from "@app/state"

export const Weapons = (): JSX.Element => {

    const dispatch = useDispatch()

    const R1 = useSelector(Selectors.Builder.weapons.bySlot.R1)
    const R2 = useSelector(Selectors.Builder.weapons.bySlot.R2)
    const R3 = useSelector(Selectors.Builder.weapons.bySlot.R3)
    const L1 = useSelector(Selectors.Builder.weapons.bySlot.L1)
    const L2 = useSelector(Selectors.Builder.weapons.bySlot.L2)
    const L3 = useSelector(Selectors.Builder.weapons.bySlot.L3)

    const handleClick = (id: WeaponSlotId) => {
        // dispatch(Actions.Builder.set({ number }))
        dispatch(Actions.Builder.openWeaponModal({ id }))
    }

    const slotWithWeapon = (id: WeaponSlotId, weapon?: Weapon) => {
        const classNames = ["equipment-slot", "equipment-slot-filled"]
        if (id.startsWith("L")) {
            classNames.push("equipment-slot-weapon-left")
        } else {
            classNames.push("equipment-slot-weapon-right")
        }
        return (
            <li
                key={`weapon_slot_${id}`}
                id={`weapon-${id}`}
                className={classNames.join(" ")}
                onClick={() => handleClick(id)}
            >
                {/* <span>{weapon.Name}</span> */}
                <img className="img-fluid" src={weapon.image_url} alt="weapon" />
            </li>
        )
    }

    const slotWithoutWeapon = (id: WeaponSlotId, weapon?: Weapon) => {
        const classNames = ["equipment-slot"]
        if (id.startsWith("L")) {
            classNames.push("equipment-slot-weapon-left")
        } else {
            classNames.push("equipment-slot-weapon-right")
        }
        const titleString = `${id}`
        return (
            <li
                id={`weapon-${id}`}
                className={classNames.join(" ")}
                title={titleString}
                key={`weapon_slot_${id}`}
                onClick={() => handleClick(id)}
            ></li>
        )
    }

    const arrowSlot = (id: string) => {
        const imagePath = `/public/images/menu/weapon-slot-arrows.png`
        return (
            <li id={`weapon-${id}`} className="equipment-slot" key={`weapon_slot_${id}`}>
                <img className="img-fluid" src={imagePath} alt="arrows" />
            </li>
        )
    }

    const boltSlot = (id: string) => {
        const imagePath = `/public/images/menu/weapon-slot-bolts.png`
        return (
            <li id={`weapon-${id}`} className="equipment-slot" key={`weapon_slot_${id}`}>
                <img className="img-fluid" src={imagePath} alt="bolts" />
            </li>
        )
    }

    return (
        <>
            <section className="armaments">
                { R1 ? slotWithWeapon("R1", R1) : slotWithoutWeapon("R1", R1) }
                { R2 ? slotWithWeapon("R2", R2) : slotWithoutWeapon("R2", R2) }
                { R3 ? slotWithWeapon("R3", R3) : slotWithoutWeapon("R3", R3) }
                { arrowSlot("A1") }
                { arrowSlot("A2") }
            </section>
            <section className="armaments">
                { L1 ? slotWithWeapon("L1", L1) : slotWithoutWeapon("L1", L1) }
                { L2 ? slotWithWeapon("L2", L2) : slotWithoutWeapon("L2", L2) }
                { L3 ? slotWithWeapon("L3", L3) : slotWithoutWeapon("L3", L3) }
                { boltSlot("B1") }
                { boltSlot("B2") }
            </section>
        </>
    )
}
