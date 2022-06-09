import {
    ComparisonColor,
} from "@app/types"

export interface CalculatedWeaponStats {
    attack: {
        base: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
            critical:  number
        }
        scaled: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
            critical:  number
        }
    }
    defense: {
        physical:   number
        magic:      number
        fire:       number
        lightning:  number
        holy:       number
        guardBoost: number
    }
    scaling: {
        strength:     number
        dexterity:    number
        intelligence: number
        faith:        number
        arcane:       number
    }
    // requirements: {
    //     strength:     number
    //     dexterity:    number
    //     intelligence: number
    //     faith:        number
    //     arcane:       number
    // }
}

// export interface WeaponStatComparison {
//     attack: {
//         base: {
//             physical:  ComparisonColor
//             magic:     ComparisonColor
//             fire:      ComparisonColor
//             lightning: ComparisonColor
//             holy:      ComparisonColor
//             critical:  ComparisonColor
//         }
//         scaled: {
//             physical:  ComparisonColor
//             magic:     ComparisonColor
//             fire:      ComparisonColor
//             lightning: ComparisonColor
//             holy:      ComparisonColor
//             critical:  ComparisonColor
//         }
//     }
//     defense: {
//         physical:   ComparisonColor
//         magic:      ComparisonColor
//         fire:       ComparisonColor
//         lightning:  ComparisonColor
//         holy:       ComparisonColor
//         guardBoost: ComparisonColor
//     }
//     scaling: {
//         strength:     ComparisonColor
//         dexterity:    ComparisonColor
//         intelligence: ComparisonColor
//         faith:        ComparisonColor
//         arcane:       ComparisonColor
//     }
//     requirements: {
//         strength:     ComparisonColor
//         dexterity:    ComparisonColor
//         intelligence: ComparisonColor
//         faith:        ComparisonColor
//         arcane:       ComparisonColor
//     }
// }
