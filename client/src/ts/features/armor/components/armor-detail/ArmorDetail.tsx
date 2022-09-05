import { useSelector } from "react-redux"

import { NO_ARMOR } from "@app/data"
import { getImageSrc, isBlank } from "@app/util"
import type { ComparisonColor } from "@app/types"
import {
    EquipmentDetail,
    EquipmentDetailProps,
    EquipmentDetailCard,
} from "@app/features/common"
import { Selectors } from "@app/state"

import {
    ArmorDefenseStats,
    ArmorResistanceStats,
    EmptyArmorDetail,
} from "."

export const ArmorDetail = (_props: unknown): JSX.Element => {

    const armor     = useSelector(Selectors.Armor.active)
    const _oldArmor = useSelector(Selectors.Armor.oldArmor)

    const oldArmor = _oldArmor ?? NO_ARMOR

    if (isBlank(armor)) {
        return <EmptyArmorDetail />
    }

    const imageSrc = getImageSrc("Armor", armor.name, "256")

    let weightColor: ComparisonColor = "default"
    if (oldArmor.id != -1) {
        if      (armor.weight > oldArmor.weight) { weightColor = "red"  }
        else if (armor.weight < oldArmor.weight) { weightColor = "blue" }
    }

    const props: EquipmentDetailProps = {
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

            <EquipmentDetailCard title="Damage Negation" icon="DamageNegation">
                <ul>
                    <ArmorDefenseStats
                        armor={armor}
                        oldArmor={oldArmor}
                    />
                </ul>
            </EquipmentDetailCard>

            <EquipmentDetailCard title="Resistance" icon="Resistance">
                <ul>
                    <ArmorResistanceStats
                        armor={armor}
                        oldArmor={oldArmor}
                    />
                </ul>
            </EquipmentDetailCard>

        </EquipmentDetail>
    )
}
