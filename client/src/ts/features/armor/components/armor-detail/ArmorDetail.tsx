import { useSelector } from "react-redux"

import { NO_ARMOR } from "@app/data"
import { getImageSrc, isBlank } from "@app/util"
import {
    ErCard,
    ErCardProps,
    StatRowColor,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/shared"
import { Selectors } from "@app/state"
import {
    ArmorDefenseStats,
    ArmorResistanceStats,
    EmptyArmorDetail,
} from "."

const cardProps: Partial<ErCardProps> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const ArmorDetail = (_props: unknown): JSX.Element => {

    const armor     = useSelector(Selectors.Armor.active)
    const _oldArmor = useSelector(Selectors.Armor.oldArmor)

    const oldArmor = _oldArmor ?? NO_ARMOR

    if (isBlank(armor)) {
        return <EmptyArmorDetail />
    }

    const imageSrc = getImageSrc("Armor", armor.name, "256")

    let weightColor: StatRowColor = "default"
    if (oldArmor.id != -1) {
        if      (armor.weight > oldArmor.weight) { weightColor = "red"  }
        else if (armor.weight < oldArmor.weight) { weightColor = "blue" }
    }

    const props: Partial<EquipmentDetailProps> = {
        title: armor.name,
        primaryImage: { src: imageSrc, alt: "armor" },
        includeSecondaryImage: false,
        includePassiveEffects: true,
        mainSectionRows: {
            row6: { type: "StatRow", props: { title: "Weight", value: armor.weight.toFixed(1), color: weightColor } },
        },
    }

    return (
        <EquipmentDetail {...props}>
            <section className="er__equipmentDetail__section">
                <ErCard title="Damage Negation" icon="DamageNegation" {...cardProps}>
                    <ul>
                        <ArmorDefenseStats
                            armor={armor}
                            oldArmor={oldArmor}
                        />
                    </ul>
                </ErCard>
                <ErCard title="Resistance" icon="Resistance" {...cardProps}>
                    <ul>
                        <ArmorResistanceStats
                            armor={armor}
                            oldArmor={oldArmor}
                        />
                    </ul>
                </ErCard>
            </section>
        </EquipmentDetail>
    )
}
