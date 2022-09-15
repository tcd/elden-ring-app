
import type { QuickItem } from "@app/types"
import { SpecialCharacters } from "@app/constants"
import {
    EquipmentDetail,
    EquipmentDetailProps,
    EquipmentDetailFullCard,
} from "@app/features/common"

import { AttributeScaling } from "./AttributeScaling"

export const QuickItemDetail = (_props: unknown): JSX.Element => {
    return (
        <EquipmentDetail {...props}>

            <EquipmentDetailFullCard title="Item Effect" icon="ItemEffect">
                <p>-</p>
            </EquipmentDetailFullCard>

            {/* <AttributeScaling /> */}

        </EquipmentDetail>
    )
}

// =============================================================================

const item: QuickItem = {
    id: -1,
    name: "-",
}

const props: EquipmentDetailProps = {
    title: item.name,
    includeSecondaryImage: false,
    includePassiveEffects: false,
    primaryImage: {
        src: null,
        alt: "quick item",
    },
    mainSectionRows: {
        row1: { type: "StatRow", props: { title: "-", value: null } },
        // row2: { type: "StatRow", props: { title: ammo?.physical_damage_types?.join("/"), value: null } },
        row3: { type: "StatRowPlus", props: {
            title: "No. Held",
            value_1: SpecialCharacters.infinity,
            value_2: SpecialCharacters.infinity,
            divider: "/",
        } },
        row4: { type: "StatRowPlus", props: {
            title: "Stored",
            value_1: SpecialCharacters.infinity,
            value_2: SpecialCharacters.infinity,
            divider: "/",
        } },
        row5: { type: "StatRow", props: { title: "HP Cost", value: "-" } },
        row6: { type: "StatRow", props: { title: "FP Cost", value: "-" } },
    },
}
