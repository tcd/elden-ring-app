import type { Talisman } from "@app/types"
import { equipmentEffectDescription, getImageSrc, isBlank } from "@app/util"
import {
    EquipmentDetail,
    EquipmentDetailProps,
    EquipmentDetailFullCard,
} from "@app/shared"

import { EmptyTalismanDetail } from "./EmptyTalismanDetail"

export interface TalismanDetailContentProps {
    talisman: Talisman
}

export const TalismanDetailContent = ({ talisman }: TalismanDetailContentProps): JSX.Element => {

    if (isBlank(talisman)) {
        return <EmptyTalismanDetail />
    }

    const imageSrc = getImageSrc("Talisman", talisman.name, "256")

    const effects = talisman.effects.map((effect, i) => {
        return (
            <li key={i}>{equipmentEffectDescription(effect)}</li>
        )
    })

    const props: EquipmentDetailProps = {
        title: talisman.name,
        includePassiveEffects: false,
        primaryImage: {
            src: imageSrc,
            alt: "Talisman",
        },
        mainSectionRows: {
            row6: { type: "StatRow", props: { title: "Weight", value: talisman.weight.toFixed(1) } },
        },
    }

    return (
        <EquipmentDetail {...props}>

            <EquipmentDetailFullCard title="Description" icon="ItemEffect">
                <p>{talisman.description}</p>
            </EquipmentDetailFullCard>

            <EquipmentDetailFullCard title="Item Effect" icon="PassiveEffects">
                <ul className="normal">
                    {effects}
                </ul>
            </EquipmentDetailFullCard>

        </EquipmentDetail>
    )
}
