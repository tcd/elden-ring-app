import { capitalize } from "lodash"

import { Dmg, QuickItem } from "@app/types"
import { SpecialCharacters } from "@app/util"
import {
    ErCard2,
    ErCard2Props,
    StatRow,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/shared"

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const QuickItemDetail = (_props: unknown): JSX.Element => {

    const item: QuickItem = {
        id: -1,
        name: "-",
    }

    const props: Partial<EquipmentDetailProps> = {
        title: item.name,
        includeSecondaryImage: false,
        includePassiveEffects: true,
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

    return (
        <EquipmentDetail {...props}>
        </EquipmentDetail>
    )
}

