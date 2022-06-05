import { useSelector, useDispatch } from "react-redux"

import { Weapon, WeaponSlotId, weaponSlotIdName } from "@app/types"
import { MouseOverPopover } from "@app/shared"
import { Actions, Selectors } from "@app/state"

// =============================================================================
// Ammunition
// =============================================================================

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

// =============================================================================
// WeaponSlot
// =============================================================================

export interface WeaponSlotProps {
    slotId: WeaponSlotId
    weapon?: Weapon
}

export const WeaponSlot = (props: WeaponSlotProps): JSX.Element => {

    const dispatch = useDispatch()

    const slotId = props.slotId
    const weapon = props?.weapon

    const handleClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        // dispatch(Actions.Builder.set({ number }))
        dispatch(Actions.Builder.openWeaponModal({ id: slotId }))
    }

    const elementId = `weapon-slot-${slotId}`
    const classNames = ["equipment-slot"]
    let weaponImageElement: JSX.Element = null
    let titleString: string


    if (slotId.startsWith("L")) {
        classNames.push("equipment-slot-weapon-left")
    } else {
        classNames.push("equipment-slot-weapon-right")
    }

    if (weapon) {
        classNames.push("equipment-slot-filled")
        titleString = weapon.name
        weaponImageElement = (
            <img
                className="img-fluid"
                src={weapon.image_url}
                alt={`${weapon.name} image`}
            />
        )
    } else {
        titleString = weaponSlotIdName(slotId)
    }

    return (
        <MouseOverPopover id={elementId} popoverContent={titleString}>
            <li
                key={elementId}
                id={elementId}
                className={classNames.join(" ")}
                onClick={handleClick}
            >
                {weaponImageElement && weaponImageElement}
            </li>
        </MouseOverPopover>
    )
}

// =============================================================================
// All Together
// =============================================================================

export const Weapons = (_props: unknown): JSX.Element => {

    const R1 = useSelector(Selectors.Weapons.bySlot.R1)
    const R2 = useSelector(Selectors.Weapons.bySlot.R2)
    const R3 = useSelector(Selectors.Weapons.bySlot.R3)
    const L1 = useSelector(Selectors.Weapons.bySlot.L1)
    const L2 = useSelector(Selectors.Weapons.bySlot.L2)
    const L3 = useSelector(Selectors.Weapons.bySlot.L3)

    return (
        <>
            <section className="armaments">
                <WeaponSlot slotId="R1" weapon={R1} />
                <WeaponSlot slotId="R2" weapon={R2} />
                <WeaponSlot slotId="R3" weapon={R3} />
                { arrowSlot("A1") }
                { arrowSlot("A2") }
            </section>
            <section className="armaments">
                <WeaponSlot slotId="L1" weapon={L1} />
                <WeaponSlot slotId="L2" weapon={L2} />
                <WeaponSlot slotId="L3" weapon={L3} />
                { boltSlot("B1") }
                { boltSlot("B2") }
            </section>
        </>
    )
}
