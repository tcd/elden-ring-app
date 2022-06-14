import { CalculatedWeaponStats } from "elden-ring-calculator"
import {
    mdiSword,
    mdiShield,
    mdiArmFlex,
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import { Weapon } from "@app/types"
import {
    isBlank,
} from "@app/util"
import {
    ErCard,
    StatRow,
    StatRowProps,
} from "@app/shared"
import {
    WeaponAttackStats,
    WeaponScalingStats,
} from "."

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
                                    <StatRow title="FP Cost" value={weapon?.weapon_skill?.metadata?.complex_fp_cost ?? weapon?.weapon_skill?.metadata?.basic_fp_cost} />
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
                        <WeaponScalingStats
                            newStats={props?.newStats}
                            oldStats={props?.oldStats}
                        />
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
