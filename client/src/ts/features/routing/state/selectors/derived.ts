import type { Location } from "react-router-dom"
import type { RootState } from "@app/state"
import { isBlank } from "@app/util"
import { CoreSelectors } from "./core"

const selectPreviousLocation = (rootState: RootState): Location => CoreSelectors.previousLocations(rootState)?.[0] ?? null;

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
const selectPathname = (rootState: RootState): string => CoreSelectors.location(rootState)?.pathname

// -----------------------------------------------------------------------------
// Hash Fragment
// -----------------------------------------------------------------------------

/**
 * A URL fragment identifier, beginning with a `#`.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location.hash
 */
const _selectHash = (rootState: RootState): string => CoreSelectors.location(rootState)?.hash

const selectHash = (rootState: RootState): string => {
    const hash = _selectHash(rootState)
    if (isBlank(hash)) {
        return null
    }
    return hash.replace(/^#/, "")
}

// -----------------------------------------------------------------------------
// Query Params
// -----------------------------------------------------------------------------

/**
 * A URL search string, beginning with a `?`.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#location.search
 */
const _selectSearch = (rootState: RootState): string => CoreSelectors.location(rootState)?.search

const selectQueryParams = (rootState: RootState): URLSearchParams => {
    const search = _selectSearch(rootState)
    if (isBlank(search)) {
        return new URLSearchParams()
    }
    const queryString = search.replace(/^\?/, "")
    const searchParams = new URLSearchParams(queryString)
    return searchParams
}

// =============================================================================

export const DerivedSelectors = {
    pathname: selectPathname,
    hash: selectHash,
    queryParams: selectQueryParams,
    previousLocation: selectPreviousLocation,
}
