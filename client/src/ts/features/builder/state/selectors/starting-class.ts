import { STARTING_CLASSES } from "@app/data"
import { StartingClass, StartingClassName } from "@app/types"
import { RootState } from "@app/state"
import { isBlank } from "@app/util"
import { selectBuilderSlice } from "./select-builder-slice"

export const selectStartingClassName        = (rootState: RootState): StartingClassName =>  selectBuilderSlice(rootState)?.startingClassName
export const selectPendingStartingClassName = (rootState: RootState): StartingClassName =>  selectBuilderSlice(rootState)?.pendingStartingClassName
export const selectConfirmingStartingClass  = (rootState: RootState): boolean           =>  selectBuilderSlice(rootState)?.confirmingStartingClass

export const selectStartingClass = (rootState: RootState): StartingClass => {
    const startingClassName = selectStartingClassName(rootState)
    if (isBlank(startingClassName)) {
        return {} as StartingClass
    }
    const startingClass = STARTING_CLASSES.find(x => x.name == startingClassName)
    return startingClass
}

