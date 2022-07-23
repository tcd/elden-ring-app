import { RootState } from "@app/state"
import { isBlank } from "@app/util"
import { selectLocation } from "./core"

// /**
//  * A unique string associated with this location. May be used to safely store
//  * and retrieve data in some other storage API, like `localStorage`.
//  *
//  * @note This value is always `"default"` on the initial location.
//  * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location.key
//  */
// export const selectKey = (rootState: RootState): string => selectLocation(rootState)?.key;

/**
 * An URL pathname, beginning with a `/`.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location.pathname
 */
export const selectPathname = (rootState: RootState): string => selectLocation(rootState)?.pathname

/**
 * A URL search string, beginning with a `?`.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location.search
 */
const _selectSearch = (rootState: RootState): string => selectLocation(rootState)?.search

/**
 * A URL fragment identifier, beginning with a `#`.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location.hash
 */
const _selectHash = (rootState: RootState): string => selectLocation(rootState)?.hash

export const selectHash = (rootState: RootState): string => {
    const hash = _selectHash(rootState)
    if (isBlank(hash)) {
        return null
    }
    return hash.replace(/^#/, "")
}

export const selectQueryParams = (rootState: RootState): URLSearchParams => {
    const search = _selectSearch(rootState)
    if (isBlank(search)) {
        return new URLSearchParams()
    }
    const queryString = search.replace(/^\?/, "")
    const searchParams = new URLSearchParams(queryString)
    return searchParams
}


