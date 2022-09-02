import isString from "lodash/isString"

type CssUnit = "" | "px" | "em" | "rem"
type CssValue = `${number}${CssUnit}` | `${number}.${number}${CssUnit}`
interface ICssValueDetails {
    value: number
    unit: CssUnit
}

const CSS_UNIT = /^(?<value>\d*\.?\d*)(?<units>(px|em|rem))?$/i

const cleanUnit = (input: CssValue): ICssValueDetails => {
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

const divide = (dividend: CssValue, divisor: number): CssValue => {
    const { value, unit } = cleanUnit(dividend)
    const quotient = (value / divisor)
    return `${quotient}${unit}`
}

const multiply = (v1: CssValue, v2: number): CssValue => {
    const { value, unit } = cleanUnit(v1)
    return `${value * v2}${unit}`

}

export const CssMath = {
    cleanUnit,
    divide,
    multiply,
}
