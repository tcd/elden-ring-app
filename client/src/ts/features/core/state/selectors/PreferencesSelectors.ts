import type { RootState } from "@app/state"
import { selectSlice } from "./select-slice"

const selectPreferences = (rootState: RootState)  => selectSlice(rootState)?.preferences

const selectSoundsEnabled = (rootState: RootState)  => selectPreferences(rootState)?.sounds

// =============================================================================

export const PreferencesSelectors = {
    soundsEnabled: selectSoundsEnabled,
}
