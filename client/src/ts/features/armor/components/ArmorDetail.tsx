import {
    mdiShield,
    mdiShieldOutline,
    mdiTshirtCrew,
    mdiTshirtCrewOutline,
} from "@mdi/js"

import { Armor } from "@app/types"
import { getImageSrc, isBlank } from "@app/util"
import {
    ErCard,
    StatRow,
    StatRowPlusProps,
    StatRowProps,
} from "@app/shared"

export interface ArmorDetailProps {
    armor: Armor
}

export const ArmorDetail = ({ armor }: ArmorDetailProps): JSX.Element => {

    if (isBlank(armor)) {
        return null
    }

    const imageSrc = getImageSrc("Armor", armor.name, "256")

    const defensePlaceholder = "?" // "0.0"
    const resistancePlaceholder = "?" // "0"

    const defenseRowData: StatRowProps[] = [
        { title: "Physical",  value: (armor?.physical?.toFixed(1)  ?? defensePlaceholder) },
        { title: "VS Strike", value: (armor?.vs_strike?.toFixed(1) ?? defensePlaceholder) },
        { title: "VS Slash",  value: (armor?.vs_slash?.toFixed(1)  ?? defensePlaceholder) },
        { title: "VS Pierce", value: (armor?.vs_pierce?.toFixed(1) ?? defensePlaceholder) },
        { title: "Magic",     value: (armor?.magic?.toFixed(1)     ?? defensePlaceholder) },
        { title: "Fire",      value: (armor?.fire?.toFixed(1)      ?? defensePlaceholder) },
        { title: "Lightning", value: (armor?.lightning?.toFixed(1) ?? defensePlaceholder) },
        { title: "Holy",      value: (armor?.holy?.toFixed(1)      ?? defensePlaceholder) },
    ]

    const resistanceRowData: StatRowProps[] = [
        { title: "Immunity",   value: (armor?.immunity   ?? resistancePlaceholder) },
        { title: "Robustness", value: (armor?.robustness ?? resistancePlaceholder) },
        { title: "Focus",      value: (armor?.focus      ?? resistancePlaceholder) },
        { title: "Vitality",   value: (armor?.vitality   ?? resistancePlaceholder) },
        { title: "Poise",      value: (armor?.poise      ?? resistancePlaceholder) },
    ]

    const defenseRowElements    = defenseRowData.map(({ title, value })    => <StatRow key={title} title={title} value={value} />)
    const resistanceRowElements = resistanceRowData.map(({ title, value }) => <StatRow key={title} title={title} value={value} />)


    return (
        <div className="equipment-detail">
            <div className="row">
                <div className="col">
                    <ErCard title={armor.name}>
                        <div className="row">
                            <div className="col">
                                <ul className="h-100 flex-between-column">
                                    <StatRow title={armor.armor_type} value={null}/>
                                    <StatRow title="Weight" value={armor.weight.toFixed(1)}/>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col equipment-image-column">
                                <div className="equipment-image-wrapper">
                                    <img className="img-fluid" src={imageSrc} alt="armor" />
                                </div>
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            {defenseRowElements}
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Resistance" smallTitle={true} iconPath={mdiShieldOutline}>
                        <ul>
                            {resistanceRowElements}
                        </ul>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrewOutline}>
                        <ul>
                            <li> - </li>
                            <li> - </li>
                            <li> - </li>
                        </ul>
                    </ErCard>
                </div>
            </div>
        </div>
    )
}
