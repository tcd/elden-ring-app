import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
// import { WeaponSlot } from "./WeaponSlot"
import { WeaponSlotContextMenu as WeaponSlot } from "./WeaponSlotContextMenu"

// =============================================================================
// All Together
// =============================================================================

export const WeaponSlots = (_props: unknown): JSX.Element => {

    const data = useSelector(Selectors.Weapons.equipmentSlotData)

    return (
        <>
            <section className="er__equipmentSlotsRow">
                <WeaponSlot slotId="R1" data={data.R1} />
                <WeaponSlot slotId="R2" data={data.R2} />
                <WeaponSlot slotId="R3" data={data.R3} />
                {/* { arrowSlot("A1") }
                { arrowSlot("A2") } */}
            </section>
            <section className="er__equipmentSlotsRow">
                <WeaponSlot slotId="L1" data={data.L1} />
                <WeaponSlot slotId="L2" data={data.L2} />
                <WeaponSlot slotId="L3" data={data.L3} />
                {/* { boltSlot("B1") }
                { boltSlot("B2") } */}
            </section>
        </>
    )
}
