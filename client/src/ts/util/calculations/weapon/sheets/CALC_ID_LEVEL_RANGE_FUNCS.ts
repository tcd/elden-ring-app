import {
    ADD,
    MINUS,
    MULTIPLY,
    DIVIDE,
    POW,
} from "."

export type CalcIdString =
    | "0"
    | "1"
    | "2"
    | "4"
    | "7"
    | "8"
    | "12"
    | "14"
    | "15"
    | "16"

// -----------------------------------------------------------------------------

export type CalcCorrectFunc = (level: Integer) => Decimal

export type FourFuncs = [CalcCorrectFunc, CalcCorrectFunc, CalcCorrectFunc, CalcCorrectFunc]

export type CalcIdLevelRangeFuncs = { [id in CalcIdString]: FourFuncs }

export const CALC_ID_LEVEL_RANGE_FUNCS: CalcIdLevelRangeFuncs = {
    "0":  [
        ($A$2: number): number => { return ADD(90,MULTIPLY(20,DIVIDE($A$2-80,70)))                            },
        ($A$2: number): number => { return ADD(75,MULTIPLY(15,DIVIDE($A$2-60,20)))                            },
        ($A$2: number): number => { return ADD(25,MULTIPLY(50,MINUS(1,POW(MINUS(1,DIVIDE($A$2-18,42)),1.2)))) },
        ($A$2: number): number => { return MULTIPLY(25,POW(DIVIDE($A$2-1,17),1.2))                            },
    ],
    "1":  [
        ($A$2: number): number => { return ADD(90,MULTIPLY(20,DIVIDE($A$2-80,70)))                            },
        ($A$2: number): number => { return ADD(75,MULTIPLY(15,DIVIDE($A$2-60,20)))                            },
        ($A$2: number): number => { return ADD(35,MULTIPLY(40,MINUS(1,POW(MINUS(1,DIVIDE($A$2-20,40)),1.2)))) },
        ($A$2: number): number => { return MULTIPLY(35,POW(DIVIDE($A$2-1,19),1.2))                            },
    ],
    "2":  [
        ($A$2: number): number => { return ADD(90,MULTIPLY(20,DIVIDE($A$2-80,70)))                            },
        ($A$2: number): number => { return ADD(75,MULTIPLY(15,DIVIDE($A$2-60,20)))                            },
        ($A$2: number): number => { return ADD(35,MULTIPLY(40,MINUS(1,POW(MINUS(1,DIVIDE($A$2-20,40)),1.2)))) },
        ($A$2: number): number => { return MULTIPLY(35,POW(DIVIDE($A$2-1,19),1.2))                            },
    ],
    "4":  [
        ($A$2: number): number => { return ADD(95,MULTIPLY( 5,DIVIDE($A$2-80,19))) },
        ($A$2: number): number => { return ADD(80,MULTIPLY(15,DIVIDE($A$2-50,30))) },
        ($A$2: number): number => { return ADD(40,MULTIPLY(40,DIVIDE($A$2-20,30))) },
        ($A$2: number): number => { return MULTIPLY(40,DIVIDE($A$2-1,19))          },
    ],
    "7":  [
        ($A$2: number): number => { return ADD(90,MULTIPLY(20,DIVIDE($A$2-80,70)))                            },
        ($A$2: number): number => { return ADD(75,MULTIPLY(15,DIVIDE($A$2-60,20)))                            },
        ($A$2: number): number => { return ADD(35,MULTIPLY(40,MINUS(1,POW(MINUS(1,DIVIDE($A$2-20,40)),1.2)))) },
        ($A$2: number): number => { return MULTIPLY(35,POW(DIVIDE($A$2-1,19),1.2))                            },
    ],
    "8":  [
        ($A$2: number): number => { return ADD(90,MULTIPLY(20,DIVIDE($A$2-80,70)))                            },
        ($A$2: number): number => { return ADD(75,MULTIPLY(15,DIVIDE($A$2-60,20)))                            },
        ($A$2: number): number => { return ADD(25,MULTIPLY(50,MINUS(1,POW(MINUS(1,DIVIDE($A$2-16,44)),1.2)))) },
        ($A$2: number): number => { return MULTIPLY(25,POW(DIVIDE($A$2-1,15),1.2))                            },
    ],
    "12": [
        ($A$2: number): number => { return ADD(75,MULTIPLY(25,DIVIDE($A$2-45,54))) },
        ($A$2: number): number => { return ADD(55,MULTIPLY(20,DIVIDE($A$2-30,15))) },
        ($A$2: number): number => { return ADD(10,MULTIPLY(45,DIVIDE($A$2-15,15))) },
        ($A$2: number): number => { return MULTIPLY(10,DIVIDE($A$2-1,14))          },
    ],
    "14": [
        ($A$2: number): number => { return ADD(85,MULTIPLY(15,DIVIDE($A$2-80,19))) },
        ($A$2: number): number => { return ADD(60,MULTIPLY(25,DIVIDE($A$2-40,40))) },
        ($A$2: number): number => { return ADD(40,MULTIPLY(20,DIVIDE($A$2-20,20))) },
        ($A$2: number): number => { return MULTIPLY(40,DIVIDE($A$2-1,19))          },
    ],
    "15": [
        ($A$2: number): number => { return ADD(95,MULTIPLY( 5,DIVIDE($A$2-80,19))) },
        ($A$2: number): number => { return ADD(65,MULTIPLY(30,DIVIDE($A$2-60,20))) },
        ($A$2: number): number => { return ADD(25,MULTIPLY(40,DIVIDE($A$2-25,35))) },
        ($A$2: number): number => { return MULTIPLY(25,DIVIDE($A$2-1,24))          },
    ],
    "16": [
        ($A$2: number): number => { return ADD(90,MULTIPLY(10,DIVIDE($A$2-80,19))) },
        ($A$2: number): number => { return ADD(75,MULTIPLY(15,DIVIDE($A$2-60,20))) },
        ($A$2: number): number => { return ADD(20,MULTIPLY(55,DIVIDE($A$2-18,42))) },
        ($A$2: number): number => { return MULTIPLY(20,DIVIDE($A$2-1,17))          },
    ],
}
