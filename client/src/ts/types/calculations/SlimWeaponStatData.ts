export interface SlimWeaponStatData {
    attack: {
        physical:  Decimal
        magic:     Decimal
        fire:      Decimal
        lightning: Decimal
        holy:      Decimal
        // critical:  number
        // stamina:  number
    }
    scaling: {
        strength:     Decimal
        dexterity:    Decimal
        intelligence: Decimal
        faith:        Decimal
        arcane:       Decimal
    }
    calc_correct: {
        physical:  Integer
        magic:     Integer
        fire:      Integer
        lightning: Integer
        holy:      Integer
    }
    attack_element_correct_param_id: Integer
}
