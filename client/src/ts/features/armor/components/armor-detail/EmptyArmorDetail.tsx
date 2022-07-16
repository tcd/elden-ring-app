import {
    mdiShield,
    mdiShieldOutline,
    mdiTshirtCrew,
    mdiTshirtCrewOutline,
} from "@mdi/js"

import {
    ErCard,
    StatRow,
} from "@app/shared"
import {
    ARMOR_DEFENSE_STATS,
    ARMOR_RESISTANCE_STATS,
} from "."

export const EmptyArmorDetail = (_props: unknown): JSX.Element => {

    const defenseRows = ARMOR_DEFENSE_STATS.map(({ title }) => {
        return (<StatRow key={title} title={title} value="-" />)
    })

    const resistanceRows = ARMOR_RESISTANCE_STATS.map(({ title }) => {
        return (<StatRow key={title} title={title} value="-" />)
    })

    return (
        <div className="er__equipmentDetail">
            <div className="row">
                <div className="col">
                    <ErCard title="-">
                        <div className="row">
                            <div className="col">
                                <ul className="h-100 flex-between-column">
                                    <span></span>
                                    <StatRow title="Weight" value="-"/>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col er__equipmentDetail__imageColumn">
                                <div className="er__equipmentDetail__imageWrapper empty">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Damage Negation" smallTitle={true} iconPath={mdiShield} margined={false} className="mx-3 my-2">
                        <ul>
                            {defenseRows}
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Resistance" smallTitle={true} iconPath={mdiShieldOutline} margined={false} className="mx-3 my-2">
                        <ul>
                            {resistanceRows}
                        </ul>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrewOutline} margined={false} className="mx-3 my-2">
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
