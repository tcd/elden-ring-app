import {
    ThreeNumbers,
    FourFuncs,
    CalcIdLevelRanges,
    CalcIdLevelRangeFuncs,
} from "@app/types"

export const calcCorrect = (level: number, calcCorrectId: number): Decimal => {
    const [cap3, cap2, cap1]:           ThreeNumbers = CALC_ID_LEVEL_RANGES[calcCorrectId.toString()]
    const [func1, func2, func3, func4]: FourFuncs    = CALC_ID_LEVEL_RANGE_FUNCTIONS_JS[calcCorrectId.toString()]

    if      (level > cap3) { return func1(level) }
    else if (level > cap2) { return func2(level) }
    else if (level > cap1) { return func3(level) }
    else                   { return func4(level) }
}

const CALC_ID_LEVEL_RANGES: CalcIdLevelRanges = {
    "0":  [80, 60, 18],
    "1":  [80, 60, 20],
    "2":  [80, 60, 20],
    "4":  [80, 50, 20],
    "7":  [80, 60, 20],
    "8":  [80, 60, 16],
    "12": [45, 30, 15],
    "14": [80, 40, 20],
    "15": [80, 60, 25],
    "16": [80, 60, 18],
}

const CALC_ID_LEVEL_RANGE_FUNCTIONS_JS: CalcIdLevelRangeFuncs = {
    "0":  [
        (level: number): number => { return (90 + (20 * (           (level - 80) / 70)))           },
        (level: number): number => { return (75 + (15 * (           (level - 60) / 20)))           },
        (level: number): number => { return (25 + (50 * (1 - ((1 - ((level - 18) / 42)) ** 1.2)))) },
        (level: number): number => { return ( 0 + (25 * (          ((level -  1) / 17)  ** 1.2)))  },
    ],
    "1":  [
        (level: number): number => { return (90 + (20 * (           (level - 80) / 70)))           },
        (level: number): number => { return (75 + (15 * (           (level - 60) / 20)))           },
        (level: number): number => { return (35 + (40 * (1 - ((1 - ((level - 20) / 40)) ** 1.2)))) },
        (level: number): number => { return (35       * (          ((level -  1) / 19)  ** 1.2))   },
    ],
    "2":  [
        (level: number): number => { return (90 + (20 * (           (level - 80) / 70)))           },
        (level: number): number => { return (75 + (15 * (           (level - 60) / 20)))           },
        (level: number): number => { return (35 + (40 * (1 - ((1 - ((level - 20) / 40)) ** 1.2)))) },
        (level: number): number => { return ( 0 + (35 * (          ((level -  1) / 19)  ** 1.2)))  },
    ],
    "4":  [
        (level: number): number => { return (95 + ( 5 * ((level - 80) / 19))) },
        (level: number): number => { return (80 + (15 * ((level - 50) / 30))) },
        (level: number): number => { return (40 + (40 * ((level - 20) / 30))) },
        (level: number): number => { return ( 0 + (40 * ((level -  1) / 19))) },
    ],
    "7":  [
        (level: number): number => { return (90 + (20 * ((level - 80) / 70)))                      },
        (level: number): number => { return (75 + (15 * ((level - 60) / 20)))                      },
        (level: number): number => { return (35 + (40 * (1 - ((1 - ((level - 20) / 40)) ** 1.2)))) },
        (level: number): number => { return ( 0 + (35 * (((level - 1) / 19) ** 1.2)))              },
    ],
    "8":  [
        (level: number): number => { return (90 + (20 * ((level - 80) / 70)))                      },
        (level: number): number => { return (75 + (15 * ((level - 60) / 20)))                      },
        (level: number): number => { return (0  + (25 * (((level - 1) / 15) ** 1.2)))              },
        (level: number): number => { return (25 + (50 * (1 - ((1 - ((level - 16) / 44)) ** 1.2)))) },
    ],
    "12": [
        (level: number): number => { return (75 + (25 * ((level - 45) / 54))) },
        (level: number): number => { return (55 + (20 * ((level - 30) / 15))) },
        (level: number): number => { return (10 + (45 * ((level - 15) / 15))) },
        (level: number): number => { return ( 0 + (10 * ((level -  1) / 14))) },
    ],
    "14": [
        (level: number): number => { return (85 + (15 * ((level - 80) / 19))) },
        (level: number): number => { return (60 + (25 * ((level - 40) / 40))) },
        (level: number): number => { return (40 + (20 * ((level - 20) / 20))) },
        (level: number): number => { return ( 0 + (40 * ((level -  1) / 19))) },
    ],
    "15": [
        (level: number): number => { return (95 + ( 5 * ((level - 80) / 19))) },
        (level: number): number => { return (65 + (30 * ((level - 60) / 20))) },
        (level: number): number => { return (25 + (40 * ((level - 25) / 35))) },
        (level: number): number => { return ( 0 + (25 * ((level -  1) / 25))) },
    ],
    "16": [
        (level: number): number => { return (90 + (10 * ((level - 80) / 19))) },
        (level: number): number => { return (75 + (15 * ((level - 60) / 20))) },
        (level: number): number => { return (20 + (55 * ((level - 18) / 42))) },
        (level: number): number => { return ( 0 + (20 * ((level -  1) / 17))) },
    ],
}
