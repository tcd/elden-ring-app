/**
 * Checks that a value is either `true` or `false`.
 * @param x the value to test
 */
export const isBoolean = (x: any): boolean => {
    if (x === true)  { return true }
    if (x === false) { return true }
    return false
}
