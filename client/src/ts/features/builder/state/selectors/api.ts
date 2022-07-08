import { RootState } from "@app/state"
import { selectBuilderSlice } from "./select-builder-slice"
import { KITCHEN_SINK_DATA } from "../../../../data/kitchen-sink"

const _selectFetchEverythingRequest       = (rootState: RootState) => selectBuilderSlice(rootState)?.everythingRequest
const _selectFetchEverythingRequestStatus = (rootState: RootState) => _selectFetchEverythingRequest(rootState)?.status
// const _selectFetchEverythingResponse      = (rootState: RootState) => KITCHEN_SINK_DATA

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

export const selectFetchSuccessful = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    return (status === "fulfilled")
}

export const selectArmor                      = (rootState: RootState) => KITCHEN_SINK_DATA.armor                         ?? []
export const selectSpells                     = (rootState: RootState) => KITCHEN_SINK_DATA.spells                        ?? []
export const selectTalismans                  = (rootState: RootState) => KITCHEN_SINK_DATA.talismans                     ?? []
export const selectWeapons                    = (rootState: RootState) => KITCHEN_SINK_DATA.weapons                       ?? []
export const selectWeaponSkills               = (rootState: RootState) => KITCHEN_SINK_DATA.weapon_skills                 ?? []
export const selectWeaponTypes                = (rootState: RootState) => KITCHEN_SINK_DATA.weapon_types                  ?? []
export const selectAttackElementCorrectParams = (rootState: RootState) => KITCHEN_SINK_DATA.attack_element_correct_params ?? []

