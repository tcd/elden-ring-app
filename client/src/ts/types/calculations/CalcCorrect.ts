export type CalcCorrectIdString =
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

export type ThreeNumbers = [
    Integer,
    Integer,
    Integer,
]

export type CalcIdLevelRanges = {
    [id in CalcCorrectIdString]: ThreeNumbers
}

export type CalcCorrectFunc = (level: Integer) => Decimal

export type FourFuncs = [
    CalcCorrectFunc,
    CalcCorrectFunc,
    CalcCorrectFunc,
    CalcCorrectFunc,
]

export type CalcIdLevelRangeFuncs = {
    [id in CalcCorrectIdString]: FourFuncs
}
