import { useSelector } from "react-redux"
import {
    mdiSword,
    mdiShield,
    mdiArmFlex,
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import { Selectors } from "@app/state"
import {
    getImageSrc,
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
    WeaponRequirementStats,
    // UnarmedWeaponDetail,
    EmptyWeaponDetail,
} from "."

export const WeaponDetail = (_props: unknown): JSX.Element => {

    const weapon     = useSelector(Selectors.Weapons.active.weapon)
    const oldWeapon  = useSelector(Selectors.Weapons.old.weapon)
    const newStats   = useSelector(Selectors.Weapons.active.calculatedStats)
    const oldStats   = useSelector(Selectors.Weapons.old.stats)
    const attributes = useSelector(Selectors.Builder.allAttributes)

    if (isBlank(weapon)) {
        // return <UnarmedWeaponDetail />
        return <EmptyWeaponDetail />
    }

    const weaponImgSrc = getImageSrc("Weapon", weapon.name, "256")

    let weightColor: StatRowColor = "default"

    const newWeight = weapon.weight
    const oldWeight = oldWeapon.weight

    if      (newWeight >  oldWeight) { weightColor = "blue"    }
    else if (newWeight == oldWeight) { weightColor = "default" }
    else if (newWeight <  oldWeight) { weightColor = "red"     }

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
                                    <img className="img-fluid" src={weaponImgSrc} alt="weapon image" />
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
                                newStats={newStats}
                                oldStats={oldStats}
                            />
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            <WeaponDefenseStats
                                newWeapon={weapon}
                                oldWeapon={oldWeapon}
                            />
                        </ul>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Attribute Scaling" smallTitle={true} iconPath={mdiArmFlex}>
                        <WeaponScalingStats
                            newStats={newStats}
                            oldStats={oldStats}
                        />
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended}>
                        <WeaponRequirementStats
                            weapon={weapon}
                            attributes={attributes}
                        />
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
