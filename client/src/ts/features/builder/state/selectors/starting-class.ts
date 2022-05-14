import { StartingClass, StartingClassName } from "@app/types"
import { RootState } from "@app/state"
import { isBlank } from "@app/util"
import { STARTING_CLASSES } from "@app/data"

export const selectStartingClassName = (state: RootState): StartingClassName => {
    return state?.Builder?.startingClassName
}

export const selectStartingClass = (state: RootState): StartingClass => {
    const startingClassName = selectStartingClassName(state)
    if (isBlank(startingClassName)) {
        return null
    }
    const startingClass = STARTING_CLASSES.find(x => x.name == startingClassName)
    return startingClass
}
