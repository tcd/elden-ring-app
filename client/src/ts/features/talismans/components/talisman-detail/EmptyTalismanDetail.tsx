import {
    EquipmentDetail,
    EquipmentDetailProps,
    ErCard,
    ErCardProps,
} from "@app/shared"

const cardProps: Partial<ErCardProps> = {
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
            <section className="er__equipmentDetail__section">
                <ErCard title="Description" icon="ItemEffect" {...cardProps}>
                    <p>-</p>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Item Effect" icon="PassiveEffects" {...cardProps}>
                    <ul className="normal">
                    </ul>
                </ErCard>
            </section>
        </EquipmentDetail>
    )
}
