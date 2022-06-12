import {
    mdiSword,
    mdiShield,
    mdiArmFlex,
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"
import { capitalize } from "lodash"

import {
    Dmg,
    CalculatedWeaponStats,
    Weapon,
} from "@app/types"
import { isBlank } from "@app/util"
import {
    ErCard,
    StatRow,
    StatRowPlus,
    StatRowPlusProps,
    StatRowProps,
} from "@app/shared"

export interface WeaponAttackStatsProps {
    newStats?: CalculatedWeaponStats
    oldStats?: CalculatedWeaponStats
}

const WeaponAttackStats = (props: Partial<WeaponDetailProps>): JSX.Element => {

    if (isBlank(props?.newStats)) {
        return null
    }

    const { newStats } = props

    const oldStats = props?.oldStats

    const attackPlaceholder = "0" // "0.0"
    const data: StatRowPlusProps[] = []

    for (const dmg of Object.values(Dmg)) {

        const oldBase   = oldStats?.attack?.base?.[dmg]   ?? 0
        const oldScaled = oldStats?.attack?.scaled?.[dmg] ?? 0
        const oldTotal  = (oldBase + oldScaled)

        const newBase   = newStats?.attack?.base?.[dmg]
        const newScaled = newStats?.attack?.scaled?.[dmg]
        const newTotal  = (newBase + newScaled)

        const row: StatRowPlusProps = {
            title: capitalize(dmg),
            value_1: newBase?.toFixed(0)   ?? attackPlaceholder,
            value_2: newScaled?.toFixed(0) ?? attackPlaceholder,
            value_1_color: "default",
            value_2_color: "default",
        }

        // eslint-disable-next-line indent
             if (newBase >  oldBase) { row.value_1_color = "blue"    }
        else if (newBase == oldBase) { row.value_1_color = "default" }
        else if (newBase <  oldBase) { row.value_1_color = "red"     }

        // eslint-disable-next-line indent
             if (newScaled >  oldScaled) { row.value_2_color = "blue"    }
        else if (newScaled == oldScaled) { row.value_2_color = "default" }
        else if (newScaled <  oldScaled) { row.value_2_color = "red"     }

        // eslint-disable-next-line indent
             if (newTotal >  oldTotal) { row.divider_color = "blue"    }
        else if (newTotal == oldTotal) { row.divider_color = "default" }
        else if (newTotal <  oldTotal) { row.divider_color = "red"     }

        data.push(row)
    }

    const rows = data.map(({ title, value_1, value_2, value_1_color, value_2_color }) => {
        const key = `weapon-attack-${title}`
        return (<StatRowPlus
            key={key}
            title={title}
            divider="+"
            value_1={value_1}
            value_2={value_2}
            value_1_color={value_1_color}
            value_2_color={value_2_color}
        />)
    })

    return <>{rows}</>
}

export interface WeaponDetailProps {
    weapon: Weapon
    newStats?: CalculatedWeaponStats
    oldStats?: CalculatedWeaponStats
}

export const WeaponDetail = (props: WeaponDetailProps): JSX.Element => {

    const { weapon } = props

    if (isBlank(weapon)) {
        return null
    }

    const defensePlaceholder = "?" // "0.0"

    const dmgNegationData: StatRowProps[] = [
        { title: "Physical",    value: (weapon?.defense_physical?.toFixed(1)  ?? defensePlaceholder) },
        { title: "Magic",       value: (weapon?.defense_magic?.toFixed(1)     ?? defensePlaceholder) },
        { title: "Fire",        value: (weapon?.defense_fire?.toFixed(1)      ?? defensePlaceholder) },
        { title: "Lightning",   value: (weapon?.defense_lightning?.toFixed(1) ?? defensePlaceholder) },
        { title: "Holy",        value: (weapon?.defense_holy?.toFixed(1)      ?? defensePlaceholder) },
        { title: "Guard Boost", value: (weapon?.defense_guard_boost           ?? defensePlaceholder) },
    ]

    const dmgNegationElements = dmgNegationData.map(({ title, value }) => {
        const key = `weapon-damage-negation-${title}`
        return (<StatRow title={title} value={value} key={key}/>)
    })


    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ErCard title={weapon?.name} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <StatRow title={weapon?.weapon_type}                    value={null} />
                                    <StatRow title={weapon.physical_damage_types.join("/")} value={null} />
                                    <br />
                                    <StatRow title={weapon?.weapon_skill?.name} value={null} />
                                    <br />
                                    <StatRow title="FP Cost" value="TODO" />
                                    <StatRow title="Weight"  value={weapon.weight.toFixed(1)} />
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid" src={weapon.image_url} alt="weapon" />
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
                            <WeaponAttackStats
                                newStats={props?.newStats}
                                oldStats={props?.oldStats}
                            />
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            {dmgNegationElements}
                        </ul>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Attribute Scaling" smallTitle={true} iconPath={mdiArmFlex}>
                        <div className="row">
                            <div className="col">
                                <StatRow title="Str" value={weapon?.scaling_strength     ?? "-"} />
                                <StatRow title="Int" value={weapon?.scaling_intelligence ?? "-"} />
                                <StatRow title="Arc" value={weapon?.scaling_arcane       ?? "-"} />
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <StatRow title="Dex" value={weapon?.scaling_dexterity ?? "-"} />
                                <StatRow title="Fai" value={weapon?.scaling_faith     ?? "-"} />
                            </div>
                        </div>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended}>
                        <div className="row">
                            <div className="col">
                                <StatRow title="Str" value={weapon?.required_strength     ?? "-"} />
                                <StatRow title="Int" value={weapon?.required_intelligence ?? "-"} />
                                <StatRow title="Arc" value={weapon?.required_arcane       ?? "-"} />
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <StatRow title="Dex" value={weapon?.required_dexterity ?? "-"} />
                                <StatRow title="Fai" value={weapon?.required_faith     ?? "-"} />
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
