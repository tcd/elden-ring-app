import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { EquipmentSlotImageUrls } from "@app/util"
import { WeaponSlot } from "./WeaponSlot"

// =============================================================================
// Ammunition
// =============================================================================

const arrowSlot = (id: string) => {
    const imagePath = EquipmentSlotImageUrls.Arrow
    return (
        <li id={`weapon-${id}`} className="equipment-slot" key={`weapon_slot_${id}`}>
            <img className="img-fluid" src={imagePath} alt="arrows" />
        </li>
    )
}

const boltSlot = (id: string) => {
    const imagePath = EquipmentSlotImageUrls.Bolt
    return (
        <li id={`weapon-${id}`} className="equipment-slot" key={`weapon_slot_${id}`}>
            <img className="img-fluid" src={imagePath} alt="bolts" />
        </li>
    )
}

// =============================================================================
// All Together
// =============================================================================

export const WeaponSlots = (_props: unknown): JSX.Element => {

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
                {/* { arrowSlot("A1") }
                { arrowSlot("A2") } */}
            </section>
            <section className="armaments">
                <WeaponSlot slotId="L1" weapon={L1} />
                <WeaponSlot slotId="L2" weapon={L2} />
                <WeaponSlot slotId="L3" weapon={L3} />
                {/* { boltSlot("B1") }
                { boltSlot("B2") } */}
            </section>
        </>
    )
}
