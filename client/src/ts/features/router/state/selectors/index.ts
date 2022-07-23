import * as Core from "./core"
import * as Derived from "./derived"
import { selectLastMainPage } from "./last-main-page"

export const RouterSelectors = {
    // Core
    action: Core.selectAction,
    location: Core.selectLocation,
    previousLocations: Core.selectPreviousLocations,
    // Derived
    pathname: Derived.selectPathname,
    hash: Derived.selectHash,
    queryParams: Derived.selectQueryParams,
    // Other
    lastMainPage: selectLastMainPage,
}
