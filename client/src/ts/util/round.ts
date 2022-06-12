/**
 *
 * @param number The number to round.
 * @param precision The number of decimal places to keep.
 * @returns
 */
export const round = (number: number, precision: Integer): Decimal => {
    return parseFloat(Math.abs(number).toFixed(precision))
}
