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
    WeaponPassiveEffects,
    // UnarmedWeaponDetail,
    EmptyWeaponDetail,
} from "."

export const WeaponDetail = (_props: unknown): JSX.Element => {

    const weapon      = useSelector(Selectors.Weapons.active.weapon)
    const oldWeapon   = useSelector(Selectors.Weapons.old.weapon)
    const newStats    = useSelector(Selectors.Weapons.active.calculatedStats)
    const oldStats    = useSelector(Selectors.Weapons.old.stats)
    const attributes  = useSelector(Selectors.Builder.allAttributes)
    const displayName = useSelector(Selectors.Weapons.active.weaponDisplayName)
    const activeSkill = useSelector(Selectors.Weapons.active.weaponSkill)

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

    let weaponSkillImageElement = <div className="weapon-skill-image-wrapper empty"></div>
    if (activeSkill?.ash_of_war) {
        const weaponSkillImgSrc = getImageSrc("Weapon Skill", activeSkill.name, "256")
        weaponSkillImageElement = (
            <div className="weapon-skill-image-wrapper">
                <img className="img-fluid weapon-skill-image" src={weaponSkillImgSrc} alt="weapon image" />
            </div>
        )
    }

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ErCard title={displayName} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <StatRow title={weapon?.weapon_type}                    value={null} />
                                    <StatRow title={weapon.physical_damage_types.join("/")} value={null} />
                                    <br />
                                    <StatRow title={activeSkill?.name} value={null} />
                                    <br />
                                    <StatRow title="FP Cost" value={activeSkill?.metadata?.complex_fp_cost ?? activeSkill?.metadata?.basic_fp_cost} />
                                    <StatRow title="Weight"  value={weapon.weight.toFixed(1)} color={weightColor} />
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                {weaponSkillImageElement}
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid weapon-image" src={weaponImgSrc} alt="weapon image" />
                                </div>
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Attack Power" smallTitle={true} iconPath={mdiSword} margined={false} className="mx-3 my-2">
                        <ul>
                            <WeaponAttackStats
                                newStats={newStats}
                                oldStats={oldStats}
                            />
                        </ul>
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield} margined={false} className="mx-3 my-2">
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
                    <ErCard title="Attribute Scaling" smallTitle={true} iconPath={mdiArmFlex} margined={false} className="mx-3 my-2">
                        <WeaponScalingStats
                            newStats={newStats}
                            oldStats={oldStats}
                        />
                    </ErCard>
                </div>
                <div className="col">
                    <ErCard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended} margined={false} className="mx-3 my-2">
                        <WeaponRequirementStats
                            weapon={weapon}
                            attributes={attributes}
                        />
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrew} margined={false} className="mx-3 my-2">
                        <WeaponPassiveEffects
                            weapon={weapon}
                            stats={newStats}
                        />
                    </ErCard>
                </div>
            </div>
        </div>
    )
}
