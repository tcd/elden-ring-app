import { isNullOrUndefined } from "."

/**
 * Returns `true` if `str` is:
 *
 * - null
 * - undefined
 * - empty ("")
 * - only whitespace; spaces, tabs, and (based on `excludeNewlines`) newlines
 *
 * @param str the value to test
 * @param excludeNewLines consider a string with newline characters to not be empty
 */
export const isStringEmpty = (str: any, excludeNewLines = false): boolean => {
    if (isNullOrUndefined(str)) { return true }
    if (str === "")             { return true }
    if (str?.trim()?.length === 0) {
        if (str?.match(/\s*\n\s*/) && excludeNewLines) { return false }
        return true
    }
    return false
}
