import {
    EquipmentDetail,
    EquipmentDetailFullCard,
    EquipmentDetailProps,
    NormalList,
} from "@app/features/common"

export const EmptyTalismanDetail = (_props: unknown): JSX.Element => {
    return (
        <EquipmentDetail {...props}>

            <EquipmentDetailFullCard title="Description" icon="ItemEffect">
                <p>-</p>
            </EquipmentDetailFullCard>

            <EquipmentDetailFullCard title="Item Effect" icon="PassiveEffects">
                <NormalList>
                </NormalList>
            </EquipmentDetailFullCard>

        </EquipmentDetail>
    )
}

// =============================================================================

const props: EquipmentDetailProps = {
    includePassiveEffects: false,
    mainSectionRows: {
        row6: { type: "StatRow", props: { title: "Weight", value: "-" } },
    },
}
