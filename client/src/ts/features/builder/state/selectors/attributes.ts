import { sum } from "lodash"

import { RootState } from "@app/state"
import { selectBuilderSlice } from "./select-builder-slice"

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
