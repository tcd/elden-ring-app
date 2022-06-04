import { RootState } from "@app/state"

export const selectWhichCharacterStatus = (state: RootState) => { return state?.Builder?.whichCharacterStatus }
