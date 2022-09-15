import type { SlimWeaponData } from "elden-ring-calculator"

import type { WeaponStat } from "@app/types"

export const getSlimWeaponStatData = (statData: WeaponStat, level: number): SlimWeaponData => {
    const result: SlimWeaponData = {
        attack: {
            physical:  statData[`attack_physical_${level}`]  ?? 0,
            magic:     statData[`attack_magic_${level}`]     ?? 0,
            fire:      statData[`attack_fire_${level}`]      ?? 0,
            lightning: statData[`attack_lightning_${level}`] ?? 0,
            holy:      statData[`attack_holy_${level}`]      ?? 0,
            // stamina:   statData[`attack_stamina_${level}`],
        },
        scaling: {
            strength:     statData[`scaling_strength_${level}`]     ?? 0,
            dexterity:    statData[`scaling_dexterity_${level}`]    ?? 0,
            intelligence: statData[`scaling_intelligence_${level}`] ?? 0,
            faith:        statData[`scaling_faith_${level}`]        ?? 0,
            arcane:       statData[`scaling_arcane_${level}`]       ?? 0,
        },
        calc_correct: {
            physical:  statData["calc_correct_physical"]  ?? 0,
            magic:     statData["calc_correct_magic"]     ?? 0,
            fire:      statData["calc_correct_fire"]      ?? 0,
            lightning: statData["calc_correct_lightning"] ?? 0,
            holy:      statData["calc_correct_holy"]      ?? 0,
        },
        passive: {
            scarlet_rot: statData?.passive_scarlet_rot_0         ?? 0,
            madness:     statData?.passive_madness_0             ?? 0,
            sleep:       statData?.passive_sleep_0               ?? 0,
            frost:       statData[`passive_frost_${level}`]      ?? 0,
            poison:      statData[`passive_poison_${level}`]     ?? 0,
            blood_loss:  statData[`passive_blood_loss_${level}`] ?? 0,
        },
        attack_element_correct_param_id: statData.attack_element_correct_param_id,
    }
    return result
}
