import { ErCard } from "@app/features/common"
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
