import { RootState } from "@app/state"
import { selectBuilderSlice } from "./select-builder-slice"

const _selectFetchEverythingRequest       = (rootState: RootState) => selectBuilderSlice(rootState)?.everythingRequest
const _selectFetchEverythingRequestStatus = (rootState: RootState) => _selectFetchEverythingRequest(rootState)?.status
const _selectFetchEverythingResponse      = (rootState: RootState) => _selectFetchEverythingRequest(rootState)?.response

export const selectShouldFetchEverything = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    if (status === "idle") {
        return true
    }
}

export const selectFetchingEverything = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    return (status === "pending")
}

export const selectFetchFailed = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    return (status === "rejected")
}

export const selectArmor                      = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.armor                         ?? []
export const selectSpells                     = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.spells                        ?? []
export const selectTalismans                  = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.talismans                     ?? []
export const selectWeapons                    = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.weapons                       ?? []
export const selectWeaponSkills               = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.weapon_skills                 ?? []
export const selectWeaponTypes                = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.weapon_types                  ?? []
export const selectAttackElementCorrectParams = (rootState: RootState) => _selectFetchEverythingResponse(rootState)?.attack_element_correct_params ?? []
