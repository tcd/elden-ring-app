import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { WeaponSlotContent as WeaponSlot } from "./WeaponSlotContent"
import { ArrowSlot, BoltSlot } from "./AmmunitionSlots"

export const WeaponSlots = (_props: unknown): JSX.Element => {

    const data = useSelector(Selectors.Weapons.equipmentSlotData)

    return (
        <>
            <section className="er__equipmentGrid__row">
                <WeaponSlot slotId="R1" data={data.R1} />
                <WeaponSlot slotId="R2" data={data.R2} />
                <WeaponSlot slotId="R3" data={data.R3} />
                <ArrowSlot id="A1" />
                <ArrowSlot id="A2" />
            </section>
            <section className="er__equipmentGrid__row">
                <WeaponSlot slotId="L1" data={data.L1} />
                <WeaponSlot slotId="L2" data={data.L2} />
                <WeaponSlot slotId="L3" data={data.L3} />
                <BoltSlot id="B1" />
                <BoltSlot id="B2" />
            </section>
        </>
    )
}
