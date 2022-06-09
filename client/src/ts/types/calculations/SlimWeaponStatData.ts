export interface SlimWeaponStatData {
    attack: {
        physical:  number
        magic:     number
        fire:      number
        lightning: number
        holy:      number
        // critical:  number
        // stamina:  number
    }
    scaling: {
        strength:     number
        dexterity:    number
        intelligence: number
        faith:        number
        arcane:       number
    }
    attack_element_correct_param_id: number
}
