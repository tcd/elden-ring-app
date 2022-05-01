import { isStringEmpty } from "."

/**
 * [Stack Overflow - Best way to flatten JS object (keys and values) to a single depth array](https://stackoverflow.com/a/66900543/7687024)
 */
export const flattenObject = (ob: any, prefix = "--") => {
    const ans = {}
    const magic = function (obj: any, parent: string = null) {
        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null && Array.isArray(obj[key]) === false) {
                if (isStringEmpty(parent)) {
                    magic(obj[key], key)
                } else {
                    magic(obj[key], parent + prefix + key)
                }
            } else {
                if (isStringEmpty(parent)) {
                    ans[key] = obj[key]
                } else {
                    ans[parent + prefix + key] = obj[key]
                }
            }
        }
    }
    magic(ob)
    return ans
}
