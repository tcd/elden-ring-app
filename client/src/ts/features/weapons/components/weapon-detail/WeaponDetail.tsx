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
    StatRowColor,
} from "@app/shared"
import {
    WeaponAttackStats,
    WeaponScalingStats,
    WeaponDefenseStats,
} from "."

export interface WeaponDetailProps {
    weapon: Weapon
    oldWeapon?: Weapon
    newStats?: CalculatedWeaponStats
    oldStats?: CalculatedWeaponStats
}

export const WeaponDetail = (props: WeaponDetailProps): JSX.Element => {

    const { weapon } = props

    if (isBlank(weapon)) {
        return null
    }

    let weightColor: StatRowColor = "default"
    if (props?.oldWeapon) {
        const newWeight = props.weapon.weight
        const oldWeight = props.oldWeapon.weight
        // eslint-disable-next-line indent
             if (newWeight >  oldWeight) { weightColor = "blue"    }
        else if (newWeight == oldWeight) { weightColor = "default" }
        else if (newWeight <  oldWeight) { weightColor = "red"     }
    }

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
                                    <StatRow title="Weight"  value={weapon.weight.toFixed(1)} color={weightColor} />
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
                            <WeaponDefenseStats
                                newWeapon={weapon}
                                oldWeapon={props?.oldWeapon}
                            />
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
