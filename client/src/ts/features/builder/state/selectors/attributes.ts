import { sum } from "lodash"

import { RootState } from "@app/state"
import { selectBuilderSlice } from "./select-builder-slice"

// export const selectAttributes = (state: RootState) => { return selectBuilderSlice(state)?.attributes }

// export const selectVigor        = (state: RootState) => { return selectAttributes(state)?.vigor }
// export const selectMind         = (state: RootState) => { return selectAttributes(state)?.mind }
// export const selectEndurance    = (state: RootState) => { return selectAttributes(state)?.endurance }
// export const selectStrength     = (state: RootState) => { return selectAttributes(state)?.strength }
// export const selectDexterity    = (state: RootState) => { return selectAttributes(state)?.dexterity }
// export const selectIntelligence = (state: RootState) => { return selectAttributes(state)?.intelligence }
// export const selectFaith        = (state: RootState) => { return selectAttributes(state)?.faith }
// export const selectArcane       = (state: RootState) => { return selectAttributes(state)?.arcane }

export const selectAttributes = (rootState: RootState) => selectBuilderSlice(rootState)?.attributes

export const selectVigor        = (rootState: RootState): Integer => selectAttributes(rootState)?.vigor
export const selectMind         = (rootState: RootState): Integer => selectAttributes(rootState)?.mind
export const selectEndurance    = (rootState: RootState): Integer => selectAttributes(rootState)?.endurance
export const selectStrength     = (rootState: RootState): Integer => selectAttributes(rootState)?.strength
export const selectDexterity    = (rootState: RootState): Integer => selectAttributes(rootState)?.dexterity
export const selectIntelligence = (rootState: RootState): Integer => selectAttributes(rootState)?.intelligence
export const selectFaith        = (rootState: RootState): Integer => selectAttributes(rootState)?.faith
export const selectArcane       = (rootState: RootState): Integer => selectAttributes(rootState)?.arcane

export const selectTotalAttributes = (rootState: RootState): Integer => {
    const attributes      = selectAttributes(rootState)
    const attributeValues = Object.values(attributes)
    return sum(attributeValues)
}
