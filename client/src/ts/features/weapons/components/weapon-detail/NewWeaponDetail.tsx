import { useSelector } from "react-redux"
import { SxProps } from "@mui/material"

import { Selectors } from "@app/state"
import {
    getImageSrc,
    isBlank,
} from "@app/util"
import {
    ErCard2,
    ErCard2Props,
    StatRowColor,
    EquipmentDetail,
    EquipmentDetailProps,
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

const cardProps: Partial<ErCard2Props> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export const WeaponDetail = (_props: unknown): JSX.Element => {

    const weapon      = useSelector(Selectors.Weapons.active.weapon)
    const oldWeapon   = useSelector(Selectors.Weapons.old.weapon)
    const newStats    = useSelector(Selectors.Weapons.active.calculatedStats)
    const oldStats    = useSelector(Selectors.Weapons.old.stats)
    const attributes  = useSelector(Selectors.Meta.Levels.allAttributeLevels)
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

    let weaponSkillImgSrc = null
    if (activeSkill?.ash_of_war) {
        weaponSkillImgSrc = getImageSrc("Weapon Skill", activeSkill.name, "256")
    }

    const props: Partial<EquipmentDetailProps> = {
        title: displayName,
        includePassiveEffects: true,
        includeSecondaryImage: true,
        primaryImage: {
            src: weaponImgSrc,
            alt: "weapon",
        },
        secondaryImage: {
            src: weaponSkillImgSrc,
            alt: "weapon skill",
        },
        mainSectionRows: {
            row1: { type: "StatRow", props: { title: weapon?.weapon_type, value: null } },
            row2: { type: "StatRow", props: { title: weapon.physical_damage_types.join("/"), value: null } },
            // row3: null,
            row4: { type: "StatRow", props: { title: activeSkill?.name, value: null } },
            row5: { type: "StatRow", props: { title: "FP Cost", value: activeSkill?.metadata?.complex_fp_cost ?? activeSkill?.metadata?.basic_fp_cost } },
            row6: { type: "StatRow", props: { title: "Weight", value: weapon.weight.toFixed(1), color: weightColor } },
        },
    }

    return (
        <EquipmentDetail {...props}>
            <section className="er__equipmentDetail2__section">
                <ErCard2 title="Attack Power" icon="AttackPower" {...cardProps}>
                    <ul>
                        <WeaponAttackStats
                            newStats={newStats}
                            oldStats={oldStats}
                        />
                    </ul>
                </ErCard2>
                <ErCard2 title="Guarded Damage Negation" icon="GuardedDmgNegation" {...cardProps}>
                    <ul>
                        <WeaponDefenseStats
                            newWeapon={weapon}
                            oldWeapon={oldWeapon}
                        />
                    </ul>
                </ErCard2>
            </section>
            <section className="er__equipmentDetail2__section">
                <ErCard2 title="Attribute Scaling" icon="AttributeScaling" {...cardProps}>
                    <WeaponScalingStats
                        newStats={newStats}
                        oldStats={oldStats}
                    />
                </ErCard2>
                <ErCard2 title="Attributes Required" icon="AttributesRequired" {...cardProps}>
                    <WeaponRequirementStats
                        weapon={weapon}
                        attributes={attributes}
                    />
                </ErCard2>
            </section>
            <section className="er__equipmentDetail2__section">
                <ErCard2 title="Passive Effects" icon="PassiveEffects" {...cardProps}>
                    <WeaponPassiveEffects
                        weapon={weapon}
                        stats={newStats}
                    />
                </ErCard2>
            </section>
        </EquipmentDetail>
    )
}
