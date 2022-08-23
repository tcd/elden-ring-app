import { CoreSelectors } from "./core"
import { DerivedSelectors } from "./derived"
import { selectLastMainPage } from "./last-main-page"

export const RoutingSelectors = {
    ...CoreSelectors,
    ...DerivedSelectors,
    // Other
    lastMainPage: selectLastMainPage,
}
