import { RootState } from "@app/state"

import { selectBuilderSlice } from "./select-builder-slice"

export const selectWhichCharacterStatus = (rootState: RootState) => selectBuilderSlice(rootState)?.whichCharacterStatus
export const selectCurrentMenu          = (rootState: RootState) => selectBuilderSlice(rootState)?.currentMenu
