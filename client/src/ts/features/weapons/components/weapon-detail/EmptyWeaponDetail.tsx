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
import {
    WeaponAttackStats,
    WeaponScalingStats,
} from "."

export const EmptyWeaponDetail = (props: unknown): JSX.Element => {

    const defenseRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg).slice(0, 3)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    const attackRows = Object.values(Dmg).map((dmg) => {
        const title = capitalize(dmg).slice(0, 3)
        const key = `weapon-attack-${dmg}`
        return (<StatRow key={key} title={title} value={"-"} />)
    })

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ErCard title={"-"} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <StatRow title={"-"}   value={null} />
                                    <StatRow title={"-"} value={null} />
                                    <br />
                                    <StatRow title={"-"} value={null} />
                                    <br />
                                    <StatRow title="FP Cost" value={<span>-&nbsp;(&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;)</span>} />
                                    <StatRow title="Weight"  value="-"  />
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper empty">
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
