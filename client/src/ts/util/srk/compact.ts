import {
    isObject,
    isString,
    objectHasValues,
    isStringEmpty,
    isNullOrUndefined,
} from "."

// export const compact = <T>(x: T): T => {
//     if (isNullOrUndefined(x)) {
//         return x
//     }
//     if (Array.isArray(x)) {
//         return compactArray(x) as unknown as T
//     }
// }

/**
 * Returns a copy of an array with the following values removed:
 * - `undefined`
 * - `null`
 */
export const compactArray = <T>(x: T[]): T[] => {
    if (isNullOrUndefined(x)) {
        return []
    }
    return x.filter(y => !isNullOrUndefined(y))
}

/**
 * Returns a copy of an object with the following values removed:
 * - `undefined`
 * - `null`
 * -  `{}` (empty objects)
 * -  `[]` (empty arrays)
 * -  `""` (blank strings)
 */
export const compactObject = <T>(object: T, includeObjects = false): T => {
    if (isNullOrUndefined(object)) {
        return null
    }
    if ((object as any) == []) {
        return null
    }
    const newObject = { ...object }
    Object.keys(newObject).forEach((key) => {
        const value = newObject[key]
        if (isNullOrUndefined(value)) {
            delete(newObject[key])
        }
        if (isString(value)) {
            if (isStringEmpty(value)) {
                delete(newObject[key])
            }
        }
        if (includeObjects && isObject(value)) {
            if (objectHasValues(value)) {
                newObject[key] = compactObject(value)
            } else {
                delete(newObject[key])
            }
        }
    })
    return clearEmpties(newObject)
}

/**
 * [Stack Overflow - Remove empty objects from an object](https://stackoverflow.com/a/42736367/7687024)
 */
const clearEmpties = (o) => {
    for (const k in o) {
        if (!o[k] || typeof o[k] !== "object") {
            continue // If null or not an object, skip to the next iteration
        }

        // The property is an object
        clearEmpties(o[k]) // <-- Make a recursive call on the nested object
        if (Object.keys(o[k]).length === 0) {
            delete o[k] // The object had no properties, so delete that property
        }
    }
    return o
}
