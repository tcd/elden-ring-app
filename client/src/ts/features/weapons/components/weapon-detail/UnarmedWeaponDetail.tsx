import {
    mdiSword,
    mdiShield,
    mdiArmFlex,
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import {
    Unarmed,
    UnarmedStats,
} from "@app/data"
import {
    ErCard,
    StatRow,
} from "@app/shared"
import {
    WeaponAttackStats,
    WeaponScalingStats,
    WeaponDefenseStats,
} from "."

export const UnarmedWeaponDetail = (_props: unknown): JSX.Element => {

    const weapon = Unarmed

    const props = {
        weapon: Unarmed,
        newStats: UnarmedStats,
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
                                    <StatRow title="FP Cost" value={<span>-&nbsp;(&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;)</span>} />
                                    <StatRow title="Weight"  value={weapon.weight.toFixed(1)} color="default" />
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid" src="" />
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
                                oldStats={null}
                            />
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            <WeaponDefenseStats
                                newWeapon={weapon}
                                oldWeapon={null}
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
                            oldStats={null}
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
