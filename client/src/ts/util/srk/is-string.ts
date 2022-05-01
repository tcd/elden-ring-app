/**
 * Returns `true` if `x` is a string.
 */
export const isString = (x: any): boolean => {
    return (typeof x === "string" || x instanceof String)
}
