import { RootState } from "@app/state"

export const selectBuilderState = (state: RootState) => { return state?.Builder }

export const selectWhichCharacterStatus = (state: RootState) => { return state?.Builder?.whichCharacterStatus }
