import {
    WeaponStat,
    SlimWeaponStatData,
} from "@app/types"

export const getSlimWeaponStatData = (statData: WeaponStat, level: number): SlimWeaponStatData => {
    const result: SlimWeaponStatData = {
        attack: {
            physical:  statData[`attack_physical_${level}`],
            magic:     statData[`attack_magic_${level}`],
            fire:      statData[`attack_fire_${level}`],
            lightning: statData[`attack_lightning_${level}`],
            holy:      statData[`attack_holy_${level}`],
            // stamina:   statData[`attack_stamina_${level}`],
        },
        scaling: {
            strength:     statData[`scaling_strength_${level}`],
            dexterity:    statData[`scaling_dexterity_${level}`],
            intelligence: statData[`scaling_intelligence_${level}`],
            faith:        statData[`scaling_faith_${level}`],
            arcane:       statData[`scaling_arcane_${level}`],
        },
        attack_element_correct_param_id: statData.attack_element_correct_param_id,
    }
    return result
}
