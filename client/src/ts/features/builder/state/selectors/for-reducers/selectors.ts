import { STARTING_CLASSES } from "@app/data"
import { AttributeName } from "@app/types"
import { BuilderState } from "../../state"

export const selectCorrectedAttributeLevel = (slice: BuilderState, attribute: AttributeName): Integer => {
    const className = slice.startingClassName
    const sClass = STARTING_CLASSES.find(x => x.name == className)
    const baseLevel = sClass[attribute]
    const addedLevels = slice.attributes[attribute]
    return baseLevel + addedLevels
}
