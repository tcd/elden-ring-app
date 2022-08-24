import { ErCard2 } from "@app/shared"
import {
    ArmorSlots,
    // QuickItems,
    TalismanSlots,
    WeaponSlots,
} from "."

export const EquipmentSlots = (_props: unknown): JSX.Element => {
    return (
        <ErCard2 title="Equipment" icon="Equipment">
            <WeaponSlots />
            <ArmorSlots />
            <TalismanSlots />
            {/* <QuickItems /> */}
        </ErCard2>
    )
}
