import { capitalize } from "lodash"
import {
    mdiSword,
    mdiShield,
    mdiArmFlex,
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import { Dmg } from "@app/types"
import {
    ErCard,
    StatRow,
} from "@app/shared"

export const EmptyWeaponDetail = (_props: unknown): JSX.Element => {

    const defenseRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    defenseRows.push(<StatRow
        key="Guard Boost"
        title="Guard Boost"
        value="-"
    />)

    const attackRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    attackRows.push(<StatRow
        key="Critical"
        title="Critical"
        value="-"
    />)

    return (
        <div className="er__weaponDetail">
            <div className="row">
                <div className="col">
                    <ErCard title={"-"} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <StatRow title={"-"} value={null} />
                                    <StatRow title={"-"} value={null} />
                                    <br />
                                    <StatRow title={"-"} value={null} />
                                    <br />
                                    <StatRow title="FP Cost" value={<span>-&nbsp;(&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;)</span>} />
                                    <StatRow title="Weight"  value="-"  />
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col er__weaponDetail__imageColumn">
                                <div className="er__weaponDetail__imageWrapper empty">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Attack Power" smallTitle={true} iconPath={mdiSword}>
                        <ul>
                            {attackRows}
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            {defenseRows}
                        </ul>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Attribute Scaling" smallTitle={true} iconPath={mdiArmFlex}>
                        <div className="row">
                            <div className="col">
                                <StatRow title="Str" value="-" />
                                <StatRow title="Int" value="-" />
                                <StatRow title="Arc" value="-" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <StatRow title="Dex" value="-" />
                                <StatRow title="Fai" value="-" />
                            </div>
                        </div>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended}>
                        <div className="row">
                            <div className="col">
                                <StatRow title="Str" value="-" />
                                <StatRow title="Int" value="-" />
                                <StatRow title="Arc" value="-" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <StatRow title="Dex" value="-" />
                                <StatRow title="Fai" value="-" />
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrew}>
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
