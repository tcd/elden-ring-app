import { mdiShieldSwordOutline } from "@mdi/js"

import { ErCard } from "@app/shared"
import {
    ArmorSlots,
    // QuickItems,
    TalismanSlots,
    WeaponSlots,
} from "."

export const EquipmentSlots = (): JSX.Element => {
    return (
        <ErCard title="Equipment" iconPath={mdiShieldSwordOutline}>
            <br/>
            <WeaponSlots />
            <ArmorSlots />
            <TalismanSlots />
            {/* <QuickItems /> */}
        </ErCard>
    )
}
