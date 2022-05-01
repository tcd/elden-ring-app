import { RootState } from "@app/state"

const selectBuilderState = (state: RootState) => { return state?.Builder }

export const selectFetchingEverything = (state: RootState) => {
    const requestState = state.Builder.everythingRequest
    return (requestState.status === "pending")
}

export const selectShouldFetchEverything = (state: RootState) => {
    const requestState = state.Builder.everythingRequest
    if (requestState.status === "idle") {
        return true
    }
}

export const selectArmor = (state: RootState) => {
    return selectEverythingResponse(state)?.armor ?? []
}

export const selectSpells = (state: RootState) => {
    return selectEverythingResponse(state)?.spells ?? []
}

export const selectTalismans = (state: RootState) => {
    return selectEverythingResponse(state)?.talismans ?? []
}

const selectEverythingResponse = (state: RootState) => {
    return state?.Builder?.everythingRequest?.response
}

export const selectWeapons = (state: RootState) => {
    return selectEverythingResponse(state)?.weapons ?? []
}

export const selectWeaponSkills = (state: RootState) => {
    return selectEverythingResponse(state)?.weapon_skills ?? []
}

export const selectWeaponTypes = (state: RootState) => {
    return selectEverythingResponse(state)?.weapon_types ?? []
}
