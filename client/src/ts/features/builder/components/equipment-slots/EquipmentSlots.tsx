import { ErCard } from "@app/shared"
import {
    ArmorSlots,
    // QuickItems,
    TalismanSlots,
    WeaponSlots,
} from "."

export const EquipmentSlots = (_props: unknown): JSX.Element => {
    return (
        <ErCard title="Equipment" icon="Equipment">
            <WeaponSlots />
            <ArmorSlots />
            <TalismanSlots />
            {/* <QuickItems /> */}
        </ErCard>
    )
}
