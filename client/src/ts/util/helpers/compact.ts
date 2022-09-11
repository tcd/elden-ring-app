import isPlainObject from "lodash/isPlainObject"

import { isBlank } from "./is-blank"

/**
 * Make a copy of `object` with all blank values removed.
 *
 * There should be a standard library function to do this.
 *
 * - https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
 *
 * @param object any object with properties
 * @param exclude properties to keep even if they are blank
 * @returns a copy of `object` with all blank values removed.
 */
export const compact = <T extends object>(object: T, exclude: string[] = []): Partial<T> => {
    // don't mutate the original value
    const result = { ...object }

    for (const propName in result) {
        if (exclude.find(x => x == propName)) {
            continue
        }
        if (isBlank(result[propName])) {
            delete(result[propName])
            continue
        }
        if (isPlainObject(result[propName])) {
            // @ts-ignore: next-line
            result[propName] = compact(result[propName])
            continue
        }
        if (Array.isArray(result[propName])) {
            // @ts-ignore: next-line
            result[propName] = compactArray(result[propName])
        }
    }

    return result
}

export const compactArray = (array: any[]) => {
    const result: any[] = []
    for (const item of array) {
        if (isBlank(item)) {
            continue
        }
        if (isPlainObject(item)) {
            result.push(compact(item))
            continue
        }
        if (Array.isArray(item)) {
            result.push(compactArray(item))
        }
    }
    return result.filter(y => !isBlank(y))
}
