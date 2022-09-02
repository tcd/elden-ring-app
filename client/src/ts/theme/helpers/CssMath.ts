import isString from "lodash/isString"

interface ICssUnit {
    value: number
    unit: "" | "px" | "em" | "rem"
}

const CSS_UNIT = /^(?<value>\d*\.?\d*)(?<units>(px|em|rem))?$/i

const cleanUnit = (input: string | number): ICssUnit => {
    if (isString(input)) {
        const matches = CSS_UNIT.exec(input)
        if (matches?.groups === undefined) {
            throw `[CssMath.cleanUnit] invalid input: '${input}'`
        } else {
            return {
                value: parseFloat(matches?.groups?.value),
                // @ts-ignore: next-line
                unit: matches?.groups?.units ?? "",
            }
        }
    } else {
        return {
            value: input,
            unit: "",
        }
    }
}

const divide = (dividend: string | number, divisor: number): string => {
    const { value, unit } = cleanUnit(dividend)
    const quotient = (value / divisor)
    return `${quotient}${unit}`
}

export const CssMath = {
    cleanUnit,
    divide,
}
