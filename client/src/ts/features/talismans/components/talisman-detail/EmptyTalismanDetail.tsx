import {
    EquipmentDetail,
    EquipmentDetailProps,
    ErCard2,
    ErCard2Props,
} from "@app/shared"

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const EmptyTalismanDetail = (_props: unknown): JSX.Element => {

    const props: Partial<EquipmentDetailProps> = {
        includePassiveEffects: true,
        mainSectionRows: {
            row6: { type: "StatRow", props: { title: "Weight", value: "-" } },
        },
    }

    return (
        <EquipmentDetail {...props}>
            <section className="er__equipmentDetail2__section">
                <ErCard2 title="Description" icon="ItemEffect" {...cardProps}>
                    <p>-</p>
                </ErCard2>
            </section>
            <section className="er__equipmentDetail2__section">
                <ErCard2 title="Item Effect" icon="PassiveEffects" {...cardProps}>
                    <ul className="normal">
                    </ul>
                </ErCard2>
            </section>
        </EquipmentDetail>
    )
}
