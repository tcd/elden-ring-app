import { isBlank } from "@app/util"

/**
 *
 * @param number The number to round.
 * @param precision The number of decimal places to keep.
 * @returns
 */
export const round = (number: number, precision: Integer): Decimal => {
    if (isBlank(number)) {
        return null
    }
    return parseFloat(Math.abs(number).toFixed(precision))
}
