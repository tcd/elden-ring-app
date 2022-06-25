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
} from "@app/shared"
import { Selectors } from "@app/state"
import {
    ArmorDetailProps,
    ArmorDefenseStats,
    ArmorResistanceStats,
    ARMOR_DEFENSE_STATS,
    ARMOR_RESISTANCE_STATS,
} from "."

export const EmptyArmorDetail = (props: unknown): JSX.Element => {

    const defenseRows = ARMOR_DEFENSE_STATS.map(({ title }) => {
        return (<StatRow key={title} title={title} value="-" />)
    })

    const resistanceRows = ARMOR_RESISTANCE_STATS.map(({ title }) => {
        return (<StatRow key={title} title={title} value="-" />)
    })

    return (
        <div className="equipment-detail">
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
                            <div className="col equipment-image-column">
                                <div className="equipment-image-wrapper empty">
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
                            {defenseRows}
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Resistance" smallTitle={true} iconPath={mdiShieldOutline}>
                        <ul>
                            {resistanceRows}
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
