import { useSelector } from "react-redux"
import {
    mdiShield,
    mdiShieldOutline,
    mdiTshirtCrew,
    mdiTshirtCrewOutline,
} from "@mdi/js"

import { NO_ARMOR } from "@app/data"
import { getImageSrc, isBlank } from "@app/util"
import {
    ErCard,
    StatRow,
    StatRowColor,
} from "@app/shared"
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

    let weightColor: StatRowColor = "default"
    if      (armor.weight > oldArmor.weight) { weightColor = "red" }
    else if (armor.weight < oldArmor.weight) { weightColor = "blue" }

    return (
        <div className="er__equipmentDetail">
            <section className="er__equipmentDetail__section">
                <ErCard title={armor.name} contentClassName="er__equipmentDetail__cardContent">
                    <ul className="h-100 flex-between-column">
                        <span></span>
                        <StatRow title="Weight" value={armor.weight.toFixed(1)} color={weightColor} />
                    </ul>
                    <div className="er__equipmentDetail__imageColumn">
                        <div className="er__equipmentDetail__imageWrapper">
                            <img className="img-fluid" src={imageSrc} alt="armor" />
                        </div>
                    </div>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Damage Negation" smallTitle={true} iconPath={mdiShield} margined={false} className="mx-3 my-2" contentClassName="er__equipmentDetail__section">
                    <ul>
                        <ArmorDefenseStats
                            armor={armor}
                            oldArmor={oldArmor}
                        />
                    </ul>
                </ErCard>
                <ErCard title="Resistance" smallTitle={true} iconPath={mdiShieldOutline} margined={false} className="mx-3 my-2" contentClassName="er__equipmentDetail__section">
                    <ul>
                        <ArmorResistanceStats
                            armor={armor}
                            oldArmor={oldArmor}
                        />
                    </ul>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrewOutline} margined={false} className="mx-3 my-2" contentClassName="er__equipmentDetail__section">
                    <ul>
                        <li> - </li>
                        <li> - </li>
                        <li> - </li>
                    </ul>
                </ErCard>
            </section>
        </div>
    )
}
