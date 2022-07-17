import { capitalize } from "lodash"
import {
    mdiSword,
    mdiTshirtCrewOutline,
} from "@mdi/js"

import { Dmg } from "@app/types"
import { SpecialCharacters } from "@app/util"
import {
    ErCard,
    StatRow,
    StatRowPlus,
} from "@app/shared"

export const AmmunitionDetail = (_props: unknown): JSX.Element => {

    const attackRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `ammunition-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    return (
        <div className="er__equipmentDetail">
            <section className="er__equipmentDetail__section">
                <ErCard title="-">
                    <div className="row">
                        <div className="col">
                            <ul className="h-100 flex-between-column">
                                <span></span>
                                <span></span>
                                <StatRowPlus title="No. Held" value_1={SpecialCharacters.infinity} divider="/" value_2="?" />
                                <StatRowPlus title="Stored"   value_1={SpecialCharacters.infinity} divider="/" value_2="?" />
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
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Attack Power" smallTitle={true} iconPath={mdiSword} margined={false} className="mx-3 my-2">
                    <ul>
                        {attackRows}
                    </ul>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrewOutline} margined={false} className="mx-3 my-2">
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

