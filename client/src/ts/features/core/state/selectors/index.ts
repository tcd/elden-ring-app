import { CoreSelectors as _CoreSelectors } from "./CoreSelectors"
import { PreferencesSelectors } from "./PreferencesSelectors"

export const CoreSelectors = {
    ..._CoreSelectors,
    preferences: PreferencesSelectors,
}
