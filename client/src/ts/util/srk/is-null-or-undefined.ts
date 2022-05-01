/**
 * Returns `true` if `x` is `null` or `undefined`.
 */
export const isNullOrUndefined = (x: any): boolean => {
    if (x === undefined) { return true }
    if (x === null)      { return true }
    return false
}
