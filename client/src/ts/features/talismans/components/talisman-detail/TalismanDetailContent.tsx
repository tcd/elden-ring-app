import { SxProps } from "@mui/material"
import {
    mdiScript,
    mdiFileCode,
} from "@mdi/js"

import { Talisman } from "@app/types"
import { equipmentEffectDescription, getImageSrc, isBlank } from "@app/util"
import {
    ErCard2,
    ErCard2Props,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/shared"
import { EmptyTalismanDetail } from "."

export interface TalismanDetailContentProps {
    talisman: Talisman
}

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
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

    const props: Partial<EquipmentDetailProps> = {
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
            <section className="er__equipmentDetail__section">
                <ErCard2 title="Description" icon="ItemEffect" {...cardProps}>
                    <p>{talisman.description}</p>
                </ErCard2>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard2 title="Item Effect" icon='PassiveEffects' {...cardProps}>
                    <ul className="normal">
                        {effects}
                    </ul>
                </ErCard2>
            </section>
        </EquipmentDetail>
    )
}
