import { sum } from "lodash"

import { RootState } from "@app/state"

export const selectAttributes = (state: RootState) => { return state?.Builder?.attributes }

export const selectVigor        = (state: RootState) => { return state?.Builder?.attributes?.vigor }
export const selectMind         = (state: RootState) => { return state?.Builder?.attributes?.mind }
export const selectEndurance    = (state: RootState) => { return state?.Builder?.attributes?.endurance }
export const selectStrength     = (state: RootState) => { return state?.Builder?.attributes?.strength }
export const selectDexterity    = (state: RootState) => { return state?.Builder?.attributes?.dexterity }
export const selectIntelligence = (state: RootState) => { return state?.Builder?.attributes?.intelligence }
export const selectFaith        = (state: RootState) => { return state?.Builder?.attributes?.faith }
export const selectArcane       = (state: RootState) => { return state?.Builder?.attributes?.arcane }

export const selectTotalAttributes = (state: RootState) => {
    const attributes = state?.Builder?.attributes
    const attributeValues = Object.values(attributes)
    return sum(attributeValues)
}
