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
        <div className="er__equipmentDetail">
            <section className="er__equipmentDetail__section">
                <ErCard title={"-"}  contentClassName="er__equipmentDetail__cardContent">
                    <ul>
                        <StatRow title={"-"} value={null} />
                        <StatRow title={"-"} value={null} />
                        <br />
                        <StatRow title={"-"} value={null} />
                        <br />
                        <StatRow title="FP Cost" value={<span>-&nbsp;(&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;)</span>} />
                        <StatRow title="Weight"  value="-"  />
                    </ul>
                    <div className="er__equipmentDetail__imageColumn">
                        <div className="er__equipmentDetail__imageWrapper empty">
                            <div></div>
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
                <ErCard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield} margined={false} className="mx-3 my-2">
                    <ul>
                        {defenseRows}
                    </ul>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Attribute Scaling" smallTitle={true} iconPath={mdiArmFlex} margined={false} className="mx-3 my-2">
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
                <ErCard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended} margined={false} className="mx-3 my-2">
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
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrew} margined={false} className="mx-3 my-2">
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
