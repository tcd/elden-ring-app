import { isBlank } from "./is-blank"

/**
 *
 * @param number The number to round.
 * @param precision The number of decimal places to keep.
 */
export const round = (number: number, precision: Integer): string => {
    if (isBlank(number)) {
        return null
    }
    // return parseFloat(Math.abs(number).toFixed(precision))
    return (Math.round(number * 100) / 100).toFixed(precision)
}
