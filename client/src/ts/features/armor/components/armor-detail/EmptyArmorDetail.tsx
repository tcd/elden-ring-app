import {
    StatRow,
    EquipmentDetail,
    EquipmentDetailProps,
    EquipmentDetailCard,
} from "@app/features/common"

import {
    ARMOR_DEFENSE_STATS,
    ARMOR_RESISTANCE_STATS,
} from "."

export const EmptyArmorDetail = (_props: unknown): JSX.Element => {
    return (
        <EquipmentDetail {...props}>

            <EquipmentDetailCard title="Damage Negation" icon="DamageNegation">
                <ul>
                    {defenseRows}
                </ul>
            </EquipmentDetailCard>

            <EquipmentDetailCard title="Resistance" icon="Resistance">
                <ul>
                    {resistanceRows}
                </ul>
            </EquipmentDetailCard>

        </EquipmentDetail>
    )
}

// =============================================================================

const props: EquipmentDetailProps = {
    includePassiveEffects: true,
    primaryImage: {},
    mainSectionRows: {
        row6: { type: "StatRow", props: { title: "Weight", value: "-" } },
    },
}

const defenseRows = ARMOR_DEFENSE_STATS.map(({ title }) => {
    return (<StatRow key={title} title={title} value="-" />)
})

const resistanceRows = ARMOR_RESISTANCE_STATS.map(({ title }) => {
    return (<StatRow key={title} title={title} value="-" />)
})
