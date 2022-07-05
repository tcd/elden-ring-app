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

    const data = useSelector(Selectors.Weapons.equipmentSlotData)

    return (
        <>
            <section className="armaments">
                <WeaponSlot slotId="R1" data={data.R1} />
                <WeaponSlot slotId="R2" data={data.R2} />
                <WeaponSlot slotId="R3" data={data.R3} />
                {/* { arrowSlot("A1") }
                { arrowSlot("A2") } */}
            </section>
            <section className="armaments">
                <WeaponSlot slotId="L1" data={data.L1} />
                <WeaponSlot slotId="L2" data={data.L2} />
                <WeaponSlot slotId="L3" data={data.L3} />
                {/* { boltSlot("B1") }
                { boltSlot("B2") } */}
            </section>
        </>
    )
}
