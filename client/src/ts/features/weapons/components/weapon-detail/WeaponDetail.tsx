import { useSelector } from "react-redux"
import Grid from "@mui/material/Unstable_Grid2"

import { Selectors } from "@app/state"
import {
    getImageSrc,
    isBlank,
} from "@app/util"
import type { ComparisonColor } from "@app/types"
import {
    ErCard,
    EquipmentDetail,
    EquipmentDetailProps,
} from "@app/shared"
import {
    WeaponAttackStats,
    WeaponScalingStats,
    WeaponDefenseStats,
    WeaponRequirementStats,
    EmptyWeaponDetail,
    weaponPassiveEffects,
} from "."
import {
    containerProps,
    itemProps,
    cardProps,
} from "./shared"

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

    let weightColor: ComparisonColor = "default"

    const newWeight = weapon.weight
    const oldWeight = oldWeapon.weight

    if      (newWeight >  oldWeight) { weightColor = "blue"    }
    else if (newWeight == oldWeight) { weightColor = "default" }
    else if (newWeight <  oldWeight) { weightColor = "red"     }

    let weaponSkillImgSrc = null
    if (activeSkill?.ash_of_war) {
        weaponSkillImgSrc = getImageSrc("Weapon Skill", activeSkill.name, "256")
    }

    const props: EquipmentDetailProps = {
        title: displayName,
        includePassiveEffects: true,
        includeSecondaryImage: !weapon.is_special,
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
        passiveEffects: weaponPassiveEffects({ weapon, stats: newStats }),
    }

    return (
        <EquipmentDetail {...props}>
            <Grid {...containerProps}>
                <Grid {...itemProps}>
                    <ErCard title="Attack Power" icon="AttackPower" {...cardProps}>
                        <ul>
                            <WeaponAttackStats
                                newStats={newStats}
                                oldStats={oldStats}
                            />
                        </ul>
                    </ErCard>

                </Grid>
                <Grid {...itemProps}>
                    <ErCard title="Guarded Damage Negation" icon="GuardedDmgNegation" {...cardProps}>
                        <ul>
                            <WeaponDefenseStats
                                newWeapon={weapon}
                                oldWeapon={oldWeapon}
                            />
                        </ul>
                    </ErCard>
                </Grid>
                <Grid {...itemProps}>
                    <ErCard title="Attribute Scaling" icon="AttributeScaling" {...cardProps}>
                        <WeaponScalingStats
                            newStats={newStats}
                            oldStats={oldStats}
                        />
                    </ErCard>
                </Grid>
                <Grid {...itemProps}>
                    <ErCard title="Attributes Required" icon="AttributesRequired" {...cardProps}>
                        <WeaponRequirementStats
                            weapon={weapon}
                            attributes={attributes}
                        />
                    </ErCard>
                </Grid>
            </Grid>
        </EquipmentDetail>
    )
}
