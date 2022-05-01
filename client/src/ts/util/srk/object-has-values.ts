import { isObject, isNullOrUndefined } from "."

/**
 * Returns `true` if `object`:
 * - Is a plain object
 * - Has at least one value that is not `null`
 * @param object the object to test
 */
export const objectHasValues = (object: any): boolean => {
    if (!isObject(object)) { return false }

    let hasValues = false

    Object.keys(object).forEach((key) => {
        const value = object[key]
        if (!isNullOrUndefined(value)) {
            hasValues = true
        }
    })

    return hasValues
}
