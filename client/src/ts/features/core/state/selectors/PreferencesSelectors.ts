import type { RootState } from "@app/state"
import { selectSlice } from "./select-slice"

const selectPreferences = (rootState: RootState)  => selectSlice(rootState)?.preferences

const selectSoundsEnabled = (rootState: RootState)  => selectPreferences(rootState)?.sounds
const selectConsole = (rootState: RootState)  => selectPreferences(rootState)?.console

// =============================================================================

export const PreferencesSelectors = {
    soundsEnabled: selectSoundsEnabled,
    console: selectConsole,
}
