export interface CalculatedWeaponStats {
    attack: {
        base: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
            // critical:  number
        }
        scaled: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
            // critical:  number
        }
        total: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
        }
    }
    // defense: {
    //     physical:   number
    //     magic:      number
    //     fire:       number
    //     lightning:  number
    //     holy:       number
    //     // guardBoost: number
    // }
    scaling: {
        strength:     string
        dexterity:    string
        intelligence: string
        faith:        string
        arcane:       string
    }
    // scaling: {
    //     values: {
    //         strength:     number
    //         dexterity:    number
    //         intelligence: number
    //         faith:        number
    //         arcane:       number
    //     }
    //     tierStrings: {
    //         strength:     string
    //         dexterity:    string
    //         intelligence: string
    //         faith:        string
    //         arcane:       string
    //     }
    // }
}
