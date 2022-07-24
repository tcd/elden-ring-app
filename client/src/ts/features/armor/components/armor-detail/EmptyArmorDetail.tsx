import {
    ErCard2,
    ErCard2Props,
    StatRow,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/shared"
import {
    ARMOR_DEFENSE_STATS,
    ARMOR_RESISTANCE_STATS,
} from "."

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const EmptyArmorDetail = (_props: unknown): JSX.Element => {

    const props: Partial<EquipmentDetailProps> = {
        includePassiveEffects: true,
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

    return (
        <EquipmentDetail {...props}>
            <section className="er__equipmentDetail__section">
                <ErCard2 title="Damage Negation" icon="DamageNegation" {...cardProps}>
                    <ul>
                        {defenseRows}
                    </ul>
                </ErCard2>
                <ErCard2 title="Resistance" icon="Resistance" {...cardProps}>
                    <ul>
                        {resistanceRows}
                    </ul>
                </ErCard2>
            </section>
        </EquipmentDetail>
    )
}
