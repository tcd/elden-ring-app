import { CalculatedWeaponStats } from "elden-ring-calculator"
import { Weapon } from "@app/types"

export const Unarmed: Weapon = {
    id: -1,
    name: "Unarmed",
    weight: 0.0,
    physical_damage_types: [ "Strike" ],
    is_shield: false,
    is_special: true,
    weapon_type: "Fists",
    weapon_type_id: 22,
    weapon_skill_id: -1,

    defense_fire:        30.0,
    defense_holy:        20.0,
    defense_lightning:   20.0,
    defense_magic:       20.0,
    defense_physical:    20.0,
    defense_guard_boost: 10,

    required_arcane:       0,
    required_dexterity:    0,
    required_faith:        0,
    required_intelligence: 0,
    required_strength:     0,

    weapon_skill: {
        id: 69,
        name: "Kick",
        ash_of_war: true,
        description: "Push an enemy back with a high kick.Effective against enemies who are guarding, and can break a foe's stance.",
        is_chargeable: null,
        compatible_weapon_affinities: [],
        compatible_weapon_types: [],
        metadata: {
            complex_fp_cost: "-(&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;-&nbsp;)",
        },
    },
}
export const UnarmedStats: CalculatedWeaponStats = {
    attack: {
        base: {
            physical:  0.0,
            magic:     0.0,
            fire:      0.0,
            lightning: 0.0,
            holy:      0.0,
        },
        scaled: {
            physical:  0.0,
            magic:     0.0,
            fire:      0.0,
            lightning: 0.0,
            holy:      0.0,
        },
        total: {
            physical:  0.0,
            magic:     0.0,
            fire:      0.0,
            lightning: 0.0,
            holy:      0.0,
        },
    },
    scaling: {
        values: {
            strength:     -1,
            dexterity:    -1,
            intelligence: -1,
            faith:        -1,
            arcane:       -1,
        },
        tierStrings: {
            strength:     "-",
            dexterity:    "-",
            intelligence: "-",
            faith:        "-",
            arcane:       "-",
        },
    },
    passive: {
        scarlet_rot: 0,
        madness:     0,
        sleep:       0,
        frost:       0,
        poison:      0,
        blood_loss:  0,
    },
}
