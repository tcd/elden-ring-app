import { RootState } from "@app/state"
import { CharacterStatusState } from "."

const selectSlice = (rootState: RootState): CharacterStatusState => {
    return rootState.CharacterStatus
}

const selectWhich = (rootState: RootState) => {
    return selectSlice(rootState)?.whichCharacterStatus
}

export const CharacterStatusSelectors = {
    which: selectWhich,
}
