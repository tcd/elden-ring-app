import type { RootState } from "@app/state"

import type { CharacterStatusState } from "."

/** @private */
const selectSlice = (rootState: RootState): CharacterStatusState => {
    return rootState.CharacterStatus
}

const selectWhich = (rootState: RootState) => {
    return selectSlice(rootState)?.whichCharacterStatus
}

export const CharacterStatusSelectors = {
    which: selectWhich,
}
