import { STARTING_CLASSES } from "@app/data"
import { AttributeName, StartingClass, StartingClassName } from "@app/types"
import { isBlank } from "@app/util"
import { RootState } from "@app/state"
import { StartingClassState } from "./state"

const _selectSlice = (rootState: RootState): StartingClassState => rootState?.StartingClass

const selectStartingClassName        = (rootState: RootState): StartingClassName =>  _selectSlice(rootState)?.startingClassName
const selectPendingStartingClassName = (rootState: RootState): StartingClassName =>  _selectSlice(rootState)?.pendingStartingClassName
const selectConfirmingStartingClass  = (rootState: RootState): boolean           =>  _selectSlice(rootState)?.confirmingStartingClass

const selectStartingClass = (rootState: RootState): StartingClass => {
    const startingClassName = selectStartingClassName(rootState)
    if (isBlank(startingClassName)) {
        return {} as StartingClass
    }
    const startingClass = STARTING_CLASSES.find(x => x.name == startingClassName)
    return startingClass
}

const selectBaseRuneLevel = (rootState: RootState): Integer => {
    return selectStartingClass(rootState)?.level ?? 0
}


/**
 * Select all starting attribute levels for the active starting class.
 */
const selectStartingClassAttributes = (rootState: RootState): Record<AttributeName, Integer> => {
    const startingClass = selectStartingClass(rootState)
    return {
        vigor:        startingClass.vigor,
        mind:         startingClass.mind,
        endurance:    startingClass.endurance,
        strength:     startingClass.strength,
        dexterity:    startingClass.dexterity,
        intelligence: startingClass.intelligence,
        faith:        startingClass.faith,
        arcane:       startingClass.arcane,
    }
}

/**
 * Select the starting level of a given attribute for the active starting class.
 */
const selectBaseAttribute = (rootState: RootState, attribute: AttributeName): Integer => {
    const startingClass = selectStartingClass(rootState)
    return startingClass?.[attribute] ?? 0
}

const selectBaseVigor        = (rootState: RootState) => selectBaseAttribute(rootState, "vigor")
const selectBaseMind         = (rootState: RootState) => selectBaseAttribute(rootState, "mind")
const selectBaseEndurance    = (rootState: RootState) => selectBaseAttribute(rootState, "endurance")
const selectBaseStrength     = (rootState: RootState) => selectBaseAttribute(rootState, "strength")
const selectBaseDexterity    = (rootState: RootState) => selectBaseAttribute(rootState, "dexterity")
const selectBaseIntelligence = (rootState: RootState) => selectBaseAttribute(rootState, "intelligence")
const selectBaseFaith        = (rootState: RootState) => selectBaseAttribute(rootState, "faith")
const selectBaseArcane       = (rootState: RootState) => selectBaseAttribute(rootState, "arcane")

export const StartingClassSelectors = {
    pendingName:             selectPendingStartingClassName,
    confirmingStartingClass: selectConfirmingStartingClass,
    startingClass:           selectStartingClass,
    startingClassName:       selectStartingClassName,
    baseRuneLevel:           selectBaseRuneLevel,
    allBaseAttributeLevels: selectStartingClassAttributes,
    baseAttribute: selectBaseAttribute,
    baseAttributeLevels: {
        vigor:         selectBaseVigor,
        mind:          selectBaseMind,
        endurance:     selectBaseEndurance,
        strength:      selectBaseStrength,
        dexterity:     selectBaseDexterity,
        intelligence:  selectBaseIntelligence,
        faith:         selectBaseFaith,
        arcane:        selectBaseArcane,
    },
}
