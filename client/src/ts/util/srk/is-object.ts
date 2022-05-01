import { isNumber } from "lodash"

import {
    isNullOrUndefined,
    isString,
    isBoolean,
} from "."

/**
 * Checks that `x` is not one of the following:
 *
 * - null
 * - undefined
 * - boolean
 * - string
 * - number
 * - array
 *
 * @param x
 */
export const isObject = (x: any): boolean => {
    if (isNullOrUndefined(x)) { return false }
    if (isBoolean(x))         { return false }
    if (isString(x))          { return false }
    if (isNumber(x))          { return false }
    if (Array.isArray(x))     { return false }
    return true
}
