import { LevelUpSlice } from "./state"

import {
    decrementAttribute,
    incrementAttribute,
} from "./thunks"

export const LevelUpActions = {
    ...LevelUpSlice.actions,
    decrementAttribute,
    incrementAttribute,
}
