import capitalize from "lodash/capitalize"

import { Dmg } from "@app/types"
import {
    ErCard,
    ErCardProps,
    StatRow,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/features/common"

const cardProps: Partial<ErCardProps> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const EmptyAmmunitionDetail = (_props: unknown): JSX.Element => {

    const attackRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    const props: EquipmentDetailProps = {
        includeSecondaryImage: false,
        includePassiveEffects: true,
        primaryImage: {
            src: null,
            alt: "ammunition",
        },
        mainSectionRows: {
            row1: { type: "StatRow", props: { title: "-", value: null } },
            row2: { type: "StatRow", props: { title: "-", value: null } },
            row3: { type: "StatRowPlus", props: {
                title: "No. Held",
                value_1: "-",
                value_2: "-",
                divider: "/",
            } },
            row4: { type: "StatRowPlus", props: {
                title: "Stored",
                value_1: "-",
                value_2: "-",
                divider: "/",
            } },
        },
    }

    return (
        <EquipmentDetail {...props}>
            <section className="er__equipmentDetail__section">
                <ErCard title="Attack Power" icon="AttackPower" {...cardProps}>
                    <ul>
                        {attackRows}
                    </ul>
                </ErCard>
            </section>
        </EquipmentDetail>
    )
}
