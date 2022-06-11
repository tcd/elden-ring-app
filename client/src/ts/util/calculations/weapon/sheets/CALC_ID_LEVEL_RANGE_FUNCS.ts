import {
    ADD,
    MINUS,
    MULTIPLY,
    DIVIDE,
    POW,
    CalcIdLevelRangeFuncs,
} from "."

export const CALC_ID_LEVEL_RANGE_FUNCS: CalcIdLevelRangeFuncs = {
    "0": [
        (lvl: number): number => { return ADD(90,MULTIPLY(20,DIVIDE(lvl-80,70)))                            },
        (lvl: number): number => { return ADD(75,MULTIPLY(15,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(25,MULTIPLY(50,MINUS(1,POW(MINUS(1,DIVIDE(lvl-18,42)),1.2)))) },
        (lvl: number): number => { return MULTIPLY(25,POW(DIVIDE(lvl-1,17),1.2))                            },
    ],
    "1": [
        (lvl: number): number => { return ADD(90,MULTIPLY(20,DIVIDE(lvl-80,70)))                            },
        (lvl: number): number => { return ADD(75,MULTIPLY(15,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(35,MULTIPLY(40,MINUS(1,POW(MINUS(1,DIVIDE(lvl-20,40)),1.2)))) },
        (lvl: number): number => { return MULTIPLY(35,POW(DIVIDE(lvl-1,19),1.2))                            },
    ],
    "2": [
        (lvl: number): number => { return ADD(90,MULTIPLY(20,DIVIDE(lvl-80,70)))                            },
        (lvl: number): number => { return ADD(75,MULTIPLY(15,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(35,MULTIPLY(40,MINUS(1,POW(MINUS(1,DIVIDE(lvl-20,40)),1.2)))) },
        (lvl: number): number => { return MULTIPLY(35,POW(DIVIDE(lvl-1,19),1.2))                            },
    ],
    "4": [
        (lvl: number): number => { return ADD(95,MULTIPLY( 5,DIVIDE(lvl-80,19)))                            },
        (lvl: number): number => { return ADD(80,MULTIPLY(15,DIVIDE(lvl-50,30)))                            },
        (lvl: number): number => { return ADD(40,MULTIPLY(40,DIVIDE(lvl-20,30)))                            },
        (lvl: number): number => { return MULTIPLY(40,DIVIDE(lvl-1,19))                                     },
    ],
    "7": [
        (lvl: number): number => { return ADD(90,MULTIPLY(20,DIVIDE(lvl-80,70)))                            },
        (lvl: number): number => { return ADD(75,MULTIPLY(15,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(35,MULTIPLY(40,MINUS(1,POW(MINUS(1,DIVIDE(lvl-20,40)),1.2)))) },
        (lvl: number): number => { return MULTIPLY(35,POW(DIVIDE(lvl-1,19),1.2))                            },
    ],
    "8": [
        (lvl: number): number => { return ADD(90,MULTIPLY(20,DIVIDE(lvl-80,70)))                            },
        (lvl: number): number => { return ADD(75,MULTIPLY(15,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(25,MULTIPLY(50,MINUS(1,POW(MINUS(1,DIVIDE(lvl-16,44)),1.2)))) },
        (lvl: number): number => { return MULTIPLY(25,POW(DIVIDE(lvl-1,15),1.2))                            },
    ],
    "12": [
        (lvl: number): number => { return ADD(75,MULTIPLY(25,DIVIDE(lvl-45,54)))                            },
        (lvl: number): number => { return ADD(55,MULTIPLY(20,DIVIDE(lvl-30,15)))                            },
        (lvl: number): number => { return ADD(10,MULTIPLY(45,DIVIDE(lvl-15,15)))                            },
        (lvl: number): number => { return MULTIPLY(10,DIVIDE(lvl-1,14))                                     },
    ],
    "14": [
        (lvl: number): number => { return ADD(85,MULTIPLY(15,DIVIDE(lvl-80,19)))                            },
        (lvl: number): number => { return ADD(60,MULTIPLY(25,DIVIDE(lvl-40,40)))                            },
        (lvl: number): number => { return ADD(40,MULTIPLY(20,DIVIDE(lvl-20,20)))                            },
        (lvl: number): number => { return MULTIPLY(40,DIVIDE(lvl-1,19))                                     },
    ],
    "15": [
        (lvl: number): number => { return ADD(95,MULTIPLY( 5,DIVIDE(lvl-80,19)))                            },
        (lvl: number): number => { return ADD(65,MULTIPLY(30,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(25,MULTIPLY(40,DIVIDE(lvl-25,35)))                            },
        (lvl: number): number => { return MULTIPLY(25,DIVIDE(lvl-1,24))                                     },
    ],
    "16": [
        (lvl: number): number => { return ADD(90,MULTIPLY(10,DIVIDE(lvl-80,19)))                            },
        (lvl: number): number => { return ADD(75,MULTIPLY(15,DIVIDE(lvl-60,20)))                            },
        (lvl: number): number => { return ADD(20,MULTIPLY(55,DIVIDE(lvl-18,42)))                            },
        (lvl: number): number => { return MULTIPLY(20,DIVIDE(lvl-1,17))                                     },
    ],
}
