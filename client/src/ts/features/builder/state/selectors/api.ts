import { RootState } from "@app/state"

export const selectShouldFetchEverything = (state: RootState) => {
    const requestState = state.Builder.everythingRequest
    if (requestState.status === "idle") {
        return true
    }
}

export const selectFetchingEverything = (state: RootState) => {
    const requestState = state.Builder.everythingRequest
    return (requestState.status === "pending")
}

const selectEverythingResponse = (rootState: RootState) => {
    return rootState?.Builder?.everythingRequest?.response
}

export const selectArmor = (rootState: RootState) => {
    return selectEverythingResponse(rootState)?.armor ?? []
}

export const selectSpells = (rootState: RootState) => {
    return selectEverythingResponse(rootState)?.spells ?? []
}

export const selectTalismans = (rootState: RootState) => {
    return selectEverythingResponse(rootState)?.talismans ?? []
}

export const selectWeapons = (rootState: RootState) => {
    return selectEverythingResponse(rootState)?.weapons ?? []
}

export const selectWeaponSkills = (rootState: RootState) => {
    return selectEverythingResponse(rootState)?.weapon_skills ?? []
}

export const selectWeaponTypes = (rootState: RootState) => {
    return selectEverythingResponse(rootState)?.weapon_types ?? []
}

export const selectAttackElementCorrectParams = (state: RootState) => {
    return selectEverythingResponse(state)?.attack_element_correct_params ?? []
}
